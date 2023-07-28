export interface IProduct<T> {
  name: string;
  unitPrice: number;
  quantity: T;
  type: string;
}
