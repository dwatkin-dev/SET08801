import { getHealth, updateHealth } from "./core.js";

// Generates a random damage amount between 1 and 10 and updates health. Informs player of damage.

var damage = Math.floor((Math.random() * 19) + 1);
var health = getHealth() - damage;

if (health < 0) {
    health = 0;
}

document.getElementById("damage").textContent = damage;

updateHealth(health);
