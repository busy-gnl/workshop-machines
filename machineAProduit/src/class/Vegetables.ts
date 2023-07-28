import { IProduct } from "../interface/IProduct";

export class Vegetables implements IProduct<Vegetables> {
  name: string;
  unitPrice: number;
  quantity: number;

  constructor(name: string, unitPrice: number, quantity: number) {
    this.name = name;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
  }
}
