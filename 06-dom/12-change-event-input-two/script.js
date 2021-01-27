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
    var numbers = 0;
    document.querySelector("#pass-one").value = "";

    document.getElementById("pass-one").addEventListener("input", function() {


        var password = document.querySelector("#pass-one").value;
        var count = password.length;
        console.log(count);

        for (var i = 0; i < count; i++) {
            if (!isNaN(password.charAt(i))) {
                numbers += 1;
            }
        }
        if (count >= 8 && numbers >= 2) {
            document.querySelector(".indicator").innerHTML = "ok";
        } else if (count >= 8 && numbers < 2){
            document.querySelector(".indicator").innerHTML = "Not ok";
            alert("Password needs at least 8 characters and at least 2 numbers!")
        } else {
            document.querySelector(".indicator").innerHTML = "Not ok";
        }
    })

    //document.getElementById("pass-one").addEventListener("keydown", function(event) {
    //    if (event.code == 8) {
    //        count--;
    //    }
    //})

})();
