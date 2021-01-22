/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "perry",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
        "apple",
    ];

    // solution using the find() Method

    document.getElementById("run").addEventListener("click", function() {

        function findApple(fruit) {
            return fruit == "apple";
        };

        if (fruits.find(findApple) == "apple") {
            console.log("Yes, there is an apple!");
        };


        }

    )

})();

// alternative solution

//    fruits.forEach(findApple);

//    function findApple(fruit) {

//        if (fruit == "apple") {
//            console.log("Yes, there is an apple!");
//        }
//    }

