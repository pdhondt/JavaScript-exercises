/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.querySelector(".actions #run").addEventListener("click", function() {
        var password = document.getElementById("pass-one").value;
        var confirm_password = document.getElementById("pass-two").value
        if (password !== confirm_password) {
            document.getElementById("pass-one").className = "error";
            document.getElementById("pass-two").className = "error";
        } else {
            document.getElementById("pass-one").className = "";
            document.getElementById("pass-two").className = "";
        }
    })
})();
