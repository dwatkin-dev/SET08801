import { getWumpusKilled } from "./core.js";

var win =
    "<p>At the center of the room floats a <span class=\"mystery\">radiant sphere</span> of <span class=\"structure\">structured light</span>.</p>" +
    "<p>You reach out. The sphere <span class=\"mystery\">pulses — once, twice</span> — then floods the chamber with <span class=\"safety\">warmth</span>.</p>" +
    "<p><span class=\"safety\">Clean code</span> cascades down every wall. Broken markup <span class=\"structure\">seals</span> itself. Corrupted scripts rewrite, line by line, into something <span class=\"safety\">beautiful</span>.</p>" +
    "<p>The Network breathes again.</p>" +
    "<p><span class=\"structure\">WEB CORE RESTORED.</span></p>" +
    "<p><span class=\"warning\">STATUS:</span> <span class=\"safety\">STABLE</span></p>" +
    "<p><span class=\"warning\">CORRUPTION:</span> <span class=\"safety\">0%</span></p>" +
    "<p><span class=\"warning\">WUMPUS.EXE:</span> <span class=\"safety\">TERMINATED</span></p>" +
    "<p>You stand at the heart of a <span class=\"structure\">Network</span> reborn. The hum of a thousand <span class=\"structure\">clean connections</span> fills the silence where static once screamed.</p>" +
    "<p>You are a <span class=\"safety\">Debugger</span>. You came. You fixed it. <span class=\"safety\">You won.</span></p>" +
    "<div class=\"button\"><a href=\"../index.htm\" class=\"generalButton\" id=\"reset\">PLAY AGAIN</a></div>";

if(getWumpusKilled() == "true") {
    document.getElementById("coreText").innerHTML = win;
    document.getElementById("nav").innerHTML = "";
    document.querySelector(".generalButton").addEventListener("click", killWumpus);
}
