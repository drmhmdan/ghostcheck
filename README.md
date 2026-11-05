# GhostCheck

A haunted evidence-review desk for inspecting AI-generated claims against an excerpt. Intended category: **Kiroween 2026 Costume Contest**.

## Current status
This is an early prototype created on 5 November 2026 using Codex. **Kiro has not yet been used**; meaningful actual Kiro use is mandatory before submission. The `.kiro` folder contains initial proposed specs for Kiro to review and develop, not proof of Kiro usage. No pre-existing project code was copied.

## Run
Serve this folder with any static server, for example `python3 -m http.server 8000`, then open `http://localhost:8000`. Click **Load fictional example**, then **Reveal the clues**. Run logic checks with `node test.mjs`.

The prototype compares literal numbers and shared words. It does not fact-check, identify contradictions, or provide clinical advice. Do not enter patient data. Input stays in the browser; no server, storage or model is involved. The optional web fonts load from Google; the app remains usable if unavailable.

## Next steps
Open the project in Kiro and use its tools substantively to implement the feature described in `.kiro/specs/ghostcheck/tasks.md`. Document real use without exposing credentials. Deploy, create a public YouTube demo under three minutes, and complete all Devpost submission fields. Review [official rules](https://kiroween.devpost.com/rules).

## License
GPL-3.0. See LICENSE.
