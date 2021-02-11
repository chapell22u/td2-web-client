class Product {

    static nbTotal = 0;

    constructor(price, description) {
        const paddedRef = ("" + Product.nbTotal).padStart(6, "0");
        this.ref = `#${paddedRef}`;
        Product.nbTotal++;
        this.price = price;
        this.description = description
    }
}

const products = [
    new Product(164.21, "Un canard en plastique géant"),
    new Product(0.05, "Un bonbon crocodile qui pique"),
    new Product(599.95, "Réfrigérateur IKEA"),
    new Product(1.00, "Pièce d'un euro"),
    new Product(999.99, "Thomas PISAN"),
    new Product(250_000.00, "Gant de Michael JACKSON"),
    new Product(49.95, "Cerf-Volant de chez Lidl")
];

function search(keywords) {
    return products.filter(e => e.ref.includes(keywords) || e.description.includes(keywords));
}

export {
    products,
    search
}