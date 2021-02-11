import { buildProductList, displayCart } from "./ui.js";
import { products, search } from "./products.js";
import { emptyCart } from "./cart.js"

function init() {
    buildProductList(products);
    document.getElementById("product-search").addEventListener("keyup", e => {
        if (e.key === "Enter") {
            const result = search(e.target.value);
            buildProductList(result);
        }
    })
    document.getElementById("empty-cart").addEventListener("click", e => {
        emptyCart();
    })
}

init()