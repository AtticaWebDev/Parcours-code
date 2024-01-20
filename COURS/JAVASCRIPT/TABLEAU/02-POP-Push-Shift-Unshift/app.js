// POP permet de supprimer un element a partir de la fin
let fruits = ["pomme", "banane", "orange"];
let dernierFruit = fruits.pop();
console.log(dernierFruit);
console.log(fruits);

// PUSH ajout de nvl elements

const animaux = ["chien", "chat"];

let nvLongueur = animaux.push("souris", "oiseaux");

console.log(nvLongueur);
console.log(animaux);

// SHIFT supprime l'element et remplace la place vide par la gauche !

const villes = ["Madrid", "Paris", "Londres"];

let firstVille = villes.shift();
console.log(firstVille);
console.log(villes);

// UNSHIFT Utiliser pour ajouter des element au debut du tableau

let langages = ["HTML", "CSS", "JAVASCRIPT"];
let nouvelleLongeur = langages.unshift("Java", "C++");

console.log(nouvelleLongeur);
console.log(langages);
