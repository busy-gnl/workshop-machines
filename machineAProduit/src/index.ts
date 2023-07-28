import { ProductMachine } from "./class/ProductMachine";
import { Vegetables } from "./class/Vegetables";
import { Electronics } from "./class/Electronics";
import { Fruit } from "./class/Fruits";

const machine = new ProductMachine();
const apple = new Fruit("apple", 1.5, 15, "rouge");
const carot = new Vegetables("carot", 3, 40, "racines");
const iPhone = new Electronics("iPhone", 1000, 40, "Apple");

console.log("total price iphone => ", machine.calculateTotalPrice(iPhone));
console.log("total price apple => ", machine.calculateTotalPrice(apple));
console.log("total price carot => ", machine.calculateTotalPrice(carot));

machine.displayProductDetails(apple);
machine.displayProductDetails(carot);
machine.displayProductDetails(iPhone);
