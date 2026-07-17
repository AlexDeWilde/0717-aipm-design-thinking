# Session Handout: AI Project Manager Design Thinking Workshop

In this workshop, each group chooses a different product or service challenge.
Claude Code produces most of the discovery artifacts and the prototype. The
group acts as the AI Project Manager: it supplies evidence, approves decisions,
tests the result, and corrects unsupported work.

Do not begin with a feature idea. Choose a situation that your group can
investigate and a person whose experience you can observe or discuss.

## Choose an Original Challenge

Select a challenge that:

- involves a recognisable person, goal, and context;
- gives the group access to relevant people, observations, or existing evidence;
- contains one journey that can be represented and tested;
- can be explored without collecting sensitive personal data; and
- is different from the challenges chosen by the other groups.

Claude Code may ask questions and challenge the scope. It must not choose the
problem on the group's behalf or claim that an idea is validated.

## Core Outputs

The completed project should contain:

- `.claude/skills/design-thinking/SKILL.md`;
- `.claude/agents/evidence-auditor.md`;
- `.claude/agents/prototype-reviewer.md`;
- `discovery.md` with evidence, persona, journey, POV, and HMW question;
- `decision-log.md` with ideas, selection criteria, and the chosen direction;
- a testable prototype in a format appropriate to the learning question;
- `test-notes.md` with observations and the approved iteration; and
- `ai-collaboration-log.md` with accepted, edited, and rejected agent work.

## Working Agreement

- Claude Code creates and edits the project files; do not build the prototype
  manually.
- The group supplies the raw evidence and performs the user tests.
- Remove names and identifying details from research notes before entering them
  into Claude Code.
- Every important claim must be traceable to evidence or marked as an
  interpretation or assumption.
- The agent shows a plan before creating the Skill, subagents, or prototype.
- The group approves product decisions and reviews changes before accepting
  them.
- Agent reviews are critique, not user evidence.

Before starting, confirm that the project repository is shared with the group
and that `claude --version` runs from its root. Use the
[official Claude Code setup guide](https://code.claude.com/docs/en/setup) if the
command is not available or authentication is incomplete.

## Workshop Sequence

| Phase | Claude Code contribution | AI Project Manager responsibility |
|---|---|---|
| Frame | Ask questions and propose a bounded discovery plan | Choose the challenge and approve the scope |
| Evidence | Create a structure for research notes | Gather and enter real observations |
| Configure | Draft the project Skill and two subagents | Review instructions, roles, and tool access |
| Synthesize | Create discovery artifacts from supplied evidence | Reject unsupported claims and approve the frame |
| Ideate | Generate materially different directions | Select using explicit criteria |
| Prototype | Propose the format and build the approved concept | Approve the learning question and plan |
| Review | Run focused evidence and prototype subagents | Judge which findings matter |
| Test | Help prepare a neutral test task | Observe people and record what happened |
| Iterate | Propose and implement approved changes | Decide what to change, defer, or reject |
| Audit | Summarize work, evidence, and remaining uncertainty | Confirm the final recommendation |

## Phase 1: Start Claude Code and Frame the Challenge

Start Claude Code from the repository root:

```bash
claude
```

Ask Claude to read the lesson files and interview the group about its chosen
challenge. Request a short discovery plan, expected artifacts, and open
questions. Tell it not to create files until the group approves the plan.

Review whether the proposed scope is small enough to investigate through one
journey and one prototype. Narrow the scope when the plan depends on several
unrelated users, goals, or services.

## Phase 2: Record Evidence Before Synthesis

Ask Claude to create the empty evidence section in `discovery.md`. The group
then adds its observations, interview notes, desk research, or existing product
evidence. Keep raw evidence separate from interpretation.

Before continuing, confirm:

- the source of every observation is visible;
- proxy participants and simulations are labelled;
- no sensitive personal data was entered; and
- missing evidence appears as an open question, not a fabricated answer.

## Phase 3: Create the Design Thinking Skill

Use [05 - Claude Code Skills and Subagents](05-claude-code-skills-and-subagents.md)
and the [official Anthropic Skills guide](https://code.claude.com/docs/en/skills).

Ask Claude Code to derive a project Skill from modules 01 to 04. It should
encode the Design Thinking method, evidence rules, approval gates, and expected
artifacts without encoding a particular product solution.

Before approving the file, ask Claude to explain:

- when the Skill should run;
- what information it expects from the group;
- which decisions require human approval; and
- how it prevents generated assumptions from becoming evidence.

## Phase 4: Create Two Review Subagents

Use the [official Anthropic subagent guide](https://code.claude.com/docs/en/sub-agents).

Ask Claude Code to create an evidence auditor and a prototype reviewer under
`.claude/agents/`. Both should be read-only and return prioritised findings to
the main conversation.

Inspect each file. Check that the description is focused, the allowed tools
match the review task, and the instructions prohibit invented research. The
subagents should challenge decisions, not make final product decisions.

## Phase 5: Synthesize and Audit the Discovery

Invoke the Design Thinking Skill to create or complete:

- the evidence log;
- a persona grounded in the available evidence;
- a journey map with assumptions marked;
- a POV statement; and
- an HMW question.

Then ask the main Claude conversation to delegate an independent review to the
evidence-auditor subagent. Compare its findings with `discovery.md`. Accept,
edit, or reject each important finding and record the decision.

Do not continue until the group can explain which parts are observed, inferred,
or unknown.

## Phase 6: Ideate and Select

Ask Claude to generate several materially different responses to the approved
HMW question. A variation in wording, colour, or layout is not a different
concept.

Ask Claude to propose selection criteria based on user value, learning value,
feasibility, and risk. The group may change those criteria before selecting a
direction. Record the alternatives, criteria, decision, and rejected options in
`decision-log.md`.

## Phase 7: Let Claude Build the Prototype

State one learning question before implementation. Ask Claude to recommend the
lowest-fidelity prototype that can answer it and to show the proposed files,
interaction flow, and test task before editing.

A static HTML, CSS, and JavaScript prototype is often sufficient for a digital
journey, but it is a suggestion rather than a required stack. Claude may propose
another lightweight format when it better represents the selected concept.

After approval, let Claude build the prototype. The group runs it and checks
that the intended journey works before showing it to participants.

## Phase 8: Review and Test

Ask the prototype-reviewer subagent to inspect the learning question and
prototype. Use its findings to improve test readiness, but do not present its
response as user feedback.

Prepare a neutral task. Observe relevant people or clearly labelled proxies
using the prototype. Add what happened to `test-notes.md` before asking Claude
to interpret the notes.

Record:

- what each person attempted;
- where they succeeded, hesitated, or failed;
- what they said, clearly separated from observation;
- the context and limits of the test; and
- questions the test did not answer.

## Phase 9: Delegate the Iteration

Ask Claude Code to read `test-notes.md`, separate observations from
interpretations, and propose a small set of changes. It must explain which
observation motivates each change and wait for approval.

Approve, edit, defer, or reject the proposals. Let Claude implement only the
approved changes, then rerun the relevant journey and summarize the result.

## Optional Extensions

Start an optional extension only after the core prototype has been tested with
people and iterated once. Choose one extension at a time. Finish it, verify what
changed, and record the result before starting another.

These extensions deepen the learning cycle. They are not a competition to add
the largest number of features.

### Improve the Design Thinking Skill

Review where Claude misunderstood the method, asked for too little evidence, or
produced an artifact that required substantial correction.

Ask Claude to propose a focused change to `SKILL.md`. Approve the change, rerun
the relevant part of the workflow, and compare the new output with the previous
version.

Record:

- the weakness observed in the original Skill;
- the instruction that changed;
- the difference in Claude's new output; and
- whether the change should remain in the project.

### Improve a Subagent

Choose the evidence auditor or prototype reviewer. Identify one important issue
it missed, one unhelpful finding it produced, or one permission it did not need.

Ask Claude to revise the subagent's description, instructions, or allowed tools.
Run the same review again and compare the findings. The revised subagent should
be more focused, not simply more verbose.

### Run a Second Test and Iteration

Test the revised prototype with another relevant person or proxy. Keep the task
comparable so the group can see whether the first iteration improved the
experience or moved the problem elsewhere.

Add the observations to `test-notes.md`, ask Claude to propose the next smallest
change, and decide whether to implement, defer, or reject it.

### Conduct a Cross-Group Review

Exchange `discovery.md`, the learning question, and the prototype with another
group. Do not exchange sensitive or identifiable research notes.

The reviewing group should identify:

- one strong link between evidence and design;
- one claim that needs better evidence;
- one part of the prototype that does not clearly answer the learning question;
  and
- one question the original group should investigate next.

Ask Claude to compare the peer review with the subagent reviews. The AI Project
Manager decides which feedback is relevant and records the decision.

### Explore an Alternative Direction

Return to one rejected concept in `decision-log.md`. Ask Claude to create the
smallest representation needed to compare it with the selected concept against
the same learning question.

Do not build a second complete product. Compare the two directions using the
available evidence, then explain whether the original decision still holds.

### Deepen Accessibility and Inclusion

Ask the prototype reviewer to examine keyboard use, content clarity, contrast,
error recovery, and assumptions about users' abilities or circumstances. Select
the concerns that are relevant to the project and ask Claude to propose focused
changes.

Verify the revised interaction directly. An automated or agent review can find
likely problems, but it does not replace testing with people who experience the
relevant access needs.

### Add a Failure or Recovery Journey

Identify one plausible moment where the service, user, or information does not
behave as expected. Ask Claude to map the recovery journey before editing the
prototype.

Approve one recovery behaviour, let Claude implement it, and test whether the
person can understand what happened and what to do next.

### Prepare a Decision Brief

Ask Claude to turn the project into a concise decision brief for a product
review. It should connect evidence, the chosen direction, prototype behaviour,
test observations, remaining uncertainty, and the next recommended experiment.

The group reviews every claim and removes any statement that is more confident
than the evidence supports.

## Final Audit

Ask Claude Code to produce a concise audit covering:

- files created or changed;
- evidence used and evidence still missing;
- important assumptions;
- subagent findings that were accepted or rejected;
- prototype changes caused by user observation;
- remaining risks; and
- the recommended next learning step.

Complete `ai-collaboration-log.md`:

| Request or delegated task | Accepted | Edited | Rejected | Evidence or reason |
|---|---|---|---|---|
|  |  |  |  |  |

## Done Means

The project is complete when the group can show:

- an original, bounded challenge;
- traceable evidence and clearly marked uncertainty;
- a reviewed Skill and two focused subagents;
- a prototype created by Claude Code;
- observations from real people or labelled proxies;
- one evidence-based iteration; and
- one example where the AI Project Manager corrected or rejected Claude.

## Reflection

- Which rule in the Skill improved Claude's work most?
- What did the subagents notice that the main conversation missed?
- Where did Claude try to turn an assumption into a fact?
- Which product decision could not be delegated?
- What evidence should the group collect next?
