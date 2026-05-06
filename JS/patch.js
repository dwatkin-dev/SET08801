import { getInventory, updateInventory, updateStatus } from "./core.js";

// Adds the patch to the players inventory on first visit. Subsequent visits change the room text.

if (getInventory() != "Empty") {
    document.getElementById("patchText").innerHTML =
        "<p>You already downloaded the patch!</p> <p>Find and defeat the Wumpus.exe...</p>";
} else {
    updateInventory("patch_v.1.0.exe");
}
