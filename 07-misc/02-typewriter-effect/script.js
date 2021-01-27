/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var text = document.querySelector("#target").innerHTML;
    var i = 0;
    document.querySelector("section.material #target").innerHTML = "";

    typeWriter();


    function typeWriter() {
        if (i < text.length) {      // DO NOT USE A FOR LOOP!!!!!!
            document.getElementById("target").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter,Math.random() * 1000);
        }
    }
})();
