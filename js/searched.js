
let inStock = [
  {
    item: "skateboard",
    gender: "men",
    name: "Skateboard Pro Xtreme",
    description:
      "The Skateboard Pro Xtreme is the ultimate skateboard designed for riders of all skill levels, from beginners to seasoned pros. Built with high-quality materials and engineered for superior performance, this skateboard is perfect for those looking to enhance their skills and enjoy a smooth ride.",
    price: "80$",
    img: "./images/Rip-N-Dip-Psychedelic-Complete-Skateboard-Multi-3.jpg",
  },
  {
    item: "skateboard",
    gender: "women",
    name: "Longboard Classic Wave Rider",
    description:
      "Discover the freedom of surfing the streets with the Longboard Classic Wave Rider - the perfect board for downhill racing, carving, and long-distance cruising. Crafted for stability and smoothness, this longboard is ideal for both novice and experienced riders looking for an exhilarating ride.",
    price: "70$",
    img: "./images/krooked-skateboards-sebo-walker-waves-skateboard-deck-8-25-p46621-115949_medium.jpg",
  },
  {
    item: "skateboard",
    gender: "kids",
    name: "Cruiser Skateboard Urban Glide",
    description:
      "Meet the Cruiser Skateboard Urban Glide - your perfect companion for cruising the streets and commuting in style. Designed for a smooth, effortless ride, this cruiser skateboard is ideal for both beginners and experienced skaters looking for a versatile board that excels in both comfort and performance.",
    price: "90$",
    img: "./images/skateboard.jpg",
  },
  {
    item: "shoes",
    gender: "women",
    name: "Vans deluxe",
    description:
      "Vans is an American brand known for its skate-inspired shoes, especially the classic slip-ons and models. Founded in 1966, it’s a staple in skate and street culture.",
    price: "65$",
    img: "./images/vans.jpeg",
  },
  {
    item: "hoodie",
    gender: "men",
    name: "Psych hoodie",
    description:
      "A hoodie is a casual sweatshirt with a hood, often featuring a front pocket and drawstrings. It's popular for its comfort and style, commonly worn in streetwear and sports.",
    price: "40$",
    img: "./images/stoney.jpeg",
  },
  {
    item: "hoodie",
    gender: "men",
    name: "Psych hoodie",
    description:
      "A hoodie is a casual sweatshirt with a hood, often featuring a front pocket and drawstrings. It's popular for its comfort and style, commonly worn in streetwear and sports.",
    price: "40$",
    img: "./images/stoney.jpeg",
  },
];



let searchForm = document.getElementById("searchForm");
let searchContainer = document.getElementById("search-container");
let formBtn = document.getElementById("formBtn");
let input = document.getElementById("searchInput");


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

  // let addButton = document.createElement("button");
  // addButton.innerHTML = "Yes";

  // addButton.addEventListener("click", () => {
  //   purchaseMessage.style.display = "none";
  // });

  // let addNotButton = document.createElement("button");
  // addNotButton.innerHTML = "No";

  // addNotButton.addEventListener("click", () => {
  //   purchaseMessage.style.display = "none";
  // });

  // let buyButton = document.createElement("button");
  // buyButton.innerText = "add to cart";

  // let regretBuyButton = document.createElement("button");
  // regretBuyButton.innerText = "remove from cart";
  // let purchaseMessage = document.createElement("div");

  // buyButton.classList.add("buy");
  // purchaseMessage.classList.add("purchase");
  // regretBuyButton.classList.add("buy");
  // regretBuyButton.style.display = "none";

  // buyButton.addEventListener("click", () => {
  //   count++;
  //   counter.innerText = count;
  //   buyButton.disabled = true;
  //   regretBuyButton.style.display = "block";
  //   timedMessage(title, image);
  // });

  // function timedMessage(addedImage) {
  //   let otherProducts = inStock.filter((product) => product.img !== addedImage);

  //   let randomProduct =
  //     otherProducts[Math.floor(Math.random() * otherProducts.length)];

  //   purchaseMessage.innerHTML = "";

  //   let addQuestion = document.createElement("p");
  //   addQuestion.innerText = "Do you want to add this product?";

  //   let imgEl = document.createElement("img");
  //   imgEl.classList.add("popup-img");
  //   imgEl.src = randomProduct.img;

  //   let h2El = document.createElement("h2");
  //   h2El.innerHTML = randomProduct.name;

  //   purchaseMessage.append(imgEl);
  //   purchaseMessage.append(h2El);
  //   purchaseMessage.append(addQuestion);

  //   purchaseMessage.append(addButton);
  //   purchaseMessage.append(addNotButton);

  //   purchaseMessage.style.display = "block";
  // }

  // regretBuyButton.addEventListener("click", () => {
  //   if (count > 0) {
  //     count--;
  //     counter.innerText = count;
  //     regretBuyButton.style.display = "none";
  //     buyButton.disabled = false;
  //   }
  // });

  // box.append(
  //   imgEl,
  //   h2El,
  //   pEl,
  //   priceEl,
  //   buyButton,
  //   regretBuyButton,
  //   purchaseMessage
  // );

  box.append(
    imgEl,
    h2El,
    pEl,
    priceEl
  );
  searchContainer.append(box);
}




searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  searchContainer.innerHTML = " ";

  for (let item of inStock) {
    if (input.value === item.gender) {
      console.log(item.name, input, item.gender);

      searchBoxes(
        item.name,
        item.description,
        item.img,
        item.price)
    }
  }


})