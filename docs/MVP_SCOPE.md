# Project Omaha MVP Scope

## Objective

Prove that a fast college baseball game with simple controls and a lightweight dynasty loop is fun enough to support a larger commercial product.

The MVP is a playable vertical slice, not a feature-complete college baseball simulation.

## Core player promise

The player can select a fictional college program, play fast baseball games from a classic behind-the-pitcher view, recruit and develop players, complete a short season, and compete for a championship.

## Included in the MVP

### On-field gameplay

- Behind-the-pitcher batting presentation
- Contact and power swings
- Timing feedback: very early, early, good, perfect, late, very late
- Four initial pitch types
- Pitch targeting and release timing
- Balls, strikes, walks, strikeouts, hits, fouls, outs, and runs
- Automatic defensive movement
- Player-selected throw decisions where useful
- Automatic baserunning with simple overrides
- Nine-inning rules with an accelerated presentation target
- Optional simulation between user-controlled moments

### Dynasty shell

- Eight fictional schools in one conference
- Fictional players and coaches
- Twenty-five-player rosters for prototype purposes
- Schedule, standings, and basic team statistics
- Simplified player progression
- One recruiting class and short recruiting cycle
- Graduations and incoming freshmen
- Conference tournament and championship
- Local save and resume

### Presentation

- Mobile-landscape layout
- Retro-inspired 2D or 2.5D presentation
- School colors and fictional branding
- Scorebug and count display
- Essential sound effects
- Text-based contextual feedback

## Explicitly excluded from MVP

- Real schools, logos, conferences, athletes, stadiums, or NCAA marks
- NIL economy
- Transfer portal
- Online multiplayer or online dynasty
- Full manual fielding
- Advanced facilities and campus construction
- Coach carousel
- Dynamic voiced commentary
- Historical eras
- Conference realignment
- International recruiting
- Live-service systems
- Mobile store deployment

Excluded systems remain part of the long-term Development Bible but may not be added without an explicit scope decision.

## MVP success criteria

The MVP succeeds when:

1. A new player understands batting within two minutes.
2. A full game can be completed in approximately 8 to 12 minutes using accelerated presentation.
3. Gameplay remains enjoyable without progression rewards for at least 20 to 30 minutes.
4. A complete season can be finished without broken state or implausible standings.
5. Recruiting and development create at least one memorable roster decision per season.
6. The application performs reliably in a desktop browser at a 16:9 landscape resolution.

## Development order

1. Repository foundation
2. Batting sandbox
3. Pitching sandbox
4. Complete plate appearance
5. Complete inning
6. Complete game
7. Season shell
8. Recruiting and development loop
9. Tournament and offseason
10. Polish and playtesting
