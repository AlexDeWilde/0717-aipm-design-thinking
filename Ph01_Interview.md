# Phase 01 — Interview Questions

## Interview Questions

1. **The challenge** — What product or service situation are you investigating? Please describe it as a person, a goal, and a context (not a feature idea). E.g. "a first-time volunteer trying to choose a suitable task" rather than "an onboarding flow."
2. **Access to evidence** — Who or what can you actually observe or draw from? Real users you can interview, existing support tickets/analytics, desk research, or will you need labelled proxies/simulated participants for this workshop?
3. **Scope check** — Is there one actor, one goal, and roughly one journey here? Or does the idea currently span multiple user types, multiple goals, or multiple services/products bundled together?
4. **Sensitive data** — Does exploring this challenge require any personal or sensitive data, or can it be investigated with anonymised/aggregated notes?
5. **Originality** — Is this challenge different from anything the other groups are likely to pick (if you know what they're working on)?

Answer in as much or as little detail as you have — open questions are fine, I'll fold them into the plan as explicit unknowns rather than filling gaps with assumptions. Once I have your answers I'll come back with a short discovery plan, expected artifacts, and open questions for your approval — I won't touch the filesystem before that.

---

## Examples

Here are a few illustrative examples — purely to calibrate what "one person, one goal, one journey" looks like. None of these is a suggestion for what you should pick; you'll name your own challenge afterward.

### Example 1 — Well-scoped

> A student trying to figure out whether a library study room is free right now, before walking across campus to check in person.

- **Actor:** one student. **Goal:** confirm room availability. **Journey:** check → decide → travel or not.
- **Evidence access:** peer interviews with classmates, maybe existing booking-system screenshots.
- Fits one journey map, one prototype (e.g. a simple availability-check screen flow).

### Example 2 — Well-scoped

> A new gym member trying to figure out which class is appropriate for their fitness level before their first visit.

- **Actor:** one new member. **Goal:** pick a suitable class with confidence. **Journey:** browse schedule → assess fit → decide.
- **Evidence access:** interviews with recent joiners, gym staff, or the group's own recent experience joining a gym.

### Example 3 — Well-scoped

> A commuter trying to notice and react to a sudden platform change before missing a connecting train.

- **Actor:** one commuter. **Goal:** not miss the connection. **Journey:** waiting → notification/no notification → reaction.
- This is the same shape as the "live tracking" example in module 03 — user-centred, not "add push notifications."

### Example 4 — Too broad (and how it'd get narrowed)

> "Improve the ordering experience for our restaurant app" — for dine-in customers, delivery customers, and restaurant staff.

- **Problem:** three different actors (diner, delivery customer, staff), three different goals, no single journey.
- **Narrowed version:** "A dine-in customer trying to split the bill correctly with their table before leaving" — one actor, one goal, one journey, testable with one prototype.

The pattern across the good examples: one recognisable person, one goal, one bounded journey (4–6 phases), and evidence you can actually reach (real people, existing data, or clearly labelled proxies) — not sensitive personal data.

When you're ready, describe your actual challenge along the 5 interview questions above and I'll check the scope and draft the discovery plan for your approval.

### Example 5 — Well-scoped

> A tourist trying to figure out if a restaurant is actually open right now, standing outside a shuttered-looking door with conflicting hours on Google vs. a handwritten sign.

- **Actor:** one tourist. **Goal:** confirm it's open before waiting or walking away. **Journey:** check phone → check door → decide → wait/leave.
- **Evidence:** interviews with recent travellers, screenshots of real listing discrepancies.

### Example 6 — Well-scoped

> A new employee trying to figure out who to ask about a specific IT problem on their first week, without knowing the org chart yet.

- **Actor:** one new hire. **Goal:** get unblocked quickly. **Journey:** hit problem → search internal docs/chat → guess who to ask → send message or give up and wait.
- **Evidence:** interviews with recent hires, existing onboarding docs, Slack/Teams search logs if accessible.

### Example 7 — Well-scoped

> A shopper trying to decide whether a "limited time" discount banner on an e-commerce site is worth acting on today or if it'll still be there tomorrow.

- **Actor:** one shopper. **Goal:** decide urgency of purchase. **Journey:** see banner → assess trust/urgency → buy now / wait / dismiss.
- **Evidence:** interviews with friends/family, screenshots of real banners, public complaints about fake urgency (dark patterns forums).

### Example 8 — Well-scoped

> A parent trying to decide, at 2am, whether their child's fever is serious enough to go to the ER or can wait until morning.

- **Actor:** one parent. **Goal:** make a safe triage decision under stress. **Journey:** notice symptom → check temperature/signs → search or call → decide.
- **Evidence:** sensitive — would need anonymised proxies or published NHS/pediatric triage guidance rather than real interviews; flagging this one as harder to source ethically.

### Example 9 — Well-scoped

> A freelancer trying to decide whether to accept a new client's short-notice project request, given unclear scope and an already-full week.

- **Actor:** one freelancer. **Goal:** decide accept/decline/negotiate. **Journey:** receive request → assess scope/capacity → decide → respond.
- **Evidence:** interviews with freelancer friends, freelancer forum posts (Reddit r/freelance), self-experience.

### Example 10 — Well-scoped

> A renter trying to figure out, from photos and a floor plan alone, whether a viewed-online apartment is worth booking a viewing for before it gets taken by someone else.

- **Actor:** one renter. **Goal:** decide whether to act fast. **Journey:** see listing → assess red flags/fit → book viewing or move on.
- **Evidence:** interviews with recent apartment-hunters (very reachable pool), public listing screenshots.

### Example 11 — Well-scoped

> A person trying to decide whether an unfamiliar phone number calling them right now is worth answering, given rising scam-call frequency.

- **Actor:** one phone owner. **Goal:** avoid missing a real call while avoiding scams. **Journey:** phone rings → check number/context clues → answer / let it ring / block.
- **Evidence:** universally relatable, easy peer interviews, public scam-call statistics.

### Example 12 — Well-scoped

> A cyclist trying to decide, mid-ride, whether to keep going or turn back given a sudden weather change, without reliable signal to check a forecast.

- **Actor:** one cyclist. **Goal:** make a safe go/no-go call. **Journey:** notice weather shift → assess available info → decide → act.
- **Evidence:** cyclist community interviews, self-experience if applicable.

---

Same underlying pattern each time: a single named person, a decision moment (not a whole app or system), and a journey short enough to map in 4–6 steps and prototype as one flow. Let me know if you'd like me to draft the discovery plan for the AI-PM-effort-triage challenge you named earlier, or if seeing these prompts you to switch to a different one.



Full Plan
#	Phase	Deliverable(s)	Who does what	Gate before proceeding
1	Frame	Answers to the 5 interview questions → short discovery plan (in chat, no files yet)	You: name the challenge, evidence sources, scope. Me: check it's one actor/one goal/one journey, propose plan	You approve the plan
2	Evidence	discovery.md (evidence section only)	Me: create empty structure. You: paste real observations/interviews/desk research, proxies clearly labelled	No sensitive data entered; sources visible
3	Configure	.claude/skills/design-thinking/SKILL.md, .claude/agents/evidence-auditor.md, .claude/agents/prototype-reviewer.md	Me: draft from modules 01–04. You: review triggers, tool access, approval gates	You approve each file before it's used
4	Synthesize	discovery.md completed: persona, journey map, POV, HMW	Me: derive from your evidence only. You: reject anything unsupported	You can trace every claim to evidence or a marked assumption
5	Independent audit	evidence-auditor findings vs. discovery.md	Me: delegate to subagent. You: accept/edit/reject each finding	Findings reconciled
6	Ideate & Select	decision-log.md (ideas, criteria, chosen direction, rejected options)	Me: generate materially different HMW responses + criteria. You: select or adjust criteria	One direction chosen with rationale
7	Prototype	Static HTML/CSS/JS (or lighter format) implementing the approved concept	You: state one learning question. Me: propose lowest-fidelity format + files, then build after approval	You run it and confirm the journey works
8	Review & Test	prototype-reviewer findings; test-notes.md	Me: subagent review (critique, not evidence). You: run a neutral task with real people/proxies, record raw observations	Observations logged before I interpret them
9	Iterate	Approved changes to the prototype	Me: propose changes tied to specific observations. You: approve/edit/defer/reject	Only approved changes get implemented
10	Audit	Final audit summary; ai-collaboration-log.md completed	Me: summarize files, evidence, assumptions, risks, next step. You: confirm recommendation	—
—	Optional extensions (pick one at a time, after core cycle is tested once)	Skill/subagent improvement, second test cycle, cross-group review, alternative direction, accessibility pass, failure-journey, decision brief	Per handout's Optional Extensions section	Finish and verify one before starting the next
Immediate next step
To unblock Phase 1, tell me:

The challenge — one person, one goal, one context (is it still "AI-PM-effort-triage," or something else?)
Evidence access — real people you can interview, existing data, or will this need labelled proxies?
Scope — confirm it's one actor/one goal/one journey
Sensitive data — any, or fully anonymisable?
Originality — anything to flag relative to other groups?
Once you answer, I'll turn it into a short discovery plan for your approval — still no files created until then.

can you please help me with some examples to complete this phase
Here are three fully worked example answer sets — each showing what a complete response to all 5 interview questions looks like, not just the challenge statement. Use one as-is, adapt one, or let them prompt your own.

Example A — AI-PM-effort-triage (building on your earlier direction)
Challenge: A product manager trying to decide, within the first few minutes of triage, whether a newly-filed bug/feature request needs immediate attention or can wait for the next planning cycle — without enough context yet to judge its real impact.
Evidence access: Real observation — your own or a colleague's actual backlog/ticket queue (anonymised), plus a couple of interviews with PMs about how they currently triage.
Scope check: One actor (the triaging PM), one goal (decide urgency), one journey (ticket arrives → skim → judge impact/effort → assign priority or defer). Fits in one journey map.
Sensitive data: Ticket titles/descriptions may reference customers or internal systems — anonymise names, customer identifiers, and system-specific details before entering notes.
Originality: Likely distinct if other groups are picking consumer-facing app challenges rather than an internal PM workflow.
Example B — Well-scoped alternative (consumer-facing)
Challenge: A freelancer trying to decide whether to accept a new client's short-notice project request, given unclear scope and an already-full week.
Evidence access: Interviews with freelancer friends/colleagues, freelancer forum posts (e.g., r/freelance), your own experience if applicable.
Scope check: One actor (freelancer), one goal (accept/decline/negotiate), one journey (receive request → assess capacity → decide → respond).
Sensitive data: None required — client details can stay hypothetical or fully anonymised.
Originality: Check with other groups; this is a common "good" example from the course material, so it may overlap.
Example C — Well-scoped alternative (internal/ops)
Challenge: A new employee trying to figure out who to ask about a specific IT problem in their first week, without knowing the org chart yet.
Evidence access: Interviews with recent hires, existing onboarding docs, Slack/Teams search logs if acc
