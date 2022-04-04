const openModalButton = document.querySelector(".open-modal-button");
const closeModalButton = document.querySelector(".close-modal-button");
const nextPageButton = document.querySelector(".next-page-button");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

openModalButton.addEventListener("click", () => {
    modal.classList.add("active");
    overlay.classList.add("active");
});

closeModalButton.addEventListener("click", () => {
    console.log("button clicked");
    overlay.classList.remove("active");
    modal.classList.remove("active");
});
overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active");
    modals.forEach((modal) => {
        overlay.classList.remove("active");
        modal.classList.remove("active");
    });
});

nextPageButton.addEventListener("click", () => {
    window.location = "./profile.html";
});
