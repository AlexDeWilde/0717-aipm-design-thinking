# Test Notes

## Learning Question

Can a participant, using this prototype, correctly identify whether a
sample alert is linked to a recent change and reach a defensible urgency
decision (act now / can wait) within about 2 minutes?

## Task Given to Participants

State this neutrally — do not explain the intended solution or name the
"recent changes," "query," or "checklist" features in advance:

> Imagine you're on-call and just received this alert. Show me what you'd
> do next, using this page.

## Participants

List each person/proxy and why they're relevant. Label clearly if someone is
a proxy rather than someone with real on-call experience.

| # | Who (role, real or labelled proxy) | Relevant because |
|---|---|---|
|   |   |   |

## Observations (fill in per participant — raw observation only)

For each participant, record separately:

- What they did, in order (which screens, what they clicked, what they typed
  into the query box, any hesitation or backtracking).
- Where they succeeded, hesitated, or failed.
- What they said, word-for-word where possible — kept separate from your
  own interpretation of what it meant.
- Time from alert screen to decision (the prototype's on-screen timer
  records this automatically at the confirmation screen).
- Which action they chose (escalate now / escalate to owner / monitor).

### Participant 1
1. converstation chat bot doest keep the history of conversations....
2. there is no score based on the questions answerd and recommendation for the engineer to take the decision whether escalate now or later, snooze or monitor


### Participant 2

1. I would like to to have a simple button instead of current selection method in the questions checklist screen

2. i would like to see different alerts examples sequentially in the protoype test.

## Context and Limits of This Test

- Note the setting (in person / remote), number of participants, and
  anything unusual about the session.
- Note anything that might limit how far these observations generalize
  (e.g., participants already familiar with the prototype's author, small
  sample size, proxies used instead of real on-call engineers).

## Questions This Test Did Not Answer

List anything the learning question does not cover, or that came up during
testing but wasn't resolved.

---

*Do not fill in interpretation or proposed changes here — those come after
raw observations are recorded, in a follow-up pass.*

---

# Round 2 (after rebuild: query history, signal-strength indicator, button
checklist, 3 sequential alert scenarios)

## Learning Question (unchanged)

Can a participant, using this prototype, correctly identify whether a
sample alert is linked to a recent change and reach a defensible urgency
decision (act now / can wait) within about 2 minutes — now checked across
three deliberately varied alerts (clear match, no related change, and an
ambiguous/false-alarm case)?

## Participants

| # | Who (role, real or labelled proxy) | Relevant because |
|---|---|---|
| 1 | Colleague (proxy — role/on-call background not specified) | Available for a quick walkthrough of the prototype |
| 2 | Colleague (proxy — role/on-call background not specified) | Available for a quick walkthrough of the prototype |

## Observations (per participant, per alert scenario)

**What we actually have:** both colleagues clicked through all 3 alert
scenarios. The AI Project Manager confirmed the auto-surfaced recent
changes and query-box answers displayed the content the prototype was
designed to show for each scenario (i.e., the features render and respond
as built).

**What we do not yet have** (open, not filled with a guess):

- Which action each colleague chose per scenario (escalate now / escalate
  to owner / monitor).
- How long each one took per scenario (the confirmation/summary screen
  shows this automatically, but it wasn't recorded here).
- Where either of them hesitated, backtracked, or looked unsure.
- Anything either of them said, in their own words.
- Whether behavior differed between the "clear match," "no related change,"
  and "ambiguous" scenarios.

### Participant 1 — Alert 1 / 2 / 3

*(not yet recorded — see gaps above)*

### Participant 2 — Alert 1 / 2 / 3

*(not yet recorded — see gaps above)*

## Context and Limits of This Round

- Proxies (colleagues), not confirmed real on-call engineers.
- Confirms the prototype's features function and display correctly.
- Does **not** yet confirm the core learning question — whether a
  participant can independently judge urgency and reach a decision within
  about 2 minutes — since decision choice, timing, and behavior weren't
  captured.

## Questions This Round Did Not Answer

- Did either colleague reach a defensible urgency decision on their own, or
  did they mainly confirm the interface was working?
- Did the "no related change" and "ambiguous" scenarios take longer or
  produce less confident decisions than the clear-match scenario?

---

# Round 3 Plan (after iteration: signal-strength moved off decision screen,
relabelled buttons, back navigation, reworded query fallback, "uncertain"
checklist option, `:has()` fallback)

## Learning Question (unchanged)

Can a participant, using this prototype, correctly identify whether a
sample alert is linked to a recent change and reach a defensible urgency
decision (act now / can wait) within about 2 minutes — across three
deliberately varied alerts (clear match, no related change, and an
ambiguous/false-alarm case)?

## What Round 3 Must Capture (the gap Round 2 left open)

For each participant, per alert scenario, actually record:

- Which action they chose (escalate now / escalate to owner / monitor) —
  the confirmation screen's decisionLabels text, not the facilitator's
  guess.
- Time to decide, from the confirmation screen's on-screen timer.
- Where they hesitated, backtracked (used "Back"), or re-read a screen.
- What they said, word-for-word where possible, kept separate from
  interpretation.
- Whether they used the "Back" button, and on which screen.
- Whether they used the "Uncertain / not enough info" checklist option,
  and on which question.

## Task Given to Participants (unchanged, neutral)

> Imagine you're on-call and just received this alert. Show me what you'd
> do next, using this page.

## Participants

| # | Who (role, real or labelled proxy) | Relevant because |
|---|---|---|
|   |   |   |

## Observations (fill in per participant, per scenario — raw observation only)

### Participant 1 — Alert 1 / 2 / 3

Reported: checklist buttons appeared already highlighted/selected on a
later alert, matching the selections made on a previous alert — described
as confusing.

*Not captured: which action they chose per scenario, time to decide,
hesitation, or verbatim reactions beyond the above.*

### Participant 2 — Alert 1 / 2 / 3

Reported: didn't see recommendation guidance after filling out the
checklist. Separately, asked for the interface to be more colorful /
visually appealing.

*Not captured: which action they chose per scenario, time to decide,
hesitation, or verbatim reactions beyond the above.*

## What We Actually Have vs. What We Still Don't (same honest split as Round 2)

**What we have:** two pieces of usable functional/UX feedback (a real
rendering bug, and a request for stronger post-checklist guidance), plus
an aesthetic request. Both participants went through the prototype.

**What we still don't have** — the core learning-question data this round
was designed to capture:
- Which action either participant chose, per scenario.
- Time to decide, per scenario.
- Hesitation, backtracking (Back button usage), or Uncertain-option usage.
- Verbatim reactions beyond the two feedback points logged above.

**Decision (group confirmed):** treat Round 3 the same honest way as
Round 2 — useful functional/UX feedback captured and actioned, but the
core learning question (can a participant independently reach a
defensible urgency decision within ~2 minutes) is still not answered by
observed behavior. A future round would need to capture the "What Round 3
Must Capture" list above to close that gap.

## Context and Limits of This Round

- Same two colleague-proxies as Round 2 (not confirmed real on-call
  engineers).
- Feedback was given as free-text requests/bug reports rather than
  facilitator-recorded behavioral observation, so it can't be broken down
  per scenario or timed.

## Questions This Round Did Not Answer

- Did either participant reach a defensible urgency decision on their own,
  or mainly report on the interface itself?
- Did the "no related change" and "ambiguous" scenarios take longer or
  produce less confident decisions than the clear-match scenario?
- (Unchanged from Round 2 — still open.)

