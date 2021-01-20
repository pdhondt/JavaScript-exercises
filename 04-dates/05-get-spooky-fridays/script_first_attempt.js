/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script_first_attempt.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        // Retrieve the year from the input field
        let year = document.getElementById("year").value;

        // Set the next year
        let next_year = Number(year) + 1;



        // Define start of year
        let startDate = new Date(year, 0);
        console.log(startDate);

        // Define start of next year
        let endDate = new Date(next_year, 0)
        console.log(endDate);

        while (startDate < endDate) {

            let dayOfMonth = startDate.getDate();
            console.log(dayOfMonth);
            let dayOfWeek = startDate.getDay();

            if ((dayOfMonth == 13) && (dayOfWeek == 5)) {

            }
            else {

            }
            startDate = startDate.setDate(startDate.getDate()+1);
        }
    })
})();
