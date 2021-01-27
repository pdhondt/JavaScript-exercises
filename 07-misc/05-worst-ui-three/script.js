/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.querySelector("#fix-part-one").addEventListener("click", function() {
        var part_one = document.querySelector("#part-one").value;
        var part_two = document.querySelector("#part-two").value;
        var part_three = document.querySelector("#part-three").value;
        var part_four = document.querySelector("#part-four").value;
        var min = parseInt(document.querySelector("#part-one").dataset.min);
        var max = parseInt(document.querySelector("#part-one").dataset.max);
        var current = randomInteger(min, max);

        document.querySelector("#part-one").value = current;
        document.querySelector("#target").innerHTML = "+0" + current + part_two + part_three + part_four;
    })

    document.querySelector("#fix-part-two").addEventListener("click", function() {
        var part_one = document.querySelector("#part-one").value;
        var part_two = document.querySelector("#part-two").value;
        var part_three = document.querySelector("#part-three").value;
        var part_four = document.querySelector("#part-four").value;
        var min = parseInt(document.querySelector("#part-two").dataset.min);
        var max = parseInt(document.querySelector("#part-two").dataset.max);
        var current = randomInteger(min, max);

        if (current < 10) {
            current = "0" + current;
            document.querySelector("#part-two").value = current;
            document.querySelector("#target").innerHTML = "+0" + part_one + current + part_three + part_four;
        } else {
            document.querySelector("#part-two").value = current;
            document.querySelector("#target").innerHTML = "+0" + part_one + current + part_three + part_four;
        }
    })

    document.querySelector("#fix-part-three").addEventListener("click", function() {
        var part_one = document.querySelector("#part-one").value;
        var part_two = document.querySelector("#part-two").value;
        var part_three = document.querySelector("#part-three").value;
        var part_four = document.querySelector("#part-four").value;
        var min = parseInt(document.querySelector("#part-three").dataset.min);
        var max = parseInt(document.querySelector("#part-three").dataset.max);
        var current = randomInteger(min, max);

        if (current < 10) {
            current = "0" + current;
            document.querySelector("#part-three").value = current;
            document.querySelector("#target").innerHTML = "+0" + part_one + part_two + current + part_four;
        } else {
            document.querySelector("#part-three").value = current;
            document.querySelector("#target").innerHTML = "+0" + part_one + part_two + current + part_four;
        }
    })

    document.querySelector("#fix-part-four").addEventListener("click", function() {
        var part_one = document.querySelector("#part-one").value;
        var part_two = document.querySelector("#part-two").value;
        var part_three = document.querySelector("#part-three").value;
        var part_four = document.querySelector("#part-four").value;
        var min = parseInt(document.querySelector("#part-four").dataset.min);
        var max = parseInt(document.querySelector("#part-four").dataset.max);
        var current = randomInteger(min, max);

        if (current < 10) {
            current = "0" + current;
            document.querySelector("#part-four").value = current;
            document.querySelector("#target").innerHTML = "+0" + part_one + part_two + part_three + current;
        } else {
            document.querySelector("#part-four").value = current;
            document.querySelector("#target").innerHTML = "+0" + part_one + part_two + part_three + current;
        }
    })

})();
