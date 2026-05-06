// Functions to be used in page specific modules

export function updateStatus() {
    // Updates the player status
    if (getHealth() != null && getInventory() != null) {
        document.getElementById("health").textContent = getHealth();
        document.getElementById("inventory").textContent = getInventory();
    }
}

export function setHealth(value) {
    // Update health value
    sessionStorage.setItem("health", value);
}

export function getHealth() {
    // Read health value
    return sessionStorage.getItem("health");
}

export function setInventory(value) {
    // Update inventory value
    sessionStorage.setItem("inventory", value);
}

export function getInventory() {
    // Read inventory value
    return sessionStorage.getItem("inventory");
}

// Reset of the game

function resetStorage() {
    setHealth(20);
    setInventory("Empty");
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

// Core JS used on every page
updateStatus(); // Updates the status for pages that have no modules
