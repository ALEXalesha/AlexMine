<div align="center">

# AlexMine - Cube World

**Cube World («Кубический мир») is a voxel sandbox game in a single HTML page. It runs in the browser with no server and no internet: open `index.html` or play it online.**

[**▶ Play online →**](https://alexalesha.github.io/AlexMine/) &nbsp;·&nbsp; [Русская версия этого файла](README.ru.md)

[![Status](https://img.shields.io/badge/status-stable-brightgreen)](#) [![CI](https://github.com/ALEXalesha/AlexMine/actions/workflows/ci.yml/badge.svg)](https://github.com/ALEXalesha/AlexMine/actions/workflows/ci.yml) [![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML) [![Website](https://img.shields.io/badge/Website-open-0A84FF?logo=googlechrome&logoColor=white)](https://alexalesha.github.io/AlexMine/) [![Built with Claude Code](https://img.shields.io/badge/Built_with-Claude_Code-D97757?logo=claude&logoColor=white)](https://claude.com/claude-code)

Code, tests and docs are written by Claude (Anthropic) in Claude Code. Ideas, testing and decisions - Alexey.

</div>

> Fan-made sandbox in the spirit of Minecraft. Not affiliated with or endorsed by Mojang or
> Microsoft. Minecraft is a trademark of Mojang Synergies AB. Every texture, sound and the font
> are made by code in this repository; nothing is taken from the original game.

The interface is in Russian.

![Title screen](docs/screens/menu.png)

![The world from above](docs/screens/world.png)

![Creative inventory](docs/screens/inventory.png)

## What is in the game

- **An endless world from a seed:** chunks of 16×16×128 blocks are generated around the player
  in background workers; plains, forests, deserts, snowy biomes, mountains, oceans, caves and ores.
- **Creative and survival.** Health, hunger, food, falling damage, death and respawn, a bed.
- **Day and night** (a 20-minute day), sun, moon, stars, clouds; **weather**: rain, thunderstorms
  with lightning, snow in cold biomes and up high.
- **Blocks and items:** building blocks, water and lava that flow, fire, crafting table, furnace,
  chest, tools and armour, a shield.
- **Mobs:** cows, chickens, zombies, skeletons (they shoot and burn in the sun), spiders,
  creepers, endermen; villages with villagers and trading.
- **The Nether and the End** with the ender dragon as the final boss.
- **Redstone** (dust, torches, levers, buttons, doors, pistons and more), **enchanting** and the
  anvil, **brewing**, **fishing**, a boat, minecarts and rails, experience, 24 achievements.
- First person and third person (F5), synthesised sounds, its own pixel font.
- Worlds and settings are saved in the browser (IndexedDB).

## Controls

| Key | Action |
|---|---|
| W A S D | move (keys can be changed in Settings → Controls) |
| Space | jump; double tap to fly in creative |
| Left Shift | sneak |
| Left Ctrl, or double tap W | sprint |
| Left mouse button | break a block, hit |
| Right mouse button | place a block, use, eat (hold) |
| Middle mouse button | pick the block you look at |
| Wheel, 1-9 | choose a hotbar slot |
| E | inventory |
| Q | drop the item |
| F1 / F2 / F3 / F5 | hide the HUD / screenshot / debug info / camera view |
| F | game fullscreen |
| Esc | pause and free the cursor; Esc again resumes |

In the game's own fullscreen (the F key, or the button in the pause menu) Chrome and Edge let
the game keep Esc (`navigator.keyboard.lock`): to leave fullscreen **hold Esc** or press F.

## Run locally

Open `index.html` in Chrome, Edge or Firefox. three.js r149 is in `vendor/` (MIT, see
`vendor/three.LICENSE.txt`), so nothing is downloaded.

## Tests

The laws of the game are Playwright tests in `tests/`. They open the page by its file address in
headless Chromium, one at a time:

```
npm install
npx playwright install chromium
npm test
```

Mouse capture in the tests is always a stub (a real `requestPointerLock` in headless Chromium on
Windows can clip the user's cursor). `npm run screenshots` makes the pictures above.

## History

The game was made in the MixOfProject collection
(folder `web/minecraft_clone_3d_1`), where it also runs inside the Hub desktop app. This
repository carries the game with its full commit history.

## Licence

MIT, see [LICENSE](LICENSE). three.js: MIT.
