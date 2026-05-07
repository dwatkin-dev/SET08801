import { getInventory, updateInventory } from "./core.js";

// Adds the patch to the players inventory on first visit. Subsequent visits change the room text.

if (getInventory() != "Empty") {
    document.getElementById("patchText").innerHTML =
        "<p>You already downloaded the <span class=\"safety\">Patch Script</span>!</p> <p>Find and defeat the <span class=\"wumpus\">Wumpus.exe</span>...</p>";
} else {
    updateInventory("patch_v.1.0.exe");
}
