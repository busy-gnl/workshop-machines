"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMachine = void 0;
// déclarer le totalPrice = 0
// totalPrice = product.price multiplié par product.quantity
// retourner le prix total
class ProductMachine {
    calculateTotalPrice(product) {
        let totalPrice = product.quantity * product.unitPrice;
        return totalPrice;
    }
    displayProductDetails(product) {
        switch (product.type) {
            case "Fruit":
                const fruitProduct = product;
                console.log(`
          Nom: ${fruitProduct.name}
          Type: ${fruitProduct.type}
          Couleur: ${fruitProduct.couleur}
          Prix unitaire: ${fruitProduct.unitPrice}
          Quantité: ${fruitProduct.quantity}
          Prix total: ${this.calculateTotalPrice(fruitProduct)}
        `);
                break;
            case "Legume":
                const legumeProduct = product;
                console.log(`
          Nom: ${legumeProduct.name}
          Type: ${legumeProduct.type}
          Catégorie: ${legumeProduct.categorie}
          Prix unitaire: ${legumeProduct.unitPrice}
          Quantité: ${legumeProduct.quantity}
          Prix total: ${this.calculateTotalPrice(legumeProduct)}
        `);
                break;
            case "Electronique":
                const electronicProduct = product;
                console.log(`
          Nom: ${electronicProduct.name}
          Type: ${electronicProduct.type}
          Marque: ${electronicProduct.marque}
          Prix unitaire: ${electronicProduct.unitPrice}
          Quantité: ${electronicProduct.quantity}
          Prix total: ${this.calculateTotalPrice(electronicProduct)}
        `);
                break;
            default:
                console.log("Type de produit non reconnu.");
                break;
        }
    }
}
exports.ProductMachine = ProductMachine;
