const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide-item');
let currentIndex = 0;

function moveToNextSlide() {
    // Remove the first slide and append a new one
    slideContainer.appendChild(slides[currentIndex]);
    currentIndex = (currentIndex + 1) % slides.length;
}

function moveToPrevSlide() {
    // Add the last slide to the beginning of the container
    slideContainer.prepend(slides[currentIndex]);
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
}

// Set up event listeners for the buttons
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPrevSlide);
