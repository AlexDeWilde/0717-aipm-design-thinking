(function () {
  "use strict";

  // --- Scenario data ---
  // Three deliberately varied cases: A = clearly linked to a recent change,
  // B = no related recent change, C = ambiguous / plausible false alarm.
  // These are simulated test scenarios for the prototype, not evidence —
  // they do not go in discovery.md's evidence log.
  var SCENARIOS = [
    {
      label: "checkout-api — elevated 5xx errors",
      title: "Elevated 5xx error rate",
      service: "checkout-api",
      signal: "12% of requests returning 5xx (baseline: 0.4%)",
      region: "us-east-1",
      fired: "2 minutes ago",
      changes: [
        { time: "14:02 UTC (8 min ago)", desc: "Deploy: <strong>checkout-api v2.14.0</strong> — updated payment retry logic" },
        { time: "13:40 UTC (30 min ago)", desc: "Config change: increased DB connection pool timeout for checkout-api" },
        { time: "11:15 UTC (~3 hr ago)", desc: "Deploy: auth-gateway v1.9.2 (different service)" }
      ],
      queryResponses: [
        { keywords: ["change", "recent", "deploy", "what changed"], response: "Most recent relevant change: checkout-api v2.14.0 deployed 8 minutes ago, updating payment retry logic. A DB connection pool timeout config change also went out 30 minutes ago." },
        { keywords: ["similar", "past", "before", "incident", "history"], response: "Yes — a comparable 5xx spike occurred after a previous payment retry logic deploy. That incident was resolved by rolling back the deploy." },
        { keywords: ["who", "escalate", "owner", "contact"], response: "Service owner for checkout-api: Payments team. They authored the most recent deploy (checkout-api v2.14.0)." }
      ]
    },
    {
      label: "auth-service — elevated login latency",
      title: "Elevated login latency",
      service: "auth-service",
      signal: "p95 login latency 300ms above baseline",
      region: "eu-west-1",
      fired: "3 minutes ago",
      changes: [
        { time: "yesterday 09:10 UTC (~27 hr ago)", desc: "Deploy: auth-service v4.2.1 — minor logging change" },
        { time: "2 days ago", desc: "Deploy: notifications-service v1.3.0 (different service)" },
        { time: "5 days ago", desc: "Config change: auth-service session cache size increased" }
      ],
      queryResponses: [
        { keywords: ["change", "recent", "deploy", "what changed"], response: "No change to auth-service in the last 24 hours. The most recent related deploy was over a day ago (logging only)." },
        { keywords: ["similar", "past", "before", "incident", "history"], response: "No matching past incident found for this latency pattern." },
        { keywords: ["who", "escalate", "owner", "contact"], response: "Service owner for auth-service: Identity team." },
        { keywords: ["traffic", "load", "spike"], response: "Regional traffic is within normal range for this time of day." }
      ]
    },
    {
      label: "recommendation-service — brief queue depth spike",
      title: "Queue depth spike (recovering)",
      service: "recommendation-service",
      signal: "Queue depth briefly reached 4x baseline, now trending back down",
      region: "us-west-2",
      fired: "1 minute ago",
      changes: [
        { time: "90 minutes ago", desc: "Deploy: recommendation-worker v1.6.0 (upstream dependency of recommendation-service)" },
        { time: "6 hours ago", desc: "Config change: increased batch size for recommendation-service queue consumer" },
        { time: "yesterday", desc: "Deploy: unrelated-service billing-api v2.0.0 (different service)" }
      ],
      queryResponses: [
        { keywords: ["change", "recent", "deploy", "what changed"], response: "An upstream dependency (recommendation-worker) deployed 90 minutes ago. Timing is not tight, but not fully ruled out either." },
        { keywords: ["similar", "past", "before", "incident", "history"], response: "One past case looked similar but turned out to be a monitoring blip, not a real incident — queue depth self-recovered without action." },
        { keywords: ["who", "escalate", "owner", "contact"], response: "Service owner for recommendation-service: Discovery team." }
      ]
    }
  ];

  var currentScenario = 0;
  var results = [];
  var queryHistory = [];
  var startTime = null;
  var timerInterval = null;

  var screens = document.querySelectorAll(".screen");
  function showScreen(id) {
    screens.forEach(function (s) {
      s.classList.toggle("active", s.id === id);
    });
  }

  function formatElapsed(ms) {
    var totalSeconds = Math.floor(ms / 1000);
    var m = Math.floor(totalSeconds / 60);
    var s = totalSeconds % 60;
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  function startTimer() {
    startTime = Date.now();
    if (timerInterval) clearInterval(timerInterval);
    var timerEl = document.getElementById("timer");
    timerEl.textContent = "00:00";
    timerInterval = setInterval(function () {
      timerEl.textContent = formatElapsed(Date.now() - startTime);
    }, 250);
  }

  function loadScenario(index) {
    var s = SCENARIOS[index];
    document.getElementById("scenario-indicator").textContent =
      "Alert " + (index + 1) + " of " + SCENARIOS.length;

    document.getElementById("alert-title").textContent = s.title;
    document.getElementById("alert-service").textContent = s.service;
    document.getElementById("alert-signal").textContent = s.signal;
    document.getElementById("alert-region").textContent = s.region;
    document.getElementById("alert-fired").textContent = s.fired;
    document.getElementById("changes-service").textContent = s.service;

    var list = document.getElementById("change-list");
    list.innerHTML = "";
    s.changes.forEach(function (c) {
      var li = document.createElement("li");
      li.innerHTML =
        '<span class="change-time">' + c.time + "</span>" +
        '<span class="change-desc">' + c.desc + "</span>";
      list.appendChild(li);
    });

    queryHistory = [];
    renderQueryLog();
    document.getElementById("query-input").value = "";

    document.getElementById("checklist-form").reset();
    document.getElementById("suggestion").textContent = "";
    document.getElementById("confidence").textContent = "";

    startTimer();
    showScreen("screen-alert");
  }

  // --- Screen 1 -> 2 ---
  document.getElementById("btn-open-changes").addEventListener("click", function () {
    showScreen("screen-changes");
  });

  // --- Query box: running history, scoped to the current scenario ---
  function findResponse(query) {
    var q = query.toLowerCase();
    var entries = SCENARIOS[currentScenario].queryResponses;
    for (var i = 0; i < entries.length; i++) {
      for (var j = 0; j < entries[i].keywords.length; j++) {
        if (q.indexOf(entries[i].keywords[j]) !== -1) {
          return entries[i].response;
        }
      }
    }
    return "No matching info for that question. Try asking about: recent changes, similar past incidents, or who to escalate to.";
  }

  function renderQueryLog() {
    var log = document.getElementById("query-log");
    log.innerHTML = "";
    queryHistory.forEach(function (entry) {
      var div = document.createElement("div");
      div.className = "query-entry";
      div.innerHTML =
        '<span class="q">You asked: ' + escapeHtml(entry.q) + "</span>" +
        '<span class="a">' + escapeHtml(entry.a) + "</span>";
      log.appendChild(div);
    });
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  document.getElementById("btn-ask").addEventListener("click", function () {
    var input = document.getElementById("query-input");
    if (!input.value.trim()) return;
    var answer = findResponse(input.value);
    queryHistory.push({ q: input.value.trim(), a: answer });
    renderQueryLog();
    input.value = "";
    input.focus();
  });

  document.getElementById("query-input").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("btn-ask").click();
    }
  });

  // --- Screen 2 -> 3 ---
  document.getElementById("btn-open-checklist").addEventListener("click", function () {
    showScreen("screen-checklist");
  });

  // --- Checklist -> neutral signal summary + confidence indicator ---
  document.getElementById("checklist-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var form = e.target;
    var q1 = form.q1.value;
    var q2 = form.q2.value;
    var q3 = form.q3.value;

    var parts = [];
    parts.push(
      q1 === "yes"
        ? "A recent change lines up closely with when the alert fired."
        : "No recent change lines up closely with when the alert fired."
    );
    parts.push(
      q2 === "yes"
        ? "This resembles an incident seen before."
        : "This doesn't clearly resemble a past incident."
    );
    parts.push(
      q3 === "many"
        ? "Impact looks broad (many users)."
        : "Impact looks limited (small subset of users)."
    );
    document.getElementById("suggestion").textContent = parts.join(" ");

    // Neutral confidence indicator — reflects the answers without naming
    // which action to take, so the decision buttons still require a
    // participant's own judgment call.
    var score = 0;
    if (q1 === "yes") score += 2;
    if (q2 === "yes") score += 1;
    if (q3 === "many") score += 1;
    var level = score >= 3 ? "High" : score === 2 ? "Medium" : "Low";
    document.getElementById("confidence").textContent = "Signal strength: " + level;

    showScreen("screen-decision");
  });

  // --- Decision -> confirmation ---
  var decisionLabels = {
    escalate: "You escalated now.",
    owner: "You escalated to the service owner.",
    monitor: "You chose to monitor / snooze."
  };

  document.querySelectorAll(".decision-actions .btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var elapsedMs = Date.now() - startTime;
      clearInterval(timerInterval);
      document.getElementById("confirm-text").textContent =
        decisionLabels[btn.dataset.action] || "Decision recorded.";
      document.getElementById("confirm-elapsed").textContent = formatElapsed(elapsedMs);

      results.push({
        scenario: SCENARIOS[currentScenario].label,
        action: decisionLabels[btn.dataset.action],
        elapsed: formatElapsed(elapsedMs)
      });

      var hasNext = currentScenario < SCENARIOS.length - 1;
      document.getElementById("btn-next-alert").style.display = hasNext ? "" : "none";
      showScreen("screen-confirm");
    });
  });

  // --- Next alert / restart / summary ---
  document.getElementById("btn-next-alert").addEventListener("click", function () {
    currentScenario += 1;
    if (currentScenario < SCENARIOS.length) {
      loadScenario(currentScenario);
    } else {
      showSummary();
    }
  });

  function showSummary() {
    var body = document.getElementById("summary-body");
    body.innerHTML = "";
    results.forEach(function (r) {
      var tr = document.createElement("tr");
      tr.innerHTML =
        "<td>" + escapeHtml(r.scenario) + "</td>" +
        "<td>" + escapeHtml(r.action) + "</td>" +
        "<td>" + escapeHtml(r.elapsed) + "</td>";
      body.appendChild(tr);
    });
    showScreen("screen-summary");
  }

  function restart() {
    currentScenario = 0;
    results = [];
    loadScenario(0);
  }
  document.getElementById("btn-restart").addEventListener("click", restart);
  document.getElementById("btn-restart-2").addEventListener("click", restart);

  // --- Init ---
  loadScenario(0);
})();
