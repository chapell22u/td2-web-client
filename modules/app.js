import { buildProductList } from "./ui.js";
import { products, search } from "./products.js";
import { addToCart } from "./cart.js";

function init() {
    buildProductList(products, addToCartHandler);
    document.getElementById("product-search").addEventListener("keyup", e => {
        if (e.key === "Enter") {
            const result = search(e.target.value);
            buildProductList(result, addToCartHandler);
        }
    })
}

function addToCartHandler(product) {
    addToCart(product);
}

init()