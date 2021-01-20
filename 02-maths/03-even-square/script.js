/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        for (let i = 1; i <= 21; i++) {
            let num_square = Math.pow(i, 2); // alternative: i ** 2
            document.write(num_square);
            document.write("<br />"); // or document.write("\n") to print the results on a single line with a space between each value
        }

    });

})();
