/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.querySelector("#part-one").addEventListener("click", function() {

        var part_one = document.querySelector("#part-one").innerHTML;
        var part_two = document.querySelector("#part-two").innerHTML;
        var part_three = document.querySelector("#part-three").innerHTML;
        var part_four = document.querySelector("#part-four").innerHTML;
        var min_one = parseInt(document.querySelector("#part-one").dataset.min);
        var max_one = parseInt(document.querySelector("#part-one").dataset.max);
        var new_value = parseInt(part_one) + 1;

        if ( min_one <= new_value <= max_one) {
            document.querySelector("#target").innerHTML = "+0" + new_value + part_two + part_three + part_four;
            document.getElementById("part-one").innerHTML = new_value;
        }
    })

    document.querySelector("#part-two").addEventListener("click", function() {
        var part_one = document.querySelector("#part-one").innerHTML;
        var part_two = document.querySelector("#part-two").innerHTML;
        var part_three = document.querySelector("#part-three").innerHTML;
        var part_four = document.querySelector("#part-four").innerHTML;
        var min_two = parseInt(document.querySelector("#part-two").dataset.min);
        var max_two = parseInt(document.querySelector("#part-two").dataset.max);
        var new_value = parseInt(part_two) + 1;

        if ( min_two <= new_value <= max_two) {
            if (new_value < 10) {
                new_value = "0" + new_value;
                document.querySelector("#target").innerHTML = "+0" + part_one + new_value + part_three + part_four;
                document.getElementById("part-two").innerHTML = new_value;
            } else {
                document.querySelector("#target").innerHTML = "+0" + part_one + new_value + part_three + part_four;
                document.getElementById("part-two").innerHTML = new_value;
            }
        }
    })

    document.querySelector("#part-three").addEventListener("click", function() {
        var part_one = document.querySelector("#part-one").innerHTML;
        var part_two = document.querySelector("#part-two").innerHTML;
        var part_three = document.querySelector("#part-three").innerHTML;
        var part_four = document.querySelector("#part-four").innerHTML;
        var min_three = parseInt(document.querySelector("#part-three").dataset.min);
        var max_three = parseInt(document.querySelector("#part-three").dataset.max);
        var new_value = parseInt(part_three) + 1;

        if ( min_three <= new_value <= max_three) {
            if (new_value < 10) {
                new_value = "0" + new_value;
                document.querySelector("#target").innerHTML = "+0" + part_one + part_two + new_value + part_four;
                document.getElementById("part-three").innerHTML = new_value;
            } else {
                document.querySelector("#target").innerHTML = "+0" + part_one + part_two + new_value + part_four;
                document.getElementById("part-three").innerHTML = new_value;
            }
        }
    })

    document.querySelector("#part-four").addEventListener("click", function() {
        var part_one = document.querySelector("#part-one").innerHTML;
        var part_two = document.querySelector("#part-two").innerHTML;
        var part_three = document.querySelector("#part-three").innerHTML;
        var part_four = document.querySelector("#part-four").innerHTML;
        var min_four = parseInt(document.querySelector("#part-four").dataset.min);
        var max_four = parseInt(document.querySelector("#part-four").dataset.max);
        var new_value = parseInt(part_four) + 1;

        if ( min_four <= new_value <= max_four) {
            if (new_value < 10) {
                new_value = "0" + new_value;
                document.querySelector("#target").innerHTML = "+0" + part_one + part_two + part_three + new_value;
                document.getElementById("part-four").innerHTML = new_value;
            } else {
                document.querySelector("#target").innerHTML = "+0" + part_one + part_two + part_three + new_value;
                document.getElementById("part-four").innerHTML = new_value;
            }
        }
    })

})();
