import { buildProductList, displayCart } from "./ui.js";
import { products, search } from "./products.js";
import { addToCart, emptyCart, cart } from "./cart.js";

function init() {

    // Restitution du cart stocké dans le localStorage
    const temp = JSON.parse(localStorage.getItem("cart"));
    if (temp) {
        temp.forEach(element => {
            cart.push(element);
        });
        displayCart();// Mise à jour de l'affichage après la restitution
    }

    buildProductList(products, addToCartHandler);
    document.getElementById("product-search").addEventListener("keyup", e => {
        if (e.key === "Enter") {
            const result = search(e.target.value);
            buildProductList(result, addToCartHandler);
        }
    })
    document.getElementById("empty-cart").addEventListener("click", e => {
        emptyCart();
    })
}

function addToCartHandler(product) {
    addToCart(product);
}

init()