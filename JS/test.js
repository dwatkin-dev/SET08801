import { getHealth, setHealth, updateStatus } from "./core.js";

var health = getHealth() - 1;
setHealth(health);
updateStatus();
