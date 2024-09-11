import { getProducts, getWishlist, postToWishlist } from "./fetch.js";


//////////////////////////// YASIR & André/////////////////////////////////////



let menuMen = document.getElementById("men-menu");
let menuWomen = document.getElementById("women-menu");
let menuKids = document.getElementById("kids-menu");

let container = document.getElementById("main-container");
let counter = document.getElementById("number");
let dropDown = document.getElementById("dropdown");
let close = document.getElementById("close");
let menuDiv = document.getElementById("menu-div");

let test = menuDiv.children[0];

dropDown.addEventListener("click", () => {
  dropDown.style.display = "none";
  close.style.display = "block";
  close.style.marginTop = "125px";

  for (let i = 8; i > 0; i--) {
    menuDiv.children[i].style.display = "block";
  }
});

close.addEventListener("click", () => {
  dropDown.style.display = "block";
  close.style.display = "none";
  for (let i = 8; i > 0; i--) {
    menuDiv.children[i].style.display = "none";
  }
});

let count = 0;


function boxes(title, desc, image, price) {
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
  container.append(box);

}


// function boxes(title, desc, image, price) {
//   let box = document.createElement("div");
//   box.classList.add("box");
//   let h2El = document.createElement("h2");
//   let pEl = document.createElement("p");
//   let imgEl = document.createElement("img");
//   let priceEl = document.createElement("strong");
//   h2El.classList.add("child");
//   pEl.classList.add("child");
//   imgEl.classList.add("child");
//   priceEl.classList.add("child");
//   h2El.innerText = title;
//   pEl.innerText = desc;
//   imgEl.src = image;
//   priceEl.innerText = price;

//   let wishlistButtonEl = document.createElement("button");
//   wishlistButtonEl.innerText = 'add to wishlist';

//   let addButton = document.createElement("button");
//   addButton.innerHTML = "Yes";

//   addButton.addEventListener("click", () => {
//     purchaseMessage.style.display = "none";
//   });

//   let addNotButton = document.createElement("button");
//   addNotButton.innerHTML = "No";

//   addNotButton.addEventListener("click", () => {
//     purchaseMessage.style.display = "none";
//   });

//   let buyButton = document.createElement("button");
//   buyButton.innerText = "add to cart";

//   let regretBuyButton = document.createElement("button");
//   regretBuyButton.innerText = "remove from cart";
//   let purchaseMessage = document.createElement("div");

//   buyButton.classList.add("buy");
//   purchaseMessage.classList.add("purchase");
//   regretBuyButton.classList.add("buy");
//   regretBuyButton.style.display = "none";

//   buyButton.addEventListener("click", () => {
//     count++;
//     counter.innerText = count;
//     buyButton.disabled = true;
//     regretBuyButton.style.display = "block";
//     timedMessage(title, image);
//   });

//   function timedMessage(addedImage) {
//     let otherProducts = inStock.filter((product) => product.img !== addedImage);

//     let randomProduct =
//       otherProducts[Math.floor(Math.random() * otherProducts.length)];

//     purchaseMessage.innerHTML = "";

//     let addQuestion = document.createElement("p");
//     addQuestion.innerText = "Do you want to add this product?";

//     let imgEl = document.createElement("img");
//     imgEl.classList.add("popup-img");
//     imgEl.src = randomProduct.img;

//     let h2El = document.createElement("h2");
//     h2El.innerHTML = randomProduct.name;

//     purchaseMessage.append(imgEl);
//     purchaseMessage.append(h2El);
//     purchaseMessage.append(addQuestion);

//     purchaseMessage.append(addButton);
//     purchaseMessage.append(addNotButton);

//     purchaseMessage.style.display = "block";
//   }

//   regretBuyButton.addEventListener("click", () => {
//     if (count > 0) {
//       count--;
//       counter.innerText = count;
//       regretBuyButton.style.display = "none";
//       buyButton.disabled = false;
//     }
//   });

//   box.append(
//     imgEl,
//     h2El,
//     pEl,
//     priceEl,
//     wishlistButtonEl,
//     buyButton,
//     regretBuyButton,
//     purchaseMessage
//   );
//   container.append(box);
// }

// let firstTitle = "Skateboard Pro Xtreme";
// let firstDescription = "The Skateboard Pro Xtreme is the ultimate skateboard designed for riders of all skill levels, from beginners to seasoned pros. Built with high-quality materials and engineered for superior performance, this skateboard is perfect for those looking to enhance their skills and enjoy a smooth ride.";
// let firstImage = "./images/Rip-N-Dip-Psychedelic-Complete-Skateboard-Multi-3.jpg";
// let firstPrice = "80$";

// let secondTitle = "Cruiser Skateboard Urban Glide";
// let secondDescription = "Meet the Cruiser Skateboard Urban Glide – your perfect companion for cruising the streets and commuting in style. Designed for a smooth, effortless ride, this cruiser skateboard is ideal for both beginners and experienced skaters looking for a versatile board that excels in both comfort and performance.";
// let secondImage = "./images/skateboard.jpg";
// let secondPrice = "90$";

///...

// let seveenthTitle = "Longboard Classic Wave Rider";
// let seveenthDescription = "Discover the freedom of surfing the streets with the Longboard Classic Wave Rider – the perfect board for downhill racing, carving, and long-distance cruising. Crafted for stability and smoothness, this longboard is ideal for both novice and experienced riders looking for an exhilarating ride.";
// let seveenthImage = "./images/krooked-skateboards-sebo-walker-waves-skateboard-deck-8-25-p46621-115949_medium.jpg";
// let seveenthPrice = "70$";

//bilderna bara för exempel

function displayStock(gender, item) {
  container.innerHTML = "";
  getProducts().then(data => {
    for (const dat in data) {
      if (
        (!gender || data[dat].gender === gender) &&
        (!item || data[dat].item === item)
      ) {
        boxes(
          data[dat].productname,
          data[dat].description,
          data[dat].img_url,
          data[dat].price
        )

      }
    }
  })
}

displayStock();

menuMen.addEventListener("click", () => {
  displayStock("man");
});
menuWomen.addEventListener("click", () => {
  displayStock("woman");
});
menuKids.addEventListener("click", () => {
  displayStock("kids");
});

// document.getElementById('men').addEventListener('click', () => {
//   displayStock('men');
// })
// document.getElementById('women').addEventListener('click', () => {
//   displayStock('women');
// })
// document.getElementById('kids').addEventListener('click', () => {
//   displayStock('kids');
// })

// for (let i = 0; i < 10; i++) {
//   if(inStock[i].category === 'skateboard'){
//     boxes(inStock[i].name, inStock[i].description, inStock[i].img, inStock[i].price);
//   }
// };

//////////////////////////// YASIR /////////////////////////////////////

//////////////////////////// Abdulla /////////////////////////////////////
const hoverTargets = document.querySelectorAll(".hover-target");
function createDiv(target) {
  const newDiv = document.createElement("div");
  const tshirtP = document.createElement("p");
  const jeansP = document.createElement("p");
  const sneakersP = document.createElement("p");

  newDiv.append(tshirtP, jeansP, sneakersP);

  tshirtP.textContent = "T-shirts";
  jeansP.textContent = "Jeans";
  sneakersP.textContent = "Sneakers";
  newDiv.className = "created-div";
  newDiv.classList.add("newDivStyle");
  target.appendChild(newDiv);
}
function removeDiv(target) {
  const createdDiv = target.querySelector(".created-div");
  if (createdDiv) {
    target.removeChild(createdDiv);
  }
}

hoverTargets.forEach((target) => {
  target.addEventListener("click", () => {
    if (!target.querySelector(".created-div")) {
      createDiv(target);
    }
  });
});
document.addEventListener("click", (event) => {
  hoverTargets.forEach((target) => {
    if (!target.contains(event.target)) {
      removeDiv(target);
    }
  });
});

// getProducts();
// getWishlist();
postToWishlist();


//////////////////////////// Abdulla /////////////////////////////////////

//////////////////////////// Johanna /////////////////////////////////////

//////////////////////////// Johanna /////////////////////////////////////

//////////////////////////// Filip /////////////////////////////////////

//////////////////////////// Filip /////////////////////////////////////

//////////////////////////// Andre /////////////////////////////////////

//////////////////////////// Andre /////////////////////////////////////
