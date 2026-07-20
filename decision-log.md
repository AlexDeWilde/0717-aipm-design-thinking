# Decision Log

## HMW Question (approved)

> How might we help an on-call engineer confirm, within the first minute,
> whether an alert is linked to a recent change — when they are working
> under time pressure and with incomplete context?

## Candidate Directions (materially different)

### Idea 1 — Inline Change-Correlation Panel

When an alert fires, automatically surface a ranked list of recent
deploys/config/infra changes for the affected service (e.g. last 2 hours),
attached directly to the alert notification itself. Passive, automated,
appears without the engineer having to search.

### Idea 2 — Deploy-Author Ping Bot

A bot that, the moment an alert fires, automatically pings whoever made the
most recent deploy/change to the affected service, asking them to confirm or
rule out relevance — shifting the burden from the on-call engineer hunting
for context to the change author confirming it.

### Idea 3 — Structured Triage Checklist

A fixed, short checklist/rubric (paper card or simple form, not automated)
that walks the engineer through: "Any deploys in the last N hours? Any
config changes? Any similar past incident?" producing a quick urgency score.
Focuses on structuring the decision process itself rather than surfacing
new data.

### Idea 4 — Conversational Change Query

A chat-style interface inside the paging/incident tool where the engineer
can ask "what changed recently for service X?" and get an aggregated
timeline pulled from multiple systems (deploys, config, infra) in response.

## Proposed Selection Criteria

Criteria are proposed defaults — the group may adjust weighting or add
criteria before deciding.

| Idea | User value (does it address the observed need?) | Learning value (does it test an important assumption?) | Feasibility (buildable as a lightweight prototype?) | Risk (what could mislead or fail?) |
|---|---|---|---|---|
| 1. Inline Change-Correlation Panel | High — directly answers the HMW; matches E2/E4 pattern of "recent-change context was the fastest path to correct urgency" | High — tests whether automatic correlation actually reduces time-to-decision, or just adds noise | Medium — a static/simulated version (fake alert + fake change feed) is buildable as a clickable prototype | Could mislead if the correlation ranking itself is wrong or too noisy; also risks masking cases with no recent change |
| 2. Deploy-Author Ping Bot | Medium — helpful, but depends on a second person responding quickly, which may not hold under real time pressure | Medium — tests a process/social assumption more than a UI one, harder to observe in a single-person usability test | Low — needs a second "actor" (the change author) to simulate convincingly in a short workshop test | Highest risk: the whole value depends on someone else being reachable, which the evidence (E1–E4) doesn't actually support as reliable |
| 3. Structured Triage Checklist | Medium — addresses decision *process* quality (relevant to E3's pressure/quality issue) but not the "surfacing" problem in E1/E2/E4 | Medium — easy to test, but may reveal more about checklist usability than the core HMW assumption | High — trivial to prototype (a printed or single-page digital checklist) | Low risk, but may under-deliver: doesn't address why context wasn't available quickly in the first place |
| 4. Conversational Change Query | High — matches the HMW directly, and is closer to how E2/E4 engineers actually worked (cross-referencing multiple sources) | High — tests whether a query-based (pull) interface beats a surfaced (push) one — a genuinely different assumption than Idea 1 | Medium — a scripted/canned-response chat prototype is buildable without real backend integration | Risk of the prototype's canned responses feeling unrealistic to a test participant, giving falsely positive usability signal |

## Decision

**Chosen direction: an integrated concept combining Ideas 1, 3, and 4** into
a single journey, rather than three separate prototypes:

- **Idea 1 (auto-surface):** the moment the alert fires, recent
  deploys/config changes for the affected service are shown automatically —
  addresses the E1/E2/E4 pattern that the fastest correct triage came from
  having recent-change context available quickly.
- **Idea 4 (query on demand):** if the auto-surfaced view isn't enough, the
  engineer can ask for more detail (e.g., a specific time window or system) —
  tests the complementary "pull" assumption alongside the "push" of Idea 1,
  without needing a second real person to simulate.
- **Idea 3 (structured checklist):** once context is gathered, a short
  checklist/rubric helps the engineer reach a final urgency decision —
  addresses the E3 pattern that decision *quality* under time pressure was
  itself a failure mode, not just missing information.

These three are complementary (surface → query → decide), not competing, so
one coherent prototype can represent all three without inflating scope.

**Rejected: Idea 2 (Deploy-Author Ping Bot).** Its value depends on a second
person being reachable and responding quickly, which nothing in E1–E4
supports as reliable, and it would require simulating a second real actor to
test convincingly in a short workshop session — highest risk, weakest fit
for a single-session prototype.

## Next: One Learning Question and Prototype Plan

Before building anything, the group states one learning question, and Claude
proposes the lowest-fidelity prototype format that can answer it (see
`04-prototype-test-and-iterate.md`). That happens next, in the main
conversation, once the group confirms the learning question.
