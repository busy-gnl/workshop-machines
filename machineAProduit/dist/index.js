"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductMachine_1 = require("./class/ProductMachine");
const Vegetables_1 = require("./class/Vegetables");
const Electronics_1 = require("./class/Electronics");
const Fruits_1 = require("./class/Fruits");
const machine = new ProductMachine_1.ProductMachine();
const apple = new Fruits_1.Fruit("apple", 1.5, 15, "rouge");
const carot = new Vegetables_1.Vegetables("carot", 3, 40, "racines");
const iPhone = new Electronics_1.Electronics("iPhone", 1000, 40, "Apple");
console.log("total price iphone => ", machine.calculateTotalPrice(iPhone));
console.log("total price apple => ", machine.calculateTotalPrice(apple));
console.log("total price carot => ", machine.calculateTotalPrice(carot));
machine.displayProductDetails(apple);
machine.displayProductDetails(carot);
machine.displayProductDetails(iPhone);
