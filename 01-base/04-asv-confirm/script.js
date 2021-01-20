/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

do {

    let age = prompt('What is your age?');
    let gender = prompt('What is your gender?');
    let town = prompt('In what town do you live?');

    var result = confirm('Hi. Your age is ' + age + ', your gender is ' + gender + ', and you live in ' + town + '. Is this correct?');
}
while (result == false);





