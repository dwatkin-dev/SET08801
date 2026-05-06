// Functions to be used in all modules

export function updateStatus() {
    // Updates the player status
    document.getElementById("health").textContent = getHealth();
    document.getElementById("inventory").textContent = getInventory();
}

export function updateHealth(value) {
    // Update health value
    sessionStorage.setItem("health", value);
    updateStatus(); // Update status on change
    checkForDeath();
}

export function getHealth() {
    // Read health value
    return sessionStorage.getItem("health");
}

export function updateInventory(value) {
    // Update inventory value
    sessionStorage.setItem("inventory", value);
    updateStatus(); // Update status on change
}

export function getInventory() {
    // Read inventory value
    return sessionStorage.getItem("inventory");
}

export function updateWumpusKilled(value) {
    // Update inventory value
    sessionStorage.setItem("wumpusKilled", value);
}

export function getWumpusKilled() {
    // Read inventory value
    return sessionStorage.getItem("wumpusKilled");
}

// Code unique to this module

// Reset of the game when links with the id "reset" are used.
function resetStorage() {
    sessionStorage.setItem("health", 20);
    sessionStorage.setItem("inventory", "Empty");
    sessionStorage.setItem("wumpusKilled", "false");
}

var resetBtn = document.getElementById("reset");
if (resetBtn) {
    // Stops the link from navigating until the reset has been performed
    resetBtn.addEventListener("click", function (e) {
        e.preventDefault();
        resetStorage();

        window.location.href = resetBtn.href;
    });
}

// Check for death
function checkForDeath() {
    console.log("are you dead?");
    if(getHealth() == 0){
        clearNav();
    }
}

function clearNav() {
    document.getElementById("nav").innerHTML =
        "<p>GAME OVER!</p>" +
        "<a href=\"./room_01.htm\" class=\"generalButton\">RESTART DEBUGGING</a>";
    resetStorage();
}


// Once all code has run update the status
updateStatus();
