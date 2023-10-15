const sideBarIcon = document.querySelector(".fa-bars");
const sideBatCloseIcon = document.querySelector(".fa-xmark");

sideBarIcon.addEventListener("click", () => {
  const sideMainMenu = document.querySelector(".side-main-menu");
  sideMainMenu.classList.add("side-main-menu-show");
});

sideBatCloseIcon.addEventListener("click", () => {
  const sideMainMenu = document.querySelector(".side-main-menu");
  sideMainMenu.classList.add("side-main-menu-hide");
});
