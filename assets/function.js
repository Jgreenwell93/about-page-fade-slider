let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let interval = setInterval(nextSlide, 4000);

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

// Dot click event
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(interval); // Stop auto-play on manual selection
    showSlide(parseInt(dot.dataset.slide));
    interval = setInterval(nextSlide, 4000); // Restart auto-play
  });
});
