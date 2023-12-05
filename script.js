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


// carousel section
  function showSlide(index) {
    slides.forEach((slide, i) => {
      const opacity = i === index ? 1 : 0; 
      slide.style.transform = `translateX(${(i - index) * 30}%)`;
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


// product section
const productSection = document.getElementById("product-section");
    const productContainer = document.getElementById("product-container");

    const createProduct = ({ id, imgSrc, name, price }) => {
      const productContainer = document.createElement("div");
      productContainer.className = "product-container";

      const collapseBtn = document.createElement("button");
      collapseBtn.className = "product-btn";
      collapseBtn.id = `collapse-btn-${id}`;
      collapseBtn.innerHTML = `<img src="${imgSrc}" alt="${name}" />`;

      const productText = document.createElement("div");
      productText.className = "product-text";
      productText.innerHTML = `<button class="product-btn" id="collapse-text-${id}">${name}</button><p>${price}</p>`;

      productContainer.appendChild(collapseBtn);
      productContainer.appendChild(productText);

      return productContainer;
    };

    const createCollapseContent = ({ id, imgSrc, name, price }) => {
      const collapseContent = document.createElement("div");
      collapseContent.className = "collapse-content";
      collapseContent.id = `collapse-content-${id}`;

      const closeButton = document.createElement("button");
      closeButton.className = "close-btn"; 
      closeButton.id = `close-btn-${id}`;
      closeButton.textContent = "x";

      const collapseImage = document.createElement("div");
      collapseImage.className = "collapse-image";
      collapseImage.innerHTML = `<img src="${imgSrc}" alt="${name}" />`;

      const productInfo = document.createElement("div");
      productInfo.className = "product-info";
      productInfo.innerHTML = `<h3>${name}</h3><label for="sizing">Size</label><select id="sizing-${id}" required><option value="">--Select a size--</option><option value="small">S</option><option value="medium">M</option><option value="large">L</option><option value="extra-large">XL</option></select><p>Color: Black</p><p>Price: ${price}</p><button class="add-to-cart">Add to Cart</button>`;

      collapseContent.appendChild(closeButton);
      collapseContent.appendChild(collapseImage);
      collapseContent.appendChild(productInfo);

      return collapseContent;
    };

    // add products here
    const productsData = [
      { id: 1, imgSrc: "./images/black-t-shirt.webp", name: "Black T-Shirt", price: "$1.00" },
      { id: 2, imgSrc: "./images/white-t-shirt.webp", name: "White T-Shirt", price: "$1.00" },
      { id: 3, imgSrc: "./images/black-hoodie.webp", name: "Black Hoodie", price: "$1.00" },
      { id: 4, imgSrc: "./images/white-hoodie.webp", name: "White Hoodie", price: "$1.00"},
      { id: 5, imgSrc: "./images/black-sweatshirt.webp", name: "Black Sweatshirt", price: "$1.00" },
      { id: 6, imgSrc: "./images/white-sweatshirt.webp", name: "White Sweatshirt", price: "$1.00"},
      { id: 7, imgSrc: "./images/black-jacket.webp", name: "Black Jacket", price: "$1.00" },
      { id: 8, imgSrc: "./images/white-jacket.webp", name: "White Jacket", price: "$1.00"},

    ];

    productsData.forEach((productData) => {
      const product = createProduct(productData);
      const collapseContent = createCollapseContent(productData);
    
      productSection.appendChild(product);
      productSection.appendChild(collapseContent);
    
      const collapseBtn = document.getElementById(`collapse-btn-${productData.id}`);
      const closeBtn = document.getElementById(`close-btn-${productData.id}`);
    
      collapseBtn.addEventListener("click", () => toggleCollapse(productData.id));
      closeBtn.addEventListener("click", () => closePopup(productData.id));
    });

    function toggleCollapse(id) {
      const collapseContent = document.getElementById(`collapse-content-${id}`);
      collapseContent.style.display = collapseContent.style.display === "none" ? "flex" : "none";
    }

    function closePopup(id) {
      const collapseContent = document.getElementById(`collapse-content-${id}`);
      collapseContent.style.display = "none";
    }

function showOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "block";
}

function hideOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

function toggleCollapse(id) {
  const collapseContent = document.getElementById(`collapse-content-${id}`);
  collapseContent.style.display = collapseContent.style.display === "none" ? "flex" : "none";

  if (collapseContent.style.display === "flex") {
    showOverlay();
  } else {
    hideOverlay();
  }
}

function closePopup(id) {
  const collapseContent = document.getElementById(`collapse-content-${id}`);
  collapseContent.style.display = "none";

  hideOverlay();
}

const overlay = document.getElementById("overlay");

overlay.addEventListener("click", () => {
  const openCollapseContent = document.querySelector(".collapse-content[style='display: flex;']");
  if (openCollapseContent) {
    const productId = openCollapseContent.id.split("-")[2];
    closePopup(productId);
  }
});

function showOverlay() {
  overlay.style.display = "block";
}

function hideOverlay() {
  overlay.style.display = "none";
}

function toggleCollapse(id) {
  const collapseContent = document.getElementById(`collapse-content-${id}`);

  collapseContent.style.display = collapseContent.style.display === "none" ? "flex" : "none";
  if (collapseContent.style.display === "flex") {
    showOverlay();
  } else {
    hideOverlay();
  }
}

function closePopup(id) {
  const collapseContent = document.getElementById(`collapse-content-${id}`);
  collapseContent.style.display = "none";

  hideOverlay();
}






// Calculate the days left until the project is due
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
