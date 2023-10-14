// Création classe Survivant
class Survivant {
  constructor(nom, caracteristique, probmort, probdegat, probmortdegat) {
    this.nom = nom;
    this.caracteristique = caracteristique;
    this.probmort = probmort;
    this.probdegat = probdegat;
    this.probmortdegat = probmortdegat;
  }
}

// Création tableau des noms
const TableauNoms = [
  "William",
  "Joe",
  "Kevin",
  "Brandon",
  "Brian",
  "Thomas",
  "James",
  "Richard",
  "David",
  "Charles",
  "Oliver",
  "Calvin",
  "Georges",
  "Tom",
  "Marc",
];

// Création tableau caractéristiques
const TableauCar = [
  ["nerd", 0.7, 0.1, 0.2],
  ["sportif", 0.3, 0.3, 0.4],
  ["quaterback", 0.2, 0.5, 0.3],
  ["major de promo", 0.1, 0.4, 0.5],
  ["geek", 0.5, 0, 0.5],
  ["gothique", 0.1, 0.1, 0.8],
  ["barbu", 0.4, 0.4, 0.2],
  ["chasseur de fantômes", 0.1, 0.7, 0.2],
  ["pompier", 0.2, 0.6, 0.2],
  ["gymnaste", 0.3, 0.6, 0.1],
  ["musicien", 0.2, 0.4, 0.4],
  ["collectionneur de timbres", 0, 0.1, 0.9],
];

// Création de Jason
const jason = {
  nom: "Jason",
  hp: 100,
};

// Initialisation nombre de survivants
let nbsurvivants = 5;
let TableauSurvivants = [];
let TableauMorts = [];

// Création aléatoire des survivants
for (let i = 0; i < nbsurvivants; i++) {
  randomcaracteristique =
    TableauCar[Math.floor(Math.random() * TableauCar.length)];
  TableauSurvivants.push(
    new Survivant(
      TableauNoms[Math.floor(Math.random() * TableauNoms.length)],
      randomcaracteristique[0],
      randomcaracteristique[1],
      randomcaracteristique[2],
      randomcaracteristique[3]
    )
  );
}

// Affichage du nom des survivants
console.log("Equipe de choc à la recherche de Jason le tueur :");
TableauSurvivants.forEach((element) =>
  console.log("• " + element.nom + " le " + element.caracteristique)
);

// Fonction actions aléatoires (en fonction de leurs caractéristiques) des survivants lorsu'ils croisent Jason
function attaquer(survivant) {
  const random = Math.random();
  // Jason tue le survivant
  if (random < survivant.probmort) {
    TableauSurvivants.splice(TableauSurvivants.indexOf(survivant), 1);
    TableauMorts.push(survivant);
    return `${jason.nom} a tué ${survivant.nom} le ${survivant.caracteristique}.`;
  // Le survivant esquive et attaque Jason
  } else if (random < survivant.probmort + survivant.probdegat) {
    jason.hp -= 10;
    return `${survivant.nom} le ${survivant.caracteristique} a esquivé et infligé 10 dégats à ${jason.nom}.`;
  // Le survivant attaque Jason avant de mourir
  } else {
    jason.hp -= 15;
    TableauSurvivants.splice(TableauSurvivants.indexOf(survivant), 1);
    TableauMorts.push(survivant);
    return `${survivant.nom} le ${survivant.caracteristique} a infligé 15 dégats à ${jason.nom} avant de mourir.`;
  }
}

// Boucle actions des survivants que Jason croise dans la forêt
console.log("Ils s'engouffrent dans la forêt.");
while (jason.hp > 0 && TableauSurvivants.length > 0) {
  survivantattaqué =
    TableauSurvivants[Math.floor(Math.random() * TableauSurvivants.length)];
  console.log(attaquer(survivantattaqué));
}

// Sortie de boucle et fin de la partie
if (jason.hp <= 0) {
  // Si Jason est mort
  console.log("Les survivants ont gagné, mais RIP à :"); // Affichage survivants morts
  TableauMorts.forEach((element) =>
    console.log("• " + element.nom + " le " + element.caracteristique)
  );
  console.log("Ont survécu :"); // Affichage survivants restants
  TableauSurvivants.forEach((element) =>
    console.log("• " + element.nom + " le " + element.caracteristique)
  );
} else {
  // Si tous les survivants sont morts
  console.log("Les survivants ont perdu.");
}
