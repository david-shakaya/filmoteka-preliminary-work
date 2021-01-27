const add = document.querySelector('.add');
const listGenres = [
{ id: 28, name: "Action" },
{id: 12, name: "Adventure"},
{id: 16, name: "Animation"},
{id: 35, name: "Comedy"},
{id: 80, name: "Crime"},
{id: 99, name: "Documentary"},
{id: 18, name: "Drama"},
{id: 10751, name: "Family"},
{id: 14, name: "Fantasy"},
{id: 36, name: "History"},
{id: 27, name: "Horror"},
{id: 10402, name: "Music"},
{id: 9648, name: "Mystery"},
{id: 10749, name: "Romance"},
{id: 878, name: "Science Fiction"},
{id: 10770, name: "TV Movie"},
{id: 53, name: "Thriller"},
{id: 10752, name: "War"},
{id: 37, name: "Western"}]


const startingUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'
const pageNumber = 2
const query = 'p'
const API = `https://api.themoviedb.org/3/search/movie?api_key=ffddee44025dd24685ea61d637d56d24&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`
fetch(API)
.then(res => res.json())
    .then(data => {
       makeNewObjectFilms(data)
    })   

const makeNewObjectFilms = function (data) {
  const newData = data.results.map((item) => {
    let curentGenres = [];
    item.genre_ids.map((id) => {
      const found = listGenres.find((item) => item.id === id);
      curentGenres.push(found.name);
    });
    if (curentGenres.length >= 3) {
      const normalizedGenres = curentGenres.slice(0, 2);
      normalizedGenres.push("Other");
      item.genre_ids = normalizedGenres.join(', ')
      item.release_date = item.release_date.slice(0, 4);
    } else {
      item.genre_ids = curentGenres.join(', ');
      if (item.release_date) item.release_date = item.release_date.slice(0, 4);
      }

      console.log(item);
      addMarkup(item)
    //   return item;
    //   console.log(newGenres);
    //   newGenres.forEach(el => console.log(el))
  });
 
};

function addMarkup(item) {
    return add.insertAdjacentHTML('beforeend', `<div  class="movie-card-wrapper">
        <div class="movie-card">
        <img src="${startingUrl}${item.poster_path}" alt="" width="150px"/>
        <h3>${item.original_title}</h3> 
        <p class="js-genre" >${item.genre_ids}| ${item.release_date}  ${item.vote_average}</p>
        </div>
        </div>`) 

}

/* -----Pagination -------- */


