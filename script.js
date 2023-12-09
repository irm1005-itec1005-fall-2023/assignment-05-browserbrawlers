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
  document.querySelectorAll('.collapse-content').forEach(content => {
    content.style.display = 'none';
  });
  

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
const shirtsSection = document.getElementById("shirts-section");
const hoodiesSection = document.getElementById("hoodies-section");
const pantsSection = document.getElementById("pants-section");

const createProduct = ({ id, imgSrc, name, price }) => {
  const productContainer = document.createElement("div");
  productContainer.className = "product-container";

  const collapseBtn = document.createElement("button");
  collapseBtn.className = "product-btn";
  collapseBtn.id = `collapse-btn-${id}`;
  collapseBtn.innerHTML = `<img src="${imgSrc}" alt="${name}" />`;

  const productText = document.createElement("div");
  productText.className = "product-text";
  productText.innerHTML = `<h3 class="product-btn" id="collapse-text-${id}">${name}</h3><p>${price}</p>`;

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
  productInfo.innerHTML = `<h4>${name}</h4><label for="sizing">Size</label><select id="sizing-${id}" required><option value="">--Select a size--</option><option value="small">S</option><option value="medium">M</option><option value="large">L</option><option value="extra-large">XL</option></select><p>Color: Black</p><p>Price: ${price}</p><button class="add-to-cart">Add to Cart</button>`;

  collapseContent.appendChild(closeButton);
  collapseContent.appendChild(collapseImage);
  collapseContent.appendChild(productInfo);

  return collapseContent;
};

// add products here
const productsData = [
  { id: 1, imgSrc: "./images/black-t-shirt.webp", name: "Black T-Shirt", price: "$1.00", category: "shirt" },
  { id: 2, imgSrc: "./images/white-t-shirt.webp", name: "White T-Shirt", price: "$1.00", category: "shirt" },
  { id: 3, imgSrc: "./images/black-hoodie.webp", name: "Black Hoodie", price: "$1.00", category: "hoodie" },
  { id: 4, imgSrc: "./images/white-hoodie.webp", name: "White Hoodie", price: "$1.00", category: "hoodie" },
  { id: 5, imgSrc: "./images/black-sweatshirt.webp", name: "Black Sweatshirt", price: "$1.00", category: "shirt" },
  { id: 6, imgSrc: "./images/white-sweatshirt.webp", name: "White Sweatshirt", price: "$1.00", category: "shirt" },
  { id: 7, imgSrc: "./images/navy-hoodie.webp", name: "Navy Blue Hoodie", price: "$1.00", category: "hoodie" },
  { id: 8, imgSrc: "./images/blue-hoodie.webp", name: "Blue Hoodie", price: "$1.00", category: "hoodie" },
  { id: 9, imgSrc: "./images/jeans.webp", name: "Jeans", price: "$1.00", category: "pants" },
  { id: 10, imgSrc: "./images/tan-hoodie.webp", name: "Tan Hoodie", price: "$1.00", category: "hoodie" },
  { id: 11, imgSrc: "./images/orange-hoodie.webp", name: "Orange Hoodie", price: "$1.00", category: "hoodie" },
  { id: 12, imgSrc: "./images/orange-t-shirt.webp", name: "Orange T-Shirt", price: "$1.00", category: "shirt" },
  { id: 13, imgSrc: "./images/black-jeans.webp", name: "Black Jeans", price: "$1.00", category: "pants" },
  { id: 14, imgSrc: "./images/black-sweatpants.webp", name: "Black Sweatpants", price: "$1.00", category: "pants" },
  { id: 15, imgSrc: "./images/gray-sweatpants.webp", name: "Gray Sweatpants", price: "$1.00", category: "pants" },
  { id: 16, imgSrc: "./images/red-sweatpants.webp", name: "Red Sweatpants", price: "$1.00", category: "pants" },
 
];

productsData.forEach((productData) => {
  const product = createProduct(productData);
  const collapseContent = createCollapseContent(productData);

  const productSection = productData.category === "shirt" ? shirtsSection : (productData.category === "hoodie" ? hoodiesSection : pantsSection);
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
