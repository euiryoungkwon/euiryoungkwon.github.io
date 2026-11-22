const slides = document.querySelectorAll(".slideshow img");
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

if (slides.length > 0) {
  showSlide(currentIndex);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 10000);
}