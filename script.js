const slides = document.querySelector('.slides');
let index = 0;
const totalSlides = document.querySelectorAll('.slides img').length;

function autoSlide() {
    index = (index + 1) % 2; // Loop through slides
    slides.style.transform = `translateX(-${index * 100}%)`; // Slide to the next image
}

// Automatically slide every 3 seconds
setInterval(autoSlide, 3000);

// Pause slider on hover
const sliderContainer = document.querySelector('.slider-container');
sliderContainer.addEventListener('mouseover', () => clearInterval(slideInterval));
sliderContainer.addEventListener('mouseout', () => {
    slideInterval = setInterval(autoSlide, 3000);
});
