function displayProduct(product) {
    let divGen = document.getElementById("product-list");
    let divProduct = document.createElement("div")
    divProduct.innerHTML = `<div class="photo">
            <span class="mdi mdi-camera"></span>
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
    divProduct.classList.add("product")
   }

function buildProductList(allProducts) {
    document.getElementById("product-list").innerHTML = "";
    allProducts.forEach(product => {
        displayProduct(product);
    });
}

export default buildProductList;