"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TranslationMachine_1 = require("./class/TranslationMachine");
// Exemple d'utilisation de la "Machine à Traduction"
const translationMachine = new TranslationMachine_1.TranslationMachine();
const frenchTranslation = translationMachine.translate("Hello", "fr");
console.log(frenchTranslation); // Devrait afficher : "Bonjour"
const spanishTranslation = translationMachine.translate("Goodbye", "es");
console.log(spanishTranslation); // Devrait afficher : "Adiós"
const germanTranslation = translationMachine.translate("Thank you", "de");
console.log(germanTranslation); // Devrait afficher : "Danke schön"
