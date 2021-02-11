var cart = [];

function addToCart(prod) {
    let prodQty = {product : prod, qty: 1};
    if (cart.includes(prodQty.product)) {
        let index = cart.indexOf(prodQty)
        cart[index].qty++;
    }else{
        cart.push(prodQty)
    }
}

export default addToCart;