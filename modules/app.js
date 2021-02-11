import { buildProductList } from "./ui.js";
import { products, search } from "./products.js";

function init() {
    buildProductList(products);
    document.getElementById("product-search").addEventListener("keyup", e => {
        if (e.key === "Enter") {
            const result = search(e.target.value);
            buildProductList(result);
        }
    })
}

init()