let student = {
  name: "Kinsey",
  favoriteFood: "Pâtes",
  city: "Paris",
};

//Simple

let result = 0;
let values = Object.values(student);

values.forEach((value) => {
  result += value.length;
});

console.log(result);

//Complexe
result = 0;
result = values.reduce((acc, value) => acc + value.length, result);
console.log(result);

//Pair ou impair

if (result % 2) {
  console.log("impair");
} else {
  console.log("pair");
}

console.log(`Le résultat est ${result}`); //L'interpolation
console.log("Le résultat est " + result); //La concatenation

//Ternaire
console.log(`Le résultat est ${result % 2 ? "impair" : "pair"}`);
// condition ? vrai : faux
