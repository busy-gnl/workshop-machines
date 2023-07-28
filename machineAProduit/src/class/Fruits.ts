import { IProduct } from "../interface/IProduct";

export class Fruit implements IProduct<number> {
  name: string;
  unitPrice: number;
  quantity: number;
  type: string;
  couleur: string;

  constructor(
    name: string,
    unitPrice: number,
    quantity: number,
    couleur: string
  ) {
    this.name = name;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.type = "Fruit";
    this.couleur = couleur;
  }
}
