import { addToCart, cart } from "./cart.js";

function displayProduct(product, handlerAddToCart) {
    let divGen = document.getElementById("product-list");
    let divProduct = document.createElement("div")
    const photo = (product.photo) ? `<img class="product-thumbnail" src=${product.photo} alt="Photo non trouvée" >` : '<span class="mdi mdi-camera"></span>'
    divProduct.innerHTML = `<div class="photo">
            ${photo}
            <a class="product-add2cart">
                <span class="mdi mdi-cart"></span>
            </a>
        </div>
        <div class="details">
            <div class="details-top">
                <strong class="bigger" data-type="ref">${product.ref}</strong>
                <strong class="bigger" data-type="price">${product.price} €</strong>
            </div>
            <div class="details-description">
            ${product.description}
            </div>
    </div>`
    divGen.appendChild(divProduct)
    divProduct.classList.add("product");

    const addingButton = divProduct.querySelector(".product-add2cart");
    addingButton.addEventListener("click", e => {
        handlerAddToCart(product)
    });
}

function buildProductList(allProducts, handlerAddToCart) {
    document.getElementById("product-list").innerHTML = "";
    allProducts.forEach(product => {
        displayProduct(product, handlerAddToCart); 
    });
}

function displayCart() {

    const cartContent = document.getElementById("cart-content");
    const html = cart.map(elem => {
        return `<tr>
            <td data-type="ref">${elem.product.ref}</td>
            <td data-type="qte">${elem.qty}</td>
            <td data-type="amount">${elem.product.price}</td>
        </tr>`
    }).reduce((a, b) => a + b, "");
    cartContent.innerHTML = html;

    const cartFooter = document.getElementById("cart-footer");
    const totalPrice = genericCalc((a, b) => a + b.product.price * b.qty);
    cartFooter.innerHTML = `
    <strong class="bigger">Total :&nbsp;</strong>
	<span  class="bigger" id="cart-total">${Math.round(totalPrice * 100) / 100}€</span>`;

    const totalProducts = document.getElementById("total-products");
    totalProducts.innerHTML = genericCalc((a, b) => a + b.qty);
}

function genericCalc(fn) {
    return cart.reduce(fn, 0);
}

export {
    buildProductList,
    displayCart
};