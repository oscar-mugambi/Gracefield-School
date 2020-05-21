const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

// const slideWidth = slides[0].getBoundingClientRect().width;
const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth);

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

let newWidth;

const width = window.addEventListener("load", (event) => {
  let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  let height = width / 1.69;
  newWidth = width;
  console.log(newWidth);
  return width;
});

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  // track.style.transform = "translateX(-" + 590 + "  )";
  track.style.transform = "translateX(-" + targetSlide.style.left + "  )";
  console.log(targetSlide.style.left);
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
  // console.log(targetSlide.style.left);
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const hideShowArrows = (slides, prevbutton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
};

prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);
  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

//click on right button

nextButton.addEventListener("click", (e) => {
  //move the slide
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextSlide);
});

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];
  console.log(targetIndex);

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});