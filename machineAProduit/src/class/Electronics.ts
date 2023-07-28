import { IProduct } from "../interface/IProduct";

export class Electronics implements IProduct<number> {
  name: string;
  unitPrice: number;
  quantity: number;
  type: string;
  marque: string;

  constructor(
    name: string,
    unitPrice: number,
    quantity: number,
    marque: string
  ) {
    this.name = name;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
    this.type = "Electronique";
    this.marque = marque;
  }
}
