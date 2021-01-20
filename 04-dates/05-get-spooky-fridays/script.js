/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
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

        // Define start of year
        let startDate = new Date(year, 0);

        // Array of months to be able to display the month name instead of the number returned by .getMonth()
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        // Loop through the 12 months of the year
        for (let i = 0; i <= 11; i++) {

            // Set de day of the month to be veried to 13
            startDate.setFullYear(year, i, 13);
            //console.log(startDate);

            // Verify if this day is a Friday (5th day in the .getDay() Method
            if (startDate.getDay() == 5) {
                let month = startDate.getMonth();
                //console.log(month);
                alert(months[month]);
            }
        }
    })
})();
