let recentlyWatchedList = document.getElementById("recently-watched-list")
const BASE_URL = "./Images/Movie Poster/"
const recentlyWatchedMoviesImage = ["WildCard.jpg", "BreakingBad.jpg", "DawnOfJustice.jpg", "DoctorStrange.jpg", "ThorRagnarok.jpg", "SleepyHollow.jpg", "JohnWick.jpg"]

const dropdownButton = document.getElementById("dropdown-button")
const dropdownMenu = document.getElementById("dropdown-menu")

dropdownButton.addEventListener("click", () => {
    if (dropdownMenu.classList.contains("hidden")) {
        dropdownMenu.classList.remove("hidden")
    } else {
        dropdownMenu.classList.add("hidden")
    }
})


recentlyWatchedMoviesImage.forEach((image) => {
    var myDiv = document.createElement("div")
    myDiv.classList.add("recently-watched")
    recentlyWatchedList.appendChild(myDiv)
    myDiv.innerHTML = `<img src="${BASE_URL + image}" alt="" class="recently-watched-image" />`
})

recentlyWatchedList.addEventListener("mouseover", addMyBorder)
recentlyWatchedList.addEventListener("mouseout", removeMyBorder)
function addMyBorder(e) {
    if (e.target !== e.currentTarget) {
        let parent = e.target.parentElement
        parent.classList.add("borderme")
    }
}
function removeMyBorder(e) {
    if (e.target !== e.currentTarget) {
        let parent = e.target.parentElement
        parent.classList.remove("borderme")
    }
}

/*
"DOMContentLoaded"
This event is fired when the initial HTML document has been completely loaded and parsed, without waiting for style sheets, images, and subframes to finish loading. At this stage you could programmatically optimize loading of images and CSS based on user device or bandwidth speed.

Executes after DOM is loaded (before images and CSS):

// document.addEventListener("DOMContentLoaded", () => {
//     const recentlyWatchedMovies = document.getElementsByClassName("recently-watched");
// });

Note: Synchronous JavaScript pauses parsing of the DOM. If you want the DOM to get parsed as fast as possible after the user requested the page, you could turn your JavaScript asynchronous and optimize loading of style sheets.

"load"
A very different event, load, should only be used to detect a fully-loaded page. It is an incredibly popular mistake to use load where DOMContentLoaded would be much more appropriate, so be cautious.

Executes after everything is loaded and parsed:

window.addEventListener("load", function(){
    // ....
});


*/
