/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // Create a second array where we will store the unique elements
    var noDuplicates = [];

    // Click "Run the script
    document.getElementById("run").addEventListener("click", function() {

        // Loop through each element of the fruits array and execute function remDuplicate on the element
        fruits.forEach(remDuplicate);

        function remDuplicate(fruit) {

            // if the element is not present in the noDuplicates array, add the element
            if (!noDuplicates.includes(fruit)) {  // or if (noDuplicates.includes(fruit) == false)
                noDuplicates.push(fruit);
            }
        }
        console.log(noDuplicates);

    })

})();
