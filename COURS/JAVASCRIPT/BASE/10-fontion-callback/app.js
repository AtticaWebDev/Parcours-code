function effectuerTache(tache, callback) {
  console.log(`entrain d'effectuer la tache ${tache}`);
  callback();
}

function afficher() {
  console.log("la tache est terminée");
}

effectuerTache("Nettoyer la maison", afficher);
