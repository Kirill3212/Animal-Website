// Achievements Section
const prevAchievementBtn = document.querySelector(".ach-prev-btn");
const nextAchievementBtn = document.querySelector(".ach-next-btn");
const achievementsSlidesImg = Array.from(
  document.querySelectorAll(".achievements-column")
);
console.log(achievementsSlidesImg);

achievementsSlidesImg.forEach((slideImg, index) => {
  slideImg.addEventListener("click", () => {
    currentAchievementSlide(index + 1);
  });
});

let slideAchievementIndex = 1;
showAchievementSlides(slideAchievementIndex);

prevAchievementBtn.addEventListener("click", function () {
  slideAchievementIndex -= 1;
  showAchievementSlides(slideAchievementIndex);
});

nextAchievementBtn.addEventListener("click", function () {
  slideAchievementIndex += 1;
  showAchievementSlides(slideAchievementIndex);
});

function currentAchievementSlide(n) {
  showAchievementSlides((slideAchievementIndex = n));
}

function showAchievementSlides(n) {
  let i;
  let achievementSlides = document.getElementsByClassName("achievements-slide");
  let achievementDots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  if (n > achievementSlides.length) {
    slideAchievementIndex = 1;
  }

  if (n < 1) {
    slideAchievementIndex = achievementSlides.length;
  }

  for (i = 0; i < achievementSlides.length; i++) {
    achievementSlides[i].style.display = "none";
  }

  for (i = 0; i < achievementDots.length; i++) {
    achievementDots[i].className = achievementDots[i].className.replace(
      " active",
      ""
    );
  }

  achievementSlides[slideAchievementIndex - 1].style.display = "block";
  achievementDots[slideAchievementIndex - 1].className += " active";
  captionText.innerHTML = achievementDots[slideAchievementIndex - 1].alt;
}

// Gallery
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

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
