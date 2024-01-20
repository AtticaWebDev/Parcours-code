let age = prompt("Quel age avez-vous ?");
let sexe = "femme";

if (age >= 18) {
  if (sexe === "homme") {
    console.log("Vous etes un homme adulte");
  } else {
    console.log("Vous etes une femme adulte");
  }
} else {
  console.log("vous etes mineur");
}
