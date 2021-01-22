/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        var numbers = []

        for (let i = 1; i <= 10; i++) {
            numbers.push(Math.floor(Math.random() * 100) + 1);
            document.getElementById("n-" + i).innerHTML = numbers[i-1];
        }

        // Solution with sort() method

        // Sort ascending

        // numbers.sort(function(a, b){return a - b});
        // document.getElementById("min").innerHTML = numbers[0];


        // Solution using Math.min() method

        function minNumber(arr) {
            return Math.min.apply(null, arr);
        }
        document.getElementById("min").innerHTML = minNumber(numbers);


        // Solution with sort() method

        // Sort descending

        // numbers.sort(function(a, b){return b - a});
        // document.getElementById("max").innerHTML = numbers[0];


        // Solution using Math.max() method

        function maxNumber(arr) {
            return Math.max.apply(null, arr);
        }
        document.getElementById("max").innerHTML = maxNumber(numbers);


        // Sum of all numbers in the array
        var sum = 0;
        numbers.forEach(sumNumbers);

        function sumNumbers(number) {
            sum = sum + number;
        }
        document.getElementById("sum").innerHTML = sum;

        // Average of all numbers
        var avg = sum / numbers.length
        document.getElementById("average").innerHTML = avg;


    })

})();
