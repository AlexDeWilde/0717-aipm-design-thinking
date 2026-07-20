# Discovery: On-Call Infra/Cloud Alert Triage

## Challenge Statement

A composite on-call engineer, trying to decide within the first few minutes of
an infrastructure/cloud alert whether it signals a real incident requiring
immediate action or is noise that can wait, using only the alert content,
dashboards, and recent change history available at that moment.

- **Actor:** composite on-call engineer (not a specific real individual —
  built from patterns across the evidence below)
- **Goal:** correctly judge urgency and act (or not) within the first few
  minutes of an alert firing
- **Context:** infrastructure/cloud-layer alerts specifically (not
  application-level bugs or third-party vendor outages)
- **Sensitive data:** none — all evidence is public, published incident
  reports
- **Originality:** confirmed unique within the group

## Evidence Log

All entries below are desk research: public, published postmortems. No
interviews, proxies, or personal/sensitive data were used. Each entry is
evidence of *how a real triage/escalation decision unfolded*, not an
interpretation — interpretation happens later in Synthesis.

| # | Source | Date | What happened | Relevance to the triage decision |
|---|---|---|---|---|
| E1 | [AWS — Summary of the Amazon S3 Service Disruption](https://aws.amazon.com/message/41926/) | 2017-02-28 | An engineer, following an established playbook, ran a debug command against an S3 billing subsystem; a mistyped input removed far more server capacity than the playbook intended, cascading into a ~4-hour US-EAST-1 regional outage affecting S3, EC2 launches, EBS, and Lambda. | Shows that having a playbook did not by itself prevent the error, and that an alert following a "routine" action turned out not to be routine — the earliest signal did not obviously predict the blast radius. |
| E2 | [GitHub — October 21 post-incident analysis](https://blog.github.com/2018-10-30-oct21-post-incident-analysis/) | 2018-10-21 | A 43-second network partition during planned maintenance caused a database primary failover across regions; by the time the on-call engineer inspected the replication topology, writes had already diverged, turning a brief blip into a 24h11m degraded-service incident. | Demonstrates why checking recent changes/deploys is a critical early triage step — the alert alone understated severity until change context was added. |
| E3 | [GitLab — Postmortem of database outage of January 31](https://about.gitlab.com/blog/postmortem-of-database-outage-of-january-31/) | 2017-01-31 | An engineer investigating replication-lag alerts, working under time pressure, ran a delete command against what he believed was staging but was production, causing ~6 hours of data loss. | Evidence that decision quality under time pressure/fatigue is a real factor in triage outcomes, not just alert content. |
| E4 | [Cloudflare — Details of the Cloudflare outage on July 2, 2019](https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019/) | 2019-07-02 | A newly deployed WAF rule contained a regex prone to catastrophic backtracking, pegging CPU to 100% on every edge server worldwide within minutes; SREs also lost access to some internal tools due to expired credentials, complicating the response. | Best evidence that cross-referencing recent deploys is often the fastest path to correct urgency classification — and that tooling access itself can be part of the triage problem. |

### Open Questions / Gaps in Evidence

- No first-person interview data — all evidence is third-party published
  postmortems. Flagged as a known limitation of the composite-persona
  approach, not filled with invented interview quotes.
- No evidence yet on how *false positives* (alerts that turn out to be
  nothing) are typically handled — all 4 sources are confirmed real
  incidents, not near-misses or noise. Worth sourcing if a prototype needs to
  represent a "false alarm" branch.
- No organisation-specific runbook or severity-level documentation is
  attached yet — the persona's decision criteria will be derived from
  patterns across E1–E4 rather than one company's internal process.

## Persona (DRAFT — pending group approval)

**Composite on-call engineer.** Not a real individual — built from patterns
observed across E1-E4. Traits below are cited to the evidence entries that
support them; anything not cited is an assumption, flagged as such.

- Carries a pager/alert for infrastructure or cloud-layer services and must
  make the first urgency call, often without full context yet (E1, E2, E4) —
  *assumption:* the paging mechanism itself is inferred from on-call
  convention, not stated in any single evidence entry.
- May be acting on an established playbook or runbook, but the playbook does
  not guarantee a correct outcome (E1).
- Decision quality can degrade under time pressure, e.g. when working late
  (E3) — *assumption:* the evidence entry does not state whether the
  engineer was working alone or with others; "acting alone" should not be
  treated as confirmed. This also generalises beyond the one cited incident
  and is not yet confirmed against other cases.
- Fastest correct triage in the cited incidents came from checking recent
  deploys/changes early (E2, E4); when that context was not surfaced
  quickly, minor issues escalated into major ones (E1, E2).

**Open question:** no evidence yet on how this persona handles a false-positive
alert (one that turns out to be nothing) — all 4 sources are confirmed real
incidents, not near-misses. Flagged in the Evidence Log gaps above.

## Journey Map (DRAFT — pending group approval)

**Actor:** composite on-call engineer. **Goal:** correctly judge urgency and
act within the first few minutes of an infra/cloud alert. **Scenario:** an
alert fires for an infrastructure or cloud-layer service, with limited
initial context.

| # | Phase | Action | Thought | Feeling | Evidence / assumption |
|---|---|---|---|---|---|
| 1 | Alert fires | Receives page/notification | "Is this a known pattern or something new?" | Alert, heightened if off-hours | Assumption (time-of-day effect) — inferred from E3, not directly evidenced across all sources |
| 2 | Check alert content & dashboard | Opens monitoring dashboard, reads payload | "How many users/services are affected? Is it spreading?" | Focused, urgency rising | E1 (initial action masked true scope), E4 (CPU spike + 502s appeared together) |
| 3 | Check recent deploys/changes | Reviews deploy/change log | "Did we just ship something that explains this?" | Relief if a cause is found, anxiety if not | E2 (network maintenance context explained the failover), E4 (WAF rule deploy was the root cause) |
| 4 | Cross-reference runbook/past incidents | Checks runbook or recalls similar incidents | "Is there a known playbook, or am I improvising?" | More confident with a playbook, uncertain without one | E1 (a playbook existed but the outcome was still wrong) — **pain point** |
| 5 | Decide: act / escalate / snooze | Chooses to act, escalate, or wait | "Do I have enough certainty, or should I loop someone in first?" | Weighing personal responsibility vs. delay | E3 (deciding under time pressure preceded a costly error) — **pain point**. *Assumption:* whether the engineer acted solo or with others is not stated in E3; not treated as confirmed. |
| 6 | Act | Executes the decision (rollback, restart, escalate, stand down) | "Did that fix it, or does this need to escalate further?" | Relief or continued alertness depending on outcome | E2, E4 (resolution required a specific corrective action once the cause was identified) |

**Pain points:** the gap between "alert fires" and "recent-change context is
available" (phases 2-4) is where the cited incidents took the longest to
correctly scope (E1, E2); deciding under time pressure (phase 5) preceded
the most severe outcome in the evidence (E3) — whether the engineer was
acting alone at that moment is not established by the source and is not
claimed here.

**Opportunities (not solutions — for the Ideate phase):** surfacing
recent-change context automatically alongside the alert; making a
staging-vs-production distinction more salient at the decision point.

## Point of View (POV) — DRAFT, pending approval

> The on-call engineer needs a fast, reliable way to see whether an alert is
> linked to a recent change before deciding urgency, because in every
> incident reviewed, the fastest correct triage came from cross-referencing
> recent deploys (E2, E4) — and the costliest error came from deciding under
> time pressure with incomplete context (E3).

## How Might We (HMW) — DRAFT, pending approval

> How might we help an on-call engineer confirm, within the first minute,
> whether an alert is linked to a recent change — when they are working
> under time pressure and with incomplete context?

This intentionally does not name a notification feature, dashboard widget, or
any other solution — that comes in Ideate.
