# Random Respawn

A Minecraft Bedrock Edition behavior pack that teleports players to a random safe location after respawning.

## How It Works

1. Player dies and respawns
2. A random X,Z coordinate is generated (500–5000 blocks from origin)
3. The player is teleported to that location at the world height limit (Y=319)
4. Resistance V is applied for 8 seconds, letting the player fall safely to the ground
5. Chunks load automatically on teleport — no manual scanning needed

## Requirements

- Minecraft Bedrock Edition 1.21.70 or later
- **Scripting API must be enabled** — the pack uses `@minecraft/server`

## Installation

1. Download the `.mcpack` file from the [latest release](https://github.com/bambash/random-respawn-bedrock/releases/latest)
2. Double-click the `.mcpack` file to import it into Minecraft
3. Create or edit a world, then activate the pack under **Behavior Packs**
4. Join the world, die, and respawn at a random location

## Configuration

Edit `scripts/main.js` to adjust:

| Variable | Default | Description |
|----------|---------|-------------|
| `dist` (min) | `500` | Minimum teleport distance from origin |
| `dist` (max) | `5000` | Maximum teleport distance from origin |

## Important Notes

- **Achievements are permanently disabled** in worlds with this pack active. This is a platform-level restriction for any world with scripting enabled and cannot be worked around.
- The pack only triggers on **death respawns**, not on the initial world join.

## License

MIT — see [LICENSE](LICENSE)
