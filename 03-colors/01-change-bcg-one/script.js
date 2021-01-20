/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function changeBgColor() {

    if (this.id == "red" ) {
        document.body.style.backgroundColor = "red";
    } else if (this.id == "green") {
        document.body.style.backgroundColor = "green";
    } else if (this.id == "yellow") {
        document.body.style.backgroundColor = "yellow";
    } else if (this.id == "blue") {
        document.body.style.backgroundColor = "blue";
    }
}



    document.getElementById("red").addEventListener("click", changeBgColor);
    document.getElementById("green").addEventListener("click", changeBgColor);
    document.getElementById("yellow").addEventListener("click", changeBgColor);
    document.getElementById("blue").addEventListener("click", changeBgColor);








