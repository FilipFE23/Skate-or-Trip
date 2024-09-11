import { getProducts } from "./fetch.js";




let searchForm = document.getElementById("searchForm");
let searchContainer = document.getElementById("search-container");
let formBtn = document.getElementById("formBtn");
let input = document.getElementById("searchInput");


let menuMen = document.getElementById("men-menu");
let menuWomen = document.getElementById("women-menu");
let menuKids = document.getElementById("kids-menu");

let container = document.getElementById("main-container");
let counter = document.getElementById("number");
let dropDown = document.getElementById("dropdown");
let close = document.getElementById("close");
let menuDiv = document.getElementById("menu-div");

let count = 0;


function searchBoxes(title, desc, image, price) {
  let box = document.createElement("div");
  box.classList.add("box");
  let h2El = document.createElement("h2");
  let pEl = document.createElement("p");
  let imgEl = document.createElement("img");
  let priceEl = document.createElement("strong");
  h2El.classList.add("child");
  pEl.classList.add("child");
  imgEl.classList.add("child");
  priceEl.classList.add("child");
  h2El.innerText = title;
  pEl.innerText = desc;
  imgEl.src = image;
  priceEl.innerText = price;

  let wishlistButtonEl = document.createElement("button");
  wishlistButtonEl.innerText = 'add to wishlist';

  let addButton = document.createElement("button");
  addButton.innerHTML = "Yes";

  addButton.addEventListener("click", () => {
    purchaseMessage.style.display = "none";
  });

  let addNotButton = document.createElement("button");
  addNotButton.innerHTML = "No";

  addNotButton.addEventListener("click", () => {
    purchaseMessage.style.display = "none";
  });

  let buyButton = document.createElement("button");
  buyButton.innerText = "add to cart";

  let regretBuyButton = document.createElement("button");
  regretBuyButton.innerText = "remove from cart";
  let purchaseMessage = document.createElement("div");

  buyButton.classList.add("buy");
  purchaseMessage.classList.add("purchase");
  regretBuyButton.classList.add("buy");
  regretBuyButton.style.display = "none";

  buyButton.addEventListener("click", () => {
    count++;
    counter.innerText = count;
    buyButton.disabled = true;
    regretBuyButton.style.display = "block";
    timedMessage(title, image);
  });
  function timedMessage(addedImage) {
    let otherProducts;
    getProducts().then(data => {
      console.log("Fetched Data:", data);

      // Convert the object to an array of values (products)
      const productsArray = Object.values(data);

      // Filter out products based on the img_url value
      otherProducts = productsArray.filter(product => product.img_url !== addedImage);

      // Log each product's price after filtering
      otherProducts.forEach(product => {
        console.log("Price:", product.price);
      });

      // Select a random product from the filtered products
      let randomProduct = otherProducts[Math.floor(Math.random() * otherProducts.length)];

      // Clear previous message
      purchaseMessage.innerHTML = "";

      // Create and add elements for the product message
      let addQuestion = document.createElement("p");
      addQuestion.innerText = "Do you want to add this product?";

      let imgEl = document.createElement("img");
      imgEl.classList.add("popup-img");
      imgEl.src = randomProduct.img_url;  // Use img_url for the image source

      let h2El = document.createElement("h2");
      h2El.innerHTML = randomProduct.name;

      // Append the elements to the message container
      purchaseMessage.append(imgEl);
      purchaseMessage.append(h2El);
      purchaseMessage.append(addQuestion);

      purchaseMessage.append(addButton);
      purchaseMessage.append(addNotButton);

      // Display the message
      purchaseMessage.style.display = "block";
    });
  }

  regretBuyButton.addEventListener("click", () => {
    if (count > 0) {
      count--;
      counter.innerText = count;
      regretBuyButton.style.display = "none";
      buyButton.disabled = false;
    }
  });

  box.append(
    imgEl,
    h2El,
    pEl,
    priceEl,
    wishlistButtonEl,
    buyButton,
    regretBuyButton,
    purchaseMessage
  );
  searchContainer.append(box);

}


searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchContainer.innerHTML = " ";
  getProducts().then(data => {
    console.log(data);
    for (const dat in data) {
      console.log(data[dat].price);

      searchBoxes(
        data[dat].productname,
        data[dat].description,
        data[dat].img_url,
        data[dat].price
      )

    }



  })

})