# Project Omaha Agent Instructions

## Product

Project Omaha is a mobile-first college baseball game inspired by the behind-the-pitcher presentation of **Bases Loaded** and the approachable dynasty loop of **Retro Bowl**.

The player fantasy is building a small college baseball program into a sustainable national champion while directly playing fast, readable baseball games.

## Current objective

Build only the MVP vertical slice defined in `docs/MVP_SCOPE.md`.

Do not implement features outside the current milestone unless the task explicitly changes scope. Record deliberate scope changes in `docs/DECISIONS.md`.

## Product rules

- Preserve fast, readable, mobile-landscape gameplay.
- Prefer meaningful baseball decisions over complex controls.
- Never add pay-to-win, energy timers, card packs, gacha, or manipulative retention mechanics.
- Use fictional schools, players, conferences, logos, and branding until licensing is resolved.
- Do not expose an overall player rating in the user interface.
- Keep on-field gameplay central. Dynasty systems support gameplay rather than replacing it.

## Engineering rules

- Use TypeScript with strict mode enabled.
- Do not use `any` unless the exception is documented inline.
- Keep simulation logic independent from React and Phaser.
- Prefer deterministic pure functions for baseball outcome calculations.
- Supply a seeded random source to stochastic simulation functions.
- Do not hard-code teams, players, pitches, schedules, or rules inside components.
- Keep React responsible for application UI and Phaser responsible for the live baseball field.
- Avoid new dependencies unless the task explains why the existing stack is insufficient.
- Design for touch and keyboard from the beginning.
- Preserve a 16:9 landscape play area at common mobile and desktop resolutions.

## Testing rules

- Add unit tests for simulation logic.
- Add component tests for important UI state.
- Add Playwright coverage for critical user journeys.
- Every bug fix should include a regression test when practical.
- Do not weaken or delete tests solely to make a change pass.

## Verification

Before completing a task, run:

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

For user-interface or navigation changes, also run:

```bash
npm run test:e2e
```

Report the exact commands run and any command that could not be completed.

## Documentation

Update `docs/DECISIONS.md` whenever making a meaningful architecture, gameplay, data, or scope decision.

Update `docs/ARCHITECTURE.md` when module boundaries or ownership change.

Keep the README focused on setup, current milestone, and verification.
