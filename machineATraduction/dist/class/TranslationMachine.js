"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationMachine = void 0;
class TranslationMachine {
    translate(phrase, lang) {
        switch (lang) {
            case "fr":
                return this.translateToFrench(phrase);
            case "es":
                return this.translateToSpanish(phrase);
            case "de":
                return this.translateToGerman(phrase);
            default:
                throw new Error("Language not supported.");
        }
    }
    translateToFrench(phrase) {
        // Implémentez la logique de traduction vers le français ici
        // Par exemple :
        switch (phrase.toLowerCase()) {
            case "hello":
                return "Bonjour";
            case "goodbye":
                return "Au revoir";
            case "thank you":
                return "Merci";
            default:
                return "Traduction non disponible pour cette phrase en français.";
        }
    }
    translateToSpanish(phrase) {
        // Implémentez la logique de traduction vers l'espagnol ici
        // Par exemple :
        switch (phrase.toLowerCase()) {
            case "hello":
                return "Hola";
            case "goodbye":
                return "Adiós";
            case "thank you":
                return "Gracias";
            default:
                return "Traduction non disponible pour cette phrase en espagnol.";
        }
    }
    translateToGerman(phrase) {
        // Implémentez la logique de traduction vers l'allemand ici
        // Par exemple :
        switch (phrase.toLowerCase()) {
            case "hello":
                return "Hallo";
            case "goodbye":
                return "Auf Wiedersehen";
            case "thank you":
                return "Danke schön";
            default:
                return "Traduction non disponible pour cette phrase en allemand.";
        }
    }
}
exports.TranslationMachine = TranslationMachine;
