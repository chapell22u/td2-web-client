import buildProductsList from "./ui.js";
import { products } from "./products.js";

function init() {
    buildProductsList(products);
}

init()