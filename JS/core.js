// Functions to be used in page specific modules

export function updateStatus() {
    // Updates the player status
    document.getElementById("health").textContent = getHealth();
    document.getElementById("inventory").textContent = getInventory();
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
    // Update health value
    sessionStorage.setItem("inventory", value);
}

export function getInventory() {
    // Read health value
    return sessionStorage.getItem("inventory");
}

// Core functions not needed in other modules

function init() {
    setHealth(30);
    setInventory("Nerd");
}

// Core JS used on every page

document.getElementById("initalise").onclick = init(); // Used where game reset is required

updateStatus(); // Updates the status for pages that have no modules
