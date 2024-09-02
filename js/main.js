
//////////////////////////// YASIR /////////////////////////////////////


let container = document.getElementById("main-container");


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

  box.append(imgEl, h2El, pEl, priceEl);
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