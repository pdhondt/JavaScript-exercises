/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var image_hover = document.querySelector("img").dataset.hover;
    var image_standard = document.querySelector("img").src;

    document.querySelector("figure").onmouseover = function() {mouseOver()};
    document.querySelector("figure").onmouseout = function() {mouseOut()};

    function mouseOver() {
        document.querySelector("img").src = image_hover;
    }

    function mouseOut() {
        document.querySelector("img").src = image_standard;
    }




})();
