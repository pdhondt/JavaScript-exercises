/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var X = Math.floor(Math.random() * 100) +1;
    var Y = 0;

    guessTheNumber();

    function guessTheNumber() {
        Y++;
        var guess = parseInt(prompt("Which number (between 1 and 100) am I thinking of?"));
        if (guess < X) {
            alert("higher");
            guessTheNumber();
        } else if (guess > X) {
            alert("lower");
            guessTheNumber();
        } else if (guess === X) {
            if (Y === 1) {
                alert("that's it! you needed " + Y + " guess.");
            } else {
                alert("that's it!  you needed " + Y + " guesses.");
            }
        }
    }
})();
