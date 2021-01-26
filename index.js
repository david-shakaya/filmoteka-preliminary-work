const add = document.querySelector('.add');


const startingUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'
const pageNumber = 1
const query = 'usa'
const API = `https://api.themoviedb.org/3/search/movie?api_key=ffddee44025dd24685ea61d637d56d24&language=en-US&query=${query}&page=${pageNumber}&include_adult=false`
fetch(API)
.then(res => res.json())
.then(data => {
    data.results.forEach(el => {
        console.log(el);
        add.insertAdjacentHTML('beforeend',`<img src="${startingUrl}${el.poster_path}" alt="">`)
    });
    })
