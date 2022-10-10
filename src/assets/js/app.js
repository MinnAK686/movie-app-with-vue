"use strict";

window.addEventListener("scroll", () => {
    let navbar = document.querySelector(".navbar");
    if(window.scrollY > 45) {
        navbar.classList.add("navbarDark");
    }else {
        navbar.classList.remove("navbarDark");
    }
})

let url = {
    base_url: "https://api.themoviedb.org/3/discover/movie?",
    api_key: "api_key=54a9c5975cd351423024bef5cd11e304"
}
let discover = "&language=en-US&sort_by=popularity.desc";

let popular = url.base_url+url.api_key+discover;

let fetchMovies = async (path) => {
    let response = await fetch(path);
    let datas = await response.json();
    return datas;
}

let showMovie = (datas) => {
    let data = datas.results;
    data.forEach(movie => {
        console.log(movie.title)
    })
}

fetchMovies(popular).then(datas => {
    showMovie(datas);
});