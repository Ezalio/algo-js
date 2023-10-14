// Création classe Personnage
class Personnage {
  constructor(prenom, sante) {
    this.prenom = prenom;
    this.sante = sante;
  }
}

// Création de la liste de 5 musiques
let TableauMusique = [
  '"Faded - Alan Walker"',
  '"Heroes - Alesso"',
  '"Good For You - Selena Gomez"',
  '"Morning - Charlotte Lawrence"',
  '"Anissa - Wejdene"',
];

// Création du personnage de John
let john = new Personnage("John", 10);

// Création du trajet
let nbfeux = 30; // 30 Feux rouges sur son trajet
let feuxrestants = nbfeux;
let changements = 0;
let radio = null;

// Boucle pour chaque feu rouge
while (john.sante != 0 && feuxrestants != 0) {
  feuxrestants -= 1;
  console.log(`Feu numéro ${nbfeux - feuxrestants}`);

  radio = TableauMusique[Math.floor(Math.random() * TableauMusique.length)];
  console.log(`${radio} passe à la radio.`);

  // Anissa passe à la radio
  if (radio == '"Anissa - Wejdene"') {
    changements += 1;
    john.sante -= 1;

    // Sortie de boucle si John n'a plus de points de santé mentale
    if (john.sante == 0) {
      break;
    }

    console.log(
      `${john.prenom} change de taxi et perd 1 point de santé mentale.`
    );
  } else {
    // Une autre musique passe à la radio
    console.log(`${john.prenom} peut rester dans le même taxi.`);
  }
}

// Sortie boucle
if (john.sante == 0) {
  // John a perdu tous ses points de santé mentale
  console.log(`${john.prenom} a explosé !`);
} else {
  // Fin du trajet
  console.log(
    `${john.prenom} est arrivé à destination ! Il lui a fallu ${changements} changements de taxi.`
  );
}
