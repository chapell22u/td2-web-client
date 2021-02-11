import buildProductsList from "./ui.js";
import { products, search } from "./products.js";
import buildProductList from "./ui.js";

function init() {
    buildProductsList(products);
    document.getElementById("product-search").addEventListener("keyup", e => {
        if (e.key === "Enter") {
            const result = search(e.target.value);
            buildProductList(result);
        }
    })
}

init()