class Product {

    static nbTotal = 0;

    constructor(price, description, photo) {
        const paddedRef = ("" + Product.nbTotal).padStart(6, "0");
        this.ref = `#${paddedRef}`;
        Product.nbTotal++;
        this.price = price;
        this.description = description;
        this.photo = photo;
    }
}

const products = [
    new Product(164.21, "Un canard en plastique géant", "https://img.huffingtonpost.com/asset/5c9347ea2a0000d6024e867b.jpeg?ops=scalefit_630_noupscale"),
    new Product(0.05, "Un bonbon crocodile qui pique", "https://cdn.store-factory.com/www.confiserie-foraine.com/content/product_10757166b.jpg?v=1560415131"),
    new Product(599.95, "Réfrigérateur IKEA", "https://www.ikea.com/fr/fr/images/products/svalna-refrigerateur-encastrable-a-blanc__0755729_PE748582_S5.JPG?f=s"),
    new Product(1.00, "Pièce d'un euro", "https://numismativy.fr/dossier/euro_pieces/visuels/photos/faces_communes/100%20common_old.jpg"),
    new Product(999.99, "Philippe Etchebest", "https://static1.purepeople.com/articles/1/39/26/21/@/5643809-exclusif-philippe-etchebest-preside-le-624x600-3.jpg"),
    new Product(250_000.00, "Gant de Michael JACKSON", "https://cache.marieclaire.fr/data/photo/w300_c17/7d997111f1205b9ff.jpg"),
    new Product(49.95, "Cerf-Volant de chez Lidl", "https://lh3.googleusercontent.com/proxy/amuTFT3J5vtd5MgECd9zITOeqha39E36bgRj0T2z7UHALma7GNHI7u8F2fr2VQOq5YR0iXZdjfOCSI2bJpAP4-LUjaws-34bEjbeLHSkfpxT5ix4R93sg0kiKOySQ65uUyWLfDU")
];

function search(keywords) {
    const lowerKeywords = keywords.toLowerCase();
    return products.filter(e => e.ref.toLowerCase().includes(lowerKeywords) || e.description.toLowerCase().includes(lowerKeywords));
}

export {
    products,
    search
}