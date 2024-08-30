let container = document.getElementById("main-container");

// function boxes(image, title, desc) {
//   image = document.createElement("img");
//   title = document.createElement("h2");
//   desc = document.createElement("p");

//   container.append(image, title, desc);

// }

function boxes(title, desc, image, price) {
  let box = document.createElement("div");
  box.classList.add("box");
  let h = document.createElement("h2");
  let p = document.createElement("p");
  let i = document.createElement("img");
  let pr = document.createElement("strong");
  h.innerText = title;
  p.innerText = desc;
  i.src = image;
  pr.innerText = price

  box.append(i, h, p, pr);
  container.append(box);

}
for (let i = 0; i < 10; i++) {

  boxes("Title", "Description", "./images/skate.jpg", "Price");
}
