---
name: design-thinking
description: Run the Design Thinking method (Empathise, Define, Ideate, Prototype, Test, Iterate) for the AI Project Manager workshop. Use when the group asks to synthesize evidence into a discovery artifact, generate and select ideas, scope a prototype, plan a test, or interpret test notes into an iteration. Does not choose the challenge or invent evidence.
---

# Design Thinking Workflow

This Skill encodes the method taught in modules 01-04 of this repository. It
does not contain any project's product answer — the challenge, evidence, and
decisions belong to the AI Project Manager (the group).

## Ground Rules (apply in every mode)

1. **Evidence before interpretation.** Every claim in an artifact must be one
   of: direct evidence (quote/observation with source), behavioural evidence
   (pattern in tickets/logs/analytics with source), interpretation (explicitly
   labelled as synthesis), or assumption (explicitly labelled and flagged for
   testing). Never blend these without a label.
2. **No invented evidence.** If evidence is missing, write it as an open
   question in the artifact. Do not fabricate a quote, a statistic, or a
   participant to fill a gap.
3. **Simulations are not research.** Any AI-generated persona reaction,
   proxy interview, or role-played user response must be labelled
   "simulated" and kept out of sections that claim to be observed evidence.
4. **Approval gates.** Do not finalize a problem statement, an ideation
   shortlist, a prototype scope, or an iteration until the group has
   explicitly approved it. Show the proposal and wait.
5. **Record the decision trail.** Every accepted, edited, or rejected
   suggestion this Skill produces should be traceable in the project's log
   files (`discovery.md`, `decision-log.md`, `test-notes.md`,
   `ai-collaboration-log.md`), not only in chat history.

## Empathise -> Evidence Log

When asked to structure research:

- Create or update an evidence log with a source, a date/context, and a
  verbatim or closely paraphrased observation for each entry.
- Classify each entry as direct evidence, behavioural evidence,
  interpretation, or assumption (see `02-empathise-with-evidence.md`).
- List missing evidence as open questions rather than filling it in.
- Do not draft a persona until at least one real evidence entry exists.

## Define -> Problem Frame

When asked to synthesize a problem frame from the evidence log:

1. Cluster related observations.
2. Name the tension or need behind each cluster.
3. Separate evidence from interpretation explicitly in the output.
4. Identify the most relevant user group and context.
5. Draft a problem statement that is user-centred, specific, grounded in the
   evidence log, and open to more than one response.
6. Draft a Point of View: `[User] needs [need] because [insight from
   evidence]`.
7. Draft a How Might We question that does not already contain a solution.

Present the draft and wait for approval before treating it as final.

## Persona and Journey Map

- A persona must cite which evidence entries support each trait; unsupported
  demographic detail, invented quotes, or stereotypes are not allowed.
- If the persona is a composite (not one real individual), state this
  explicitly and list the evidence patterns it draws from.
- A journey map names the actor, scenario, goal, 4-6 phases, and for each
  phase: action, thought, feeling, and its evidence source or an explicit
  assumption. Mark pain points and opportunities separately from the
  narrative.

## Ideate -> Generate, Then Converge

When asked to ideate against an approved HMW question:

- Generate several **materially different** directions (a change in wording,
  colour, or layout alone does not count as a different concept).
- Do not silently pick a favourite. Propose selection criteria — user value,
  learning value, feasibility, risk — and let the group adjust them.
- Record every alternative considered, the criteria, the chosen direction,
  and the reason for rejecting the others in `decision-log.md`.

## Prototype -> Match Fidelity to the Learning Question

- Require one explicit learning question before proposing a prototype.
- Recommend the lowest fidelity that can answer that question (storyboard,
  paper flow, low-fidelity wireframe, clickable prototype, or a small
  technical spike) — do not default to a polished build.
- Show the proposed files, interaction flow, and a neutral test task before
  editing anything.
- Build only after the group approves the plan.

## Test -> Plan, Then Separate Observation from Interpretation

- Help draft a neutral test task that does not name the intended solution.
- When the group supplies raw test notes, separate what was observed (what
  each participant did, said, where they hesitated or failed) from
  interpretation, and from the resulting decision.
- Do not turn one person's reaction into a universal requirement; note
  sample size and confidence.

## Iterate -> Propose, Then Wait

- Read `test-notes.md`, separate observation from interpretation, and
  propose a small set of changes.
- Explain which specific observation motivates each proposed change.
- Implement only the changes the group approves, edits, or otherwise
  confirms — never apply a proposed change unilaterally.
- After implementing, summarize what changed and re-check the relevant
  journey or prototype behaviour.

## What This Skill Must Never Do

- Choose the challenge, persona, HMW question, or prototype concept on the
  group's behalf.
- Present its own critique or a subagent's findings as user evidence.
- Mark an artifact "final" without recorded group approval.
- Remove or overwrite the evidence log instead of appending/correcting it
  with the group's input.
