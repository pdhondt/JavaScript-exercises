/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.querySelector("#run").addEventListener("click", () => {

        async function fetchHeroes() {
            let response = await fetch('http://localhost:63342/JavaScript-exercises/_shared/api.json');
            let heroData = await response.json();
            console.table(heroData);

            //for (let hero of heroData.heroes) {
            heroData.heroes.forEach(hero => {
                let heroName = hero.name;
                let heroAlterEgo = hero.alterEgo;
                console.log(`This hero is ${heroName}, his alter ego is ${heroAlterEgo}`);
            })
        }
        fetchHeroes();

    })

})();
