/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    var count = 0;
    var image = document.querySelector("section.material img");
    console.log(image);

    document.querySelector("#next").addEventListener("click", function() {
        count++;
        if (count < gallery.length) {
            image.src = gallery[count];
        } else {
            count = 0;
            image.src = gallery[count];
        }

    })


})();
