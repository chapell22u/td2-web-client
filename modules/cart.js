const cart = [];

function addToCart(prod) {
    const index = cart.findIndex(e => e.product === prod);
    if (index === -1) {
        cart.push({product: prod, qty: 1});
    } else {
        cart[index].qty++;
    }
}

export {
    addToCart
};