function appliquer(x, y, operation) {
  return operation(x, y);
}

function additionner(a, b) {
  return a + b;
}

const resultat = appliquer(5, 3, additionner);

console.log(resultat);
