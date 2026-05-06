import { updateHealth, updateWumpusKilled, getInventory } from "./core.js";

var noPatch =
    "<p>You have no Patch Script. No weapon. No defence.</p>" +
    "<p>It sees you.</p>" +
    "<p>Corrupted data floods your system. Your processes stall. Your memory fragments.</p>" +
    "<p>CRITICAL CORRUPTION DETECTED --- Process terminated.</p>" +
    "<p>The labyrinth swallows you whole.</p>" +
    "<p>The Web Core remains dark.</p>";

var patch =
    "<p>Its form shudders, hungry. Corrupted markup cascades from its body like a boken waterfall.</p>" +
    "<p>You reach into your inventory. The Patch Script pulses in your hand...</p>" +
    '<div class="button"><button class="generalButton">DEPLOY PATCH SCRIPT</button></div>';

var patchDeployed =
    "<p>You execute patch_v.1.0.exe.</p>" +
    "<p>A beam of structured, clean code erupts outward. Wumpus.exe screams in binary — 0x45 0x52 0x52 0x4F 0x52 — as the patch tears through its corrupted core.</p>" +
    "<p>Its form fractures. Its broken tags dissolve. The static dies.</p>" +
    "<p>Wumpus.exe has been terminated.</p>" +
    "<p>The labyrinth shudders. A distant hum grows louder — something is stabilising.</p>" +
    "<p>The Web Core is close. Move forward, Debugger.</p>";

if(getInventory() == "Empty") {
    document.getElementById("wumpusText").innerHTML += noPatch;
    updateHealth(0);
} else {
    document.getElementById("wumpusText").innerHTML += patch;

    document.querySelector(".generalButton").addEventListener("click", killWumpus);
}

function killWumpus() {
    document.getElementById("wumpusText").innerHTML = patchDeployed;
    updateWumpusKilled("true");
}
