# Repository Agent Instructions

## Core Principles
- Keep solutions small, explicit, and production-oriented.
- Reuse mature tooling before writing custom scripts.
- Keep workflows deterministic and observable.

## Workflow Rules
- Use feature branches; keep `main` protected.
- Run `npm run verify` before opening a PR.
- Treat GitHub workflows as first-class code and review changes carefully.

## CI Gate
- CI must pass before merge.
- Do not bypass failing checks.
