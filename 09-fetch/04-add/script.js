/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.querySelector("#run").addEventListener("click", () => {

        let hero_name = document.getElementById("hero-name").value;
        let hero_alter_ego = document.getElementById("hero-alter-ego").value;
        let hero_powers_input = document.getElementById("hero-powers").value;
        let hero_powers = hero_powers_input.split(",");

        if (hero_name === "" || hero_alter_ego === "" || hero_powers_input === "") {
            alert("Please fill in every field!");
        } else {
            console.log(hero_name);
            console.log(hero_alter_ego);
            console.log(hero_powers);

            async function fetchHeroes() {

                let response = await fetch('http://localhost:63342/JavaScript-exercises/_shared/api.json');
                let heroData = await response.json();
                let heroArr = heroData.heroes;
                console.log(heroArr);

                let new_hero_id = heroArr.length;

                let new_hero = {
                    id: new_hero_id,
                    name: hero_name,
                    alterEgo: hero_alter_ego,
                    abilities: hero_powers
                }

                heroArr.push(new_hero);
                console.log(heroArr);

            }
            fetchHeroes();
        }


    })
})();
