/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    // var source = document.getElementById("source").getAttribute("data-image");
    // better and cleaner is to use the dataset property
    var source = document.querySelector("#source").dataset.image;

    var image = document.createElement("img");

    document.getElementById("target").appendChild(image);

    // var attribute = document.createAttribute("src");
    // attribute.value = source;
    // image.setAttributeNode(attribute);

    // shorter way, replaces 3 lines above
    image.src = source;

    var toRemove = document.getElementById("source");
    toRemove.remove();



})();
