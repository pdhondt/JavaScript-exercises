/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var target = document.querySelector("#target");
    var table = document.createElement("table");

    for (var i = 1; i <= 10; i++) {
        var row = document.createElement("tr");
        for (var j = 1; j <= 10; j++){
            var col = document.createElement("td");
            //col.appendChild(document.createTextNode(i * j));
            col.innerHTML = new String(i * j);
            row.appendChild(col);
        }
        table.appendChild(row);

    }
    target.appendChild(table);

})();
