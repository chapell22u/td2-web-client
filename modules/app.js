import * as uiImport from "./ui.js";
import * as prodsImport from "./products.js";

function init() {
    uiImport.buildProductList(prodsImport.products);
}