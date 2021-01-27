/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var clicks = parseInt(localStorage.getItem("counter"));
    document.querySelector("#target").innerHTML = clicks;


    document.querySelector("#increment").addEventListener("click", function() {
        clicks++;
        localStorage.setItem("counter", clicks);
        document.querySelector("#target").innerHTML = localStorage.getItem("counter");
    })
})();
