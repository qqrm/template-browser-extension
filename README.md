# Browser Extension Template

Template repository for cross-browser extension delivery with GitHub Actions.

## Included
- CI (`.github/workflows/ci.yml`)
- Manual deploy workflow for Firefox AMO and Chrome Web Store (`.github/workflows/release.yml`)
- Codex cleanup workflow (`.github/workflows/codex-cleanup.yml`)

## Required Secrets
- `FIREFOX_JWT_ISSUER`
- `FIREFOX_JWT_SECRET`
- `CWS_EXTENSION_ID`
- `CWS_CLIENT_ID`
- `CWS_CLIENT_SECRET`
- `CWS_REFRESH_TOKEN`

## Usage
1. Create a repository from this template.
2. Set the secrets listed above.
3. Update `extension/manifest.json` and extension source files.
4. Run `Deploy Browser Extension` workflow manually.

## Local Commands
- `npm ci`
- `npm run verify`
- `npm run build:firefox`
- `npm run build:chrome`
