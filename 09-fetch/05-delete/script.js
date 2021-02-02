/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.querySelector("#run").addEventListener("click", () => {

        let hero_id = document.getElementById("hero-id").value;
        console.log(hero_id);

        async function fetchHeroes() {

            let response = await fetch('http://localhost:63342/JavaScript-exercises/_shared/api.json');
            let heroData = await response.json();
            let heroArr = heroData.heroes;
            console.log(heroArr);

            function findHero(hero) {
                return hero.id === parseInt(hero_id);
            }

            let hero = heroArr.find(findHero);
            console.log(hero);
            let index = heroArr.indexOf(hero);
            console.log(index);
            delete heroArr[index];
            console.table(heroArr);
            console.log(heroArr);


        }

        fetchHeroes();

    })


})();
