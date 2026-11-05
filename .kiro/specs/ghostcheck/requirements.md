# GhostCheck requirements — initial proposal

Status: drafted by Codex; not yet developed or reviewed with Kiro. Use fictional inputs only.

## Purpose
Help learners compare an AI-generated claim with a supplied excerpt and record human judgments. Never represent lexical matches as verification.

## Acceptance criteria
1. A visitor can load a clearly labelled fictional example, enter a claim and source, and see exact numeric differences and shared words locally.
2. Missing input produces a useful error. User-entered content is rendered as text, not HTML.
3. Results warn that matching words and numbers do not establish support and can miss negation, paraphrase, context and unit differences.
4. Layout works on phone and desktop, supports keyboard use, and clearly says not to enter patient data.
5. A later Kiro-assisted iteration should add user-selected source spans and explicit supported / contradicted / insufficient evidence labels without automated truth claims.
6. No analytics, account, server transmission, medical data or clinical decision functionality in the foundation.
