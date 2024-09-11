import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBUHdVTcHheiJBtDXKzJXdsvay8Y_CKeuM",
    authDomain: "skateortrip.firebaseapp.com",
    projectId: "skateortrip",
    storageBucket: "skateortrip.appspot.com",
    messagingSenderId: "784481558683",
    appId: "1:784481558683:web:41e472cf9d5dd635b7663e",
    measurementId: "G-F5LPXX3GQD"
};


const PRODUCT_URL =
    "https://skateortrip-default-rtdb.europe-west1.firebasedatabase.app/products/.json";


const WISHLIST_URL =
    "https://skateortrip-default-rtdb.europe-west1.firebasedatabase.app/wishlist/.json";


// const CATEGORY_URL = `https://skateortrip-default-rtdb.europe-west1.firebasedatabase.app/product/${category}/.json`;
let productId;
let productName;
let productPrice
let productDescription;
let productImg;
let productCategory;
export async function getProducts() {
    let response = await fetch(PRODUCT_URL);
    let data = await response.json();
    return data;
    for (let productId in data) {
        // console.log("Product id:", productId);
        // console.log("Price:", data[productId].price);
        // console.log("Product name:", data[productId].productname);
        // console.log("Category:", data[productId].category);
        // console.log("ImgURL:", data[productId].img_url);
    }
}
export async function getWishlist() {
    let response = await fetch(WISHLIST_URL);
    let data = await response.json();
    // for (let wishlistedProductId in data) {
    //     console.log("product id inside wishlist id:", wishlistedProdId)
    //     console.log("Category:", data[wishlistedProductId].category);
    //     console.log("Price:", data[wishlistedProductId].price);
    //     console.log("Product name:", data[wishlistedProductId].productname);
    //     console.log("imgURl:", data[wishlistedProductId].img_url);
    //     console.log("actual product id:", data[wishlistedProductId].productid)
    //     console.log("Description: ", data[wishlistedProductId].description);
    // }
    return data;
}

export async function postToWishlist(productId, productName, productCategory, productPrice, productDescription, productImg) {
    let productObject = {
        "productid": productId,
        "productname": productName,
        "description": productDescription,
        "price": productPrice,
        "category": productCategory,
        "img_url": productImg
    };

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productObject),
    };

    let response = await fetch(WISHLIST_URL, requestOptions);
    let data = await response.json();
    console.log(data);
}

