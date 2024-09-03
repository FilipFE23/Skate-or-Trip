
//////////////////////////// YASIR & André/////////////////////////////////////


let container = document.getElementById("main-container");
let counter = document.getElementById("number");

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
  priceEl.innerText = price

  let buyButton = document.createElement("button");
  buyButton.innerText = "add to cart";

  let regretBuyButton = document.createElement("button");
  regretBuyButton.innerText = "remove from cart";
  let purchaseMessage = document.createElement("div");

  buyButton.classList.add("buy");
  purchaseMessage.classList.add("purchase");
  regretBuyButton.classList.add("buy");
  regretBuyButton.style.display = "none";

  buyButton.addEventListener("click", ()=> {
    count++;
    counter.innerText = count;
    buyButton.disabled = true;
    regretBuyButton.style.display = "block";
    timedMessage();
  });

  function timedMessage(){
    purchaseMessage.innerText = "Product added to cart!";
    purchaseMessage.style.display = "block";

    setTimeout(() => {
      purchaseMessage.style.display = "none";
    }, 1000);
  }

  regretBuyButton.addEventListener("click", ()=>{
    if (count > 0){
    count--;
    counter.innerText = count;
    regretBuyButton.style.display = "none";
    buyButton.disabled = false;
    }
  });

  box.append(imgEl, h2El, pEl, priceEl, buyButton, regretBuyButton, purchaseMessage);
  container.append(box);

}

let firstTitle = "Skateboard Pro Xtreme";
let firstDescription = "The Skateboard Pro Xtreme is the ultimate skateboard designed for riders of all skill levels, from beginners to seasoned pros. Built with high-quality materials and engineered for superior performance, this skateboard is perfect for those looking to enhance their skills and enjoy a smooth ride.";
let firstImage = "./images/Rip-N-Dip-Psychedelic-Complete-Skateboard-Multi-3.jpg";
let firstPrice = "80$";

let secondTitle = "Cruiser Skateboard Urban Glide";
let secondDescription = "Meet the Cruiser Skateboard Urban Glide – your perfect companion for cruising the streets and commuting in style. Designed for a smooth, effortless ride, this cruiser skateboard is ideal for both beginners and experienced skaters looking for a versatile board that excels in both comfort and performance.";
let secondImage = "./images/skateboard.jpg";
let secondPrice = "90$";

///...

let seveenthTitle = "Longboard Classic Wave Rider";
let seveenthDescription = "Discover the freedom of surfing the streets with the Longboard Classic Wave Rider – the perfect board for downhill racing, carving, and long-distance cruising. Crafted for stability and smoothness, this longboard is ideal for both novice and experienced riders looking for an exhilarating ride.";
let seveenthImage = "./images/krooked-skateboards-sebo-walker-waves-skateboard-deck-8-25-p46621-115949_medium.jpg";
let seveenthPrice = "70$";

//bilderna bara för exempel

for (let i = 0; i < 10; i++) {
  if(i <= 2){
        boxes(firstTitle, firstDescription, firstImage, firstPrice);
  }else if(i > 2, i < 6){
    boxes(secondTitle, secondDescription, secondImage, secondPrice);
  }else{
    boxes(seveenthTitle, seveenthDescription, seveenthImage, seveenthPrice);
  }

}


//////////////////////////// YASIR /////////////////////////////////////



//////////////////////////// Abdulla /////////////////////////////////////





//////////////////////////// Abdulla /////////////////////////////////////




//////////////////////////// Johanna /////////////////////////////////////





//////////////////////////// Johanna /////////////////////////////////////




//////////////////////////// Filip /////////////////////////////////////






//////////////////////////// Filip /////////////////////////////////////





//////////////////////////// Andre /////////////////////////////////////





//////////////////////////// Andre /////////////////////////////////////