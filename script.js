//
//  JS File
//  YOU CAN REMOVE ALL OF THIS CODE AND START FRESH
//

//
// Variables
//

// Constants
const appID = "app";
const headingText = "Develop. Preview. Ship.";
const headingTextIcon = "🚀";
const projectDueDate = "8 December 2023 11:59";

// Variables
let countdownDate = new Date(projectDueDate);

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("image-carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const slides = document.querySelectorAll(".carousel-slide");

  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      const opacity = i === index ? 1 : 0; 
      slide.style.transform = `translateX(${(i - index) * 100}%)`;
      slide.style.opacity = opacity;
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  showSlide(currentIndex);
});

let closeButton = document.getElementById("close-btn-1");
closeButton.addEventListener("click", closePopup);

function closePopup() {
  let collapseContent = document.getElementById("collapse-content-1");

  collapseContent.style.display = "none";
}

let collapseButton = document.getElementById("collapse-btn-1");
let collapseContent = document.getElementById("collapse-content-1");

collapseButton.addEventListener("click", function() {
  collapseContent.classList.toggle("active");

  if (collapseContent.style.display === "flex") {
    collapseContent.style.display = "none";
  } else {
    collapseContent.style.display = "flex";
  }
});

let collapseText = document.getElementById("collapse-text-1");

collapseText.addEventListener("click", function() {
  collapseContent.classList.toggle("active");

  if (collapseContent.style.display === "flex") {
    collapseContent.style.display = "none";
  } else {
    collapseContent.style.display = "flex";
  }
});

function calculateDaysLeft(countdownDate) {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  console.log(countdown);

  const difference = (countdown - now) / 1000;


  // Countdown passed already
  if (difference < 1) {
    return null;
  }


  const days = Math.floor(difference / (60 * 60 * 24));

  return days;
}

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  const daysLeft = calculateDaysLeft(countdownDate);
  let headingTextCalculated = headingText;

  if (daysLeft > 1) {
    headingTextCalculated = headingTextCalculated.concat(
      " In ",
      daysLeft.toString(),
      " days "
    );
  }else if (daysLeft === 1) {
    headingTextCalculated = headingTextCalculated.concat(
      " Tomorrow"
    );
  }

  h1.textContent = headingTextCalculated.concat(headingTextIcon);
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//

inititialise();
