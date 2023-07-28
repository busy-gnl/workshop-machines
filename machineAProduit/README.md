# Machine à Produits

Félicitations, développeur intrépide ! Vous êtes sur le point de devenir le créateur d'une "Machine à Produits" ultime. Cette machine magique est capable de gérer différents types de produits et de calculer leurs prix en utilisant des types génériques avancés. Votre mission, si vous l'acceptez, est de créer cette machine incroyable pour faciliter la gestion des stocks du royaume.

# Etapes

1. Commencez par créer une interface générique `Product` qui représente la structure d'un produit. Le type générique T représentera le type de la quantité du produit, par exemple `number`.

2. Dans l'interface `Product`, définissez des propriétés communes telles que nom, prixUnitaire, quantite, etc.

3. Pour chaque type de produit spécifique (par exemple, Fruit, Legume, Electronique, etc.), créez une classe qui implémente l'interface `Product`.

4. Dans la classe `ProductMachine`, ajoutez une méthode `calculateTotalPrice` qui prend en paramètre un produit de type `Product` et renvoie le prix total en fonction de la quantité du produit.

5. Utilisez une intersection de types pour définir des propriétés spécifiques à chaque type de produit. Par exemple, Fruit & { type: 'Fruit'; couleur: string }.

6. Pour corser le tout, ajoutez une méthode privée `displayProductDetails` qui affiche les détails du produit en fonction de son type spécifique.