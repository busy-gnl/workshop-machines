import { IProduct } from "../interface/IProduct";

export class Vegetables implements IProduct<number> {
  name: string;
  unitPrice: number;
  quantity: number;
  type: string;
  categorie: string;

  constructor(
    name: string,
    unitPrice: number,
    quantity: number,
    categorie: string
  ) {
    this.name = name;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.type = "Legume";
    this.categorie = categorie;
  }
}
