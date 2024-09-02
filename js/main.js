
//////////////////////////// YASIR /////////////////////////////////////


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

  buyButton.classList.add("buy");
  regretBuyButton.classList.add("buy");
  regretBuyButton.style.display = "none";

  buyButton.addEventListener("click", ()=> {
    count++;
    counter.innerText = count;
    buyButton.disabled = true;
    regretBuyButton.style.display = "block";
    alert("Product added to cart!")
  });

  regretBuyButton.addEventListener("click", ()=>{
    if (count > 0){
    count--;
    counter.innerText = count;
    regretBuyButton.style.display = "none";
    buyButton.disabled = false;
    }
  });

  box.append(imgEl, h2El, pEl, priceEl, buyButton, regretBuyButton);
  container.append(box);

}
for (let i = 0; i < 10; i++) {

  boxes("Title", "Description", "./images/skate.jpg", "Price");
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