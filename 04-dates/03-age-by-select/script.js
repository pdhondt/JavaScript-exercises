/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Retrieve current date
    let date = new Date();
    console.log(date);

    // Retrieve current year
    let y = date.getFullYear();
    console.log(y);

    // Retrieve current month
    let m = date.getMonth() + 1;
    console.log(m);

    // Retrieve current day of the month (not of the week!)
    let d = date.getDate();
    console.log(d);


    document.getElementById("run").addEventListener("click", function() {

        // retrieve the birthday of the visitor

        let day = document.getElementById("dob-day").value;
        console.log(day);
        let month = document.getElementById("dob-month").value;
        console.log(month);
        let year = document.getElementById("dob-year").value;
        console.log(year);

        // calculate and display age

        if (m >= month && d >= day) {
            age = y - year;
        } else {
            age = y - year -1;
        }
        alert("Dear visitor, your age is " + age);
    })

})();
