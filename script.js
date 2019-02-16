
function calc(click) {
    // get the current display
    var display = document.getElementById("display").textContent;

    if ((display === "0" || display === "Error!") && click !== "AC") {
        if (display === "0" && click === ".") {
            document.getElementById("display").textContent = display + click;
        } else { 
            document.getElementById("display").textContent = click;
        }
    } else {

        if (click === "AC") {
            if (display === "Error!" || display.length === 1) {
                document.getElementById("display").textContent = "0";
            } else {
                document.getElementById("display").textContent = display.substring(0, display.length-1);
            }
        }
        if (click === "=") {
            try {
                document.getElementById("answer").textContent = display + " = ";
                display = eval(display);
                document.getElementById("display").textContent = display;
            } catch(e) {
                document.getElementById("display").textContent = "Error!";
                document.getElementById("answer").textContent = "Err";
            }
        }
        if (click !== "AC" && click !== "=") {
            document.getElementById("display").textContent = display + click;
        }

    }
}