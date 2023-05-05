const slider = document.querySelector('.slider');
const wrapper = slider.querySelector('.slider-wrapper');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');

let slideIndex = 0;

function slideTo(index) {
  wrapper.style.transform = `translateX(-${index * 100}%)`;
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
    slideTo(slideIndex);
  }
}

function nextSlide() {
  if (slideIndex < wrapper.children.length - 1) {
    slideIndex++;
    slideTo(slideIndex);
  }
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
