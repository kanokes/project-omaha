# Project Omaha Decision Log

This file records product, architecture, and scope decisions that materially affect implementation.

## D-001: Fictional content for validation

**Decision:** The MVP uses fictional schools, players, conferences, logos, and venues.

**Reason:** This avoids licensing dependencies while validating gameplay and commercial interest.

## D-002: Browser-first prototype

**Decision:** The first playable build targets a desktop browser with a mobile-landscape layout.

**Reason:** Browser delivery enables fast iteration and playtesting. Capacitor or a production engine decision can follow once gameplay is validated.

## D-003: React plus Phaser

**Decision:** React owns application and dynasty UI. Phaser owns the live baseball field.

**Reason:** Separating management interfaces from game rendering keeps both systems understandable and replaceable.

## D-004: Simulation independent from presentation

**Decision:** Baseball results are calculated in pure TypeScript modules before animations display them.

**Reason:** This supports testing, deterministic replays, balancing, accelerated simulation, and future platform changes.

## D-005: No public overall rating

**Decision:** The interface emphasizes tools, roles, scouting reports, tendencies, and Baseball DNA rather than a universal overall score.

**Reason:** Players should evaluate athletes like coaches and remember identities rather than numbers.

## D-006: Gameplay before dynasty depth

**Decision:** The batting and pitching sandboxes must be validated before implementing the broader dynasty systems.

**Reason:** Recruiting and program-building cannot rescue unsatisfying baseball gameplay.

## D-007: Premium, non-exploitative product direction

**Decision:** Project Omaha will not use pay-to-win systems, energy timers, card packs, or gacha mechanics.

**Reason:** Monetization must not undermine baseball strategy or dynasty integrity.
