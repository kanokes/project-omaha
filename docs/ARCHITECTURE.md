# Project Omaha Architecture

## Stack

- TypeScript
- React and Vite for application UI
- Phaser 3 for the live baseball field
- Zustand for lightweight application state
- Vitest for unit and component tests
- Playwright for critical browser journeys
- IndexedDB or a replaceable persistence adapter for local saves

## Architectural principles

1. Simulation logic must not depend on rendering.
2. React owns menus, dashboards, overlays, navigation, and dynasty interfaces.
3. Phaser owns the live field, game animation, cameras, and direct gameplay input.
4. Content is data-driven rather than hard-coded into components or scenes.
5. Random outcomes use an injected seeded random source.
6. Save data is versioned so future releases can migrate existing dynasties.

## Proposed source structure

```text
src/
  app/             React application shell and routing
  game/            Phaser configuration, scenes, entities, and presentation
  simulation/      Pure baseball rules and outcome models
  dynasty/         Rosters, schedules, recruiting, progression, and standings
  data/            Fictional content definitions and validation
  persistence/     Save interfaces and browser implementation
  ui/              Shared React UI components
  tests/           Cross-system fixtures and integration helpers
```

## Data flow

```text
Player input
  -> React or Phaser input adapter
  -> gameplay command
  -> pure simulation function
  -> domain event
  -> state update
  -> presentation response
```

Presentation must never decide the baseball result. It renders results produced by the simulation.

## Initial domain boundaries

### Simulation

Responsible for:

- Count and inning state
- Pitch execution
- Swing timing and contact quality
- Batted-ball results
- Outs, hits, runs, and baserunners
- Deterministic randomization

### Game presentation

Responsible for:

- Field drawing
- Pitch and swing animations
- Camera behavior
- Input collection
- Audio and visual feedback

### Dynasty

Responsible for:

- Teams and rosters
- Schedule and standings
- Player development
- Recruiting
- Tournament structure

### Application

Responsible for:

- Navigation
- Save selection
- Settings
- Menus and dashboards
- Launching and exiting live games

## Performance targets

- 60 frames per second on a modern desktop browser
- Responsive 16:9 landscape canvas
- No simulation dependency on frame rate
- Seeded simulation reproducibility
- Fast enough to simulate a conference week without visible blocking

## Initial implementation rule

Do not build dynasty features until the batting and pitching sandboxes establish a satisfying on-field interaction model.

## Sprint 0 implementation

- `src/app` owns the screen state and application shell.
- `src/ui` owns React screens and shared presentation styles.
- `src/game` owns the Phaser game lifecycle and field scene.
- `src/simulation` contains framework-independent timing and randomness primitives.
- `src/tests` contains shared browser-test setup; `e2e` contains critical Playwright journeys.

The Sprint 0 shell uses a small explicit screen state instead of a routing dependency. Phaser is created and destroyed through a React lifecycle adapter, while baseball outcomes remain isolated from both frameworks.
