const dropdownButton = document.getElementById("dropdown-button");
const dropdownMenu = document.getElementById("dropdown-menu");

dropdownButton.addEventListener("click", () => {
    if (dropdownMenu.classList.contains("hidden")) {
        dropdownMenu.classList.remove("hidden");
    } else {
        dropdownMenu.classList.add("hidden");
    }
});

const API_KEY = "api_key=8072e9749243eb343c24d5a9cc65b8b4";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

getMovies(API_URL);

function getMovies(url) {
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        });
}
