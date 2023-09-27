const navBarLinks = Array.from(
  document.querySelectorAll(".desktop-main-menu ul li a")
);

navBarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const currentLink = link.setAttribute("active");
    currentLink.style.color = "red";

    // if (link.classList.contains("active")) {
    //   link.classList.remove("active");
    //   console.log("removed");
    // }
  });
});
