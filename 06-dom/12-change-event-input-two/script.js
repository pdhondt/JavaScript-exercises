/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var count = 0;
    var numbers = 0;
    document.querySelector("#pass-one").value = "";

    document.getElementById("pass-one").addEventListener("input", function() {

        count++;
        var password = document.querySelector("#pass-one").value;

        for (var i = 0; i < password.length; i++) {
            if (!isNaN(password.charAt(i))) {
                numbers += 1;
            }
        }
        if (count >= 8 && numbers >= 2) {
            document.querySelector(".indicator").innerHTML = "ok";
        } else if (count >= 8){
            alert("Password needs at least 8 characters and at least 2 numbers!")
        }
    })

    document.getElementById("pass-one").addEventListener("keydown", function(event) {
        if (event.code == 8) {
            count--;
        }
    })

})();
