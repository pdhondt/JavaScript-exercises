/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.querySelector("#run").addEventListener("click", () => {

        window.lib.getPosts()
            .then(articles => {
                articles.forEach(article => {
                    window.lib.getComments(article.id)
                        .then(comments => {
                            article.comment = comments;
                            console.table(articles)})
            })})

            // you have to return the resolve of the 2nd promise function, without return you are just calling it
            //.then( comments => { console.log(comments)})

    })
})();