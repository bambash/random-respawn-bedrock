import { world } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe((event) => {
    const { player, initialSpawn } = event;

    // Skip initial world join — only random-teleport on death respawn
    if (initialSpawn) return;

    // Generate random coordinates in a ring 500-5000 blocks out
    const angle = Math.random() * Math.PI * 2;
    const dist = 500 + Math.random() * 4500;
    const x = Math.round(Math.cos(angle) * dist);
    const z = Math.round(Math.sin(angle) * dist);

    // Resistance V (amplifier 4 = 100% damage reduction) for 8 seconds.
    // Player will fall from y=319 to the ground safely — no fall damage.
    player.addEffect("resistance", 8 * 20, {
        amplifier: 4,
        showParticles: false,
    });

    // Teleport to random location. Gravity brings the player down.
    // Chunks load automatically on teleport — no manual scanning needed.
    player.teleport({ x, y: 319, z });
});
