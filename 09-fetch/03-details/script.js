/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.querySelector("#run").addEventListener("click", () => {

            let hero_id = document.getElementById("hero-id").value;


            if (0 < hero_id < 6) {

                async function fetchHeroes() {

                    let response = await fetch('http://localhost:63342/JavaScript-exercises/_shared/api.json');
                    let heroData = await response.json();
                    let heroArr = heroData.heroes;
                    console.log(heroArr);

                    //let hero = heroData.heroes[hero_id - 1];
                    //better to use array find() method, or loop through the array and pick the element
                    //where element.id === hero_id

                    function findHero(hero) {  //Array of objects, so pass parameter for the elements in the funcion!!!
                        return hero.id === parseInt(hero_id);
                    }

                    let hero = heroArr.find(findHero);
                    console.log(hero);


                    let target = document.getElementById("target");
                    let template = document.getElementById("tpl-hero");
                    let content = template.content.cloneNode(true);

                    content.querySelector(".name").innerHTML = hero.name;
                    content.querySelector(".alter-ego").innerHTML = hero.alterEgo;
                    content.querySelector(".powers").innerHTML = hero.abilities;

                    target.appendChild(content);

                }

                fetchHeroes();

            } else {
                alert(`There is no hero with id ${hero_id}`);
            }
        }

    )

})();
