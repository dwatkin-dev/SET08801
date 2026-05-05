// Core JS functions to be used in individual room type code files

export function updateStatus() {
    document.getElementById("health").textContent = getHealth();
}

export function setHealth(value) {
    sessionStorage.setItem("health", value);
}

export function getHealth() {
    return sessionStorage.getItem("health");
}

updateStatus();
