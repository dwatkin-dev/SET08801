import { updateHealth, updateWumpusKilled, getInventory } from "./core.js";

var noPatch =
    "<p>You have no <span class=\"safety\">Patch Script</span>. No weapon. <span class=\"warning\">No defence</span>.</p>" +
    "<p><span class=\"danger\">It sees you.</span></p>" +
    "<p><span class=\"mystery\">Corrupted data floods</span> your system. Your <span class=\"mystery\">processes stall</span>. Your <span class=\"mystery\">memory fragments</span>.</p>" +
    "<p><span class=\"danger\">CRITICAL CORRUPTION DETECTED</span> --- <span class=\"warning\">Process terminated.</span></p>" +
    "<p><span class=\"danger\">The labyrinth swallows you whole.</span></p>" +
    "<p><span class=\"mystery\">The Web Core remains dark.</span></p>";

var patch =
    "<p>Its form <span class=\"warning\">shudders, hungry</span>. Corrupted <span class=\"mystery\">markup cascades</span> from its body like a boken waterfall.</p>" +
    "<p>You reach into your inventory. The <span class=\"safety\">Patch Script</span> pulses in your hand...</p>" +
    '<div class="button"><button class="generalButton">DEPLOY PATCH SCRIPT</button></div>';

var patchDeployed =
    "<p>You execute <span class=\"safety\">patch_v.1.0.exe</span>.</p>" +
    "<p>A beam of <span class=\"structure\">structured, clean code</span> erupts outward. <span class=\"wumpus\">Wumpus.exe</span> screams in binary</p>" +
    "<p><span class=\"warning\">0x45 0x52 0x52 0x4F 0x52</span> — as the patch tears through its <span class=\"danger\">corrupted core</span>.</p>" +
    "<p>Its form <span class=\"mystery\">fractures</span>. Its broken tags <span class=\"mystery\">dissolve</span>. The static <span class=\"mystery\">dies</span>.</p>" +
    "<p><span class=\"wumpus\">Wumpus.exe</span> has been <span class=\"safety\">terminated</span>.</p>" +
    "<p><span class=\"mystery\">The labyrinth shudders. A distant hum grows louder</span> — something is <span class=\"structure\">stabilising</span>.</p>" +
    "<p><span class=\"structure\">The Web Core</span> is close. Move forward, <span class=\"safety\">Debugger</span>.</p>";

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
