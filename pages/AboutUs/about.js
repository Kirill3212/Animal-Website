const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
console.log(prevBtn, nextBtn);

let slideIndex = 1;
showSlides(slideIndex);

prevBtn.addEventListener("click", function () {
  slideIndex -= 1;
  showSlides(slideIndex);
});
nextBtn.addEventListener("click", function () {
  slideIndex += 1;
  showSlides(slideIndex);
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
