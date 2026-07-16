# Project Omaha

A mobile-first college baseball game combining fast, retro-inspired on-field action with long-term program-building dynasty systems.

## Current milestone

**Sprint 0: Repository foundation**

The initial build will establish:

- React + TypeScript application shell
- Phaser game canvas
- Mobile-landscape layout
- Title screen and batting sandbox navigation
- Seeded simulation boundary
- Automated tests and GitHub Actions
- Codex repository instructions

## Product vision

Project Omaha combines the accessible, behind-the-pitcher feel of classic baseball games such as *Bases Loaded* with the fast progression and dynasty appeal of *Retro Bowl*. The player directly plays baseball while building a college program across many seasons.

## Setup

```bash
npm install
npm run dev
```

## Verification

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run test:e2e
```

## Documents

- `AGENTS.md`: standing instructions for Codex
- `docs/MVP_SCOPE.md`: first playable scope and exclusions
- `docs/ARCHITECTURE.md`: system boundaries and technical direction
- `docs/DECISIONS.md`: product and architecture decision log
- `docs/FIRST_CODEX_TASK.md`: the first implementation assignment

## Product principles

- Baseball should be playable within seconds.
- Games should respect the player's time.
- Dynasty systems should create memorable player and program stories.
- Fictional content avoids licensing risk during validation.
- No public overall player ratings.
- No pay-to-win mechanics.
