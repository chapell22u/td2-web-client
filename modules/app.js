import { buildProductList } from "./ui.js";
import { products, search } from "./products.js";
import { addToCart, emptyCart, cart } from "./cart.js";

function init() {
    if (JSON.parse(localStorage.getItem("cart")) != null) {
        let temp = JSON.parse(localStorage.getItem("cart"));
        temp.forEach(element => {
            addToCart(element);
        });
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