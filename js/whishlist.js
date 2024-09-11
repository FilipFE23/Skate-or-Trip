import { getWishlist } from "./fetch.js";

const WISHLIST_URL =
    "https://skateortrip-default-rtdb.europe-west1.firebasedatabase.app/wishlist/.json";

    getWishlist().then(data=>{
    console.log(data);
    
})

// Function to display the wishlist in the HTML
async function showWishlist() {
    let wishlistContainer = document.getElementById("wishlist-container");

    // Clear existing items (if any)
    wishlistContainer.innerHTML = "";

    // Fetch wishlist data
    let response = await fetch(WISHLIST_URL);
    let data = await response.json();

    // Loop through the wishlist items
    for (let wishlistedProductId in data) {
        let item = data[wishlistedProductId];

        // Create the HTML structure for each product
        let itemDiv = document.createElement("div");
        itemDiv.className = "wishlist-item";

        let img = document.createElement("img");
        img.src = item.img_url;

        let title = document.createElement("h2");
        title.textContent = item.productname;

        let description = document.createElement("p");
        description.textContent = item.description;

        let price = document.createElement("p");
        price.textContent = `Price: $${item.price}`;

        let category = document.createElement("p");
        category.textContent = `Category: ${item.category}`;

        // Append all elements to the itemDiv
        itemDiv.appendChild(img);
        itemDiv.appendChild(title);
        itemDiv.appendChild(description);
        itemDiv.appendChild(price);
        itemDiv.appendChild(category);

        // Append the itemDiv to the wishlist container
        wishlistContainer.appendChild(itemDiv);
    }
}

// Call the function to display wishlist when the page loads
window.addEventListener("DOMContentLoaded", showWishlist);
