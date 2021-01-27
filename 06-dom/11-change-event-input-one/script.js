/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var count = 0;
    document.querySelector("#pass-one").value = "";

    document.getElementById("pass-one").addEventListener("keyup", function() {
        count++;
        if (count > 10) {
            alert("Maximum number of characters reached!");
            document.querySelector("#pass-one").disabled = true;
        } else {
            document.querySelector(".indicator").innerHTML = count + "/10";
        }
    })
})();
