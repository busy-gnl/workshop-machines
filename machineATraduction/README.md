# Machine à Traduction :

Bravo ! Vous êtes sur le point de créer une incroyable "Machine à Traduction" en TypeScript. Cette machine magique peut traduire des phrases de différentes langues en utilisant des types génériques pour assurer la précision des traductions. Vous allez vous amuser à créer des traductions pour différentes langues et à rendre la machine polyglotte !

# Etapes

1. Commencez par créer une classe `TranslationMachine<T>` qui peut traduire des phrases de différentes langues. Le type générique `T` représentera le type de la phrase à traduire, par exemple `string`.

2. Dans la classe `TranslationMachine<T>`, ajoutez une méthode `translate` qui prend en paramètre une phrase de type `T` et la langue cible de traduction.

3. Pour chaque langue cible, créez une méthode privée de traduction spécifique (par exemple, `translateToFrench`, `translateToSpanish`, `translateToGerman`, etc.). Chaque méthode doit renvoyer la traduction de la phrase dans la langue cible.

4. Utilisez une union de types pour définir les langues cibles possibles (par exemple, `type Language = 'fr' | 'es' | 'de';`).

5. Assurez-vous que la méthode `translate` ne puisse être appelée qu'avec une langue cible valide, en utilisant l'opérateur conditionnel (`?`).

Exemple d'utilisation de la "Machine à Traduction" :

```typescript
const translationMachine = new TranslationMachine<string>();

const frenchTranslation = translationMachine.translate("Hello", 'fr');
console.log(frenchTranslation); // Devrait afficher : "Bonjour"

const spanishTranslation = translationMachine.translate("Goodbye", 'es');
console.log(spanishTranslation); // Devrait afficher : "Adiós"

const germanTranslation = translationMachine.translate("Thank you", 'de');
console.log(germanTranslation); // Devrait afficher : "Danke schön"
```

N'hésitez pas à ajouter davantage de langues et à développer des méthodes de traduction plus complexes pour enrichir votre "Machine à Traduction" ! Amusez-vous bien ! 😄