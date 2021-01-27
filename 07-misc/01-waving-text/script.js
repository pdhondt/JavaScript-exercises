/* becode/javascript
 *
 * /07-misc/01
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var sentence = document.querySelector("#target").innerHTML;
    var sentence_wave = "";
    var n = 6;
    console.log(sentence.length);

    for (var i = 0; i < 5; i++) {
        n--;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }
    for (var i = 5; i < 10; i++) {
        n++;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }

    for (var i = 10; i < 15; i++) {
        n--;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }
    for (var i = 15; i < 20; i++) {
        n++;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }

    for (var i = 20; i < 25; i++) {
        n--;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }
    for (var i = 25; i < 30; i++) {
        n++;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }

    for (var i = 30; i < 35; i++) {
        n--;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }
    for (var i = 35; i < 40; i++) {
        n++;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }

    for (var i = 40; i < 45; i++) {
        n--;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }
    for (var i = 45; i < 50; i++) {
        n++;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }

    for (var i = 50; i < 55; i++) {
        n--;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }
    for (var i = 55; i < 60; i++) {
        n++;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }

    for (var i = 60; i < 65; i++) {
        n--;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }
    for (var i = 65; i < 70; i++) {
        n++;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }

    for (var i = 70; i < 75; i++) {
        n--;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }
    for (var i = 75; i < 80; i++) {
        n++;
        sentence_wave += sentence.charAt(i).fontsize(n);
    }

    document.querySelector("#target").innerHTML = sentence_wave;

})();
