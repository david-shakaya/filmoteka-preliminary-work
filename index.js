const add = document.querySelector('.add');

let genres;

let genreId = [];
const startingUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'
const pageNumber = 1
const query = 'usa'
const API = `https://api.themoviedb.org/3/search/movie?api_key=ffddee44025dd24685ea61d637d56d24&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`
fetch(API)
.then(res => res.json())
    .then(data => {
    data.results.forEach(el => {
        // console.log(el.genre_ids);
        genreId.push(el.genre_ids)

        add.insertAdjacentHTML('beforeend', `<div class="movie-card">
        <img src="${startingUrl}${el.poster_path}" alt=""/>
        <h3>${el.original_title}</h3> 
        </div>`) 
        console.log(el.genre_ids);
    })
        const s = genreId.find(el => {
            console.log('el',el);
           getGenres(el)
        })

        console.log('s', s);
       
        // console.log(ganres);
})

function getGenres(id) {
   return  (fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=ffddee44025dd24685ea61d637d56d24')
        .then(res => res.json())
       .then(data => {
//            const text = document.querySelectorAll('.ganre')
//            text.forEach(el => {
//                el.textContent = `${data.genres.find(el => {
//                    if (el.id === genre_ids[0]) {
//                        return el.name
//                    }
//                })}
// `           })
           
           const div =document.querySelectorAll('.movie-card');
           genres = data.genres
        //    console.log(genres);

           const p = genres.forEach(el => { 
              if (el.id === id) {
                   console.log(el.name);
                  div.forEach(elem => {
                       elem.insertAdjacentHTML('beforeend', `<p>${el.name}</p>`)
                   })
               }
           })
           
 
             
          
          /* `<p>${data.genres[0].name}<p/>`  */
        }))
}

//  console.log(arr);
    // getGenres()