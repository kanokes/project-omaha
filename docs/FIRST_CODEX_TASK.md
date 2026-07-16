# First Codex Task: Sprint 0 Repository Foundation

## Objective

Create a working browser application foundation for Project Omaha. Do not implement full baseball gameplay in this task.

## Required stack

- React
- Vite
- TypeScript strict mode
- Phaser 3
- Zustand
- Vitest
- React Testing Library
- Playwright
- ESLint or Oxlint
- Prettier

## Requirements

1. Scaffold the application without deleting the existing repository documents.
2. Create the module structure described in `docs/ARCHITECTURE.md`.
3. Add a responsive title screen that identifies the game as Project Omaha.
4. Add navigation from the title screen to a `Batting Sandbox` screen and back.
5. Mount a Phaser canvas in the batting sandbox.
6. Draw a placeholder baseball field from a classic behind-the-pitcher perspective using simple shapes. Do not spend time on final art.
7. Add a pure TypeScript swing-timing classifier with these outcomes:
   - very early
   - early
   - good
   - perfect
   - late
   - very late
8. Add unit tests for all timing classifications and boundary cases.
9. Add a seeded random-source interface for future simulation work.
10. Add at least one component test covering title-to-sandbox navigation.
11. Add a Playwright test covering the same critical journey.
12. Add GitHub Actions that run install, typecheck, lint, tests, and build.
13. Update `docs/DECISIONS.md` for any meaningful deviations from the documented architecture.

## Restrictions

- Do not implement recruiting, rosters, schedules, dynasty progression, or real teams.
- Do not add a backend.
- Do not add authentication.
- Do not introduce final art assets.
- Do not couple simulation functions to Phaser or React.
- Do not use `any` to bypass TypeScript errors.

## Acceptance criteria

- `npm install` succeeds.
- `npm run dev` launches the title screen.
- The user can enter and exit the batting sandbox.
- The game canvas remains readable at a 16:9 desktop resolution and common mobile-landscape widths.
- Type checking, linting, unit tests, component tests, build, and Playwright tests pass.
- The final response lists files created or changed, architecture decisions, exact verification commands, and remaining risks.

## Required verification

```bash
npm run typecheck
npm run lint
npm test
npm run build
npm run test:e2e
```
