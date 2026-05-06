import { getInventory, setInventory, updateStatus } from "./core.js";

//Run after DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    if (getInventory() != "Empty") {
        document.getElementById("patchText").innerHTML =
            "<p>You already downloaded the patch!</p> <p>Find and defeat the Wumpus.exe...</p>";
    } else {
        setInventory("patch_v.1.0.exe");
    }

});
