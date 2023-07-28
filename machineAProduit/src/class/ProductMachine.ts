import { IProduct } from "./../interface/IProduct";
import { Electronics } from "./Electronics";
import { Fruit } from "./Fruits";
import { Vegetables } from "./Vegetables";

// déclarer le totalPrice = 0
// totalPrice = product.price multiplié par product.quantity
// retourner le prix total
export class ProductMachine {
  calculateTotalPrice(product: IProduct<number>): number {
    let totalPrice = product.quantity * product.unitPrice;
    return totalPrice;
  }

  displayProductDetails(product: IProduct<number>) {
    switch (product.type) {
      case "Fruit":
        const fruitProduct = product as Fruit;
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
        const legumeProduct = product as Vegetables;
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
        const electronicProduct = product as Electronics;
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
