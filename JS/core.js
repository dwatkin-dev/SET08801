// Core JS functions to be used in individual room type code files

export function initGame() {
    if(!sessionStorage.getItem("initialised")) {
        sessionStorage.setItem("health", 20);
        sessionStorage.setItem("initialised", true);
    }
}

export function updateStatus() {
    document.getElementById("health").textContent = getHealth();
}

export function setHealth(value) {
    sessionStorage.setItem("health", value);
}

export function getHealth() {
    sessionStorage.getItem("health");
}

