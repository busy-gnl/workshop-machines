type Language = "fr" | "es" | "de";

export class TranslationMachine<T> {
  translate(phrase: string, lang: Language): string {
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

  private translateToFrench(phrase: string): string {
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

  private translateToSpanish(phrase: string): string {
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

  private translateToGerman(phrase: string): string {
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
