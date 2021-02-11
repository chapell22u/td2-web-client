import { displayCart } from "./ui.js"

const cart = [];

function addToCart(prod) {
    const index = cart.findIndex(e => e.product === prod);
    if (index === -1) {
        cart.push({product: prod, qty: 1});
    } else {
        cart[index].qty++;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function emptyCart() {
    cart.length = 0;
    displayCart();
    localStorage.clear();
}

export {
    emptyCart,
    addToCart,
    cart
};