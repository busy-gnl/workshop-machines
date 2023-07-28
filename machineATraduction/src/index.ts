import { TranslationMachine } from "./class/TranslationMachine";

const translationMachine = new TranslationMachine<string>();

const frenchTranslation = translationMachine.translate("Hello", "fr");
console.log(frenchTranslation); // Devrait afficher : "Bonjour"

const spanishTranslation = translationMachine.translate("Goodbye", "es");
console.log(spanishTranslation); // Devrait afficher : "Adiós"

const germanTranslation = translationMachine.translate("Thank you", "de");
console.log(germanTranslation); // Devrait afficher : "Danke schön"
