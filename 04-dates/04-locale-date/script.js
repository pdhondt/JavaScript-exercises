/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // Retrieve current date
    let date = new Date();
    // console.log(date);

    // Retrieve current year
    let y = date.getFullYear();
    // console.log(y);

    // Retrieve current month
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let m = months[date.getMonth()];
    // console.log(m);

    // Retrieve current day of the month (not of the week!)
    let d = date.getDate();
    // console.log(d);

    // Retrieve current day of the week
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let w = weekdays[date.getDay()];
    // console.log(w);

    // Retrieve current hours
    let hrs = date.getHours();
    // console.log(hrs);

    // Retrieve current minutes
    let mnts = date.getMinutes();
    //console.log(mnts);

    // Display current date and time
    let date_time = (w + " " + d + " " + m + " " + y + ", " + hrs + "h" + mnts);
    document.getElementById("target").innerHTML = date_time;

})();
