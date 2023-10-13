class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }

  isLucky() {
    return Math.floor(Math.random() * 100) <= this.luck;
  }

  attackPokemon(pokemon) {
    if (this.isLucky()) {
      let damages = this.attack - pokemon.defense;
      pokemon.hp -= damages;
      console.log(`${this.name} a attaqué ${pokemon.name}, il perd ${damages} HP` );
    } else {
      console.log(`${this.name} a raté son attaque`);
    }
  }
}

let moustillon = new Pokemon("Moustillon", 18, 5, 30, 75);
let rondoudou = new Pokemon("Rondoudou", 15, 3, 30, 50);

//let percent = 75;
//let isLucky = Math.floor(Math.random() * 100) <= percent;

//console.log(moustillon.attackPokemon(rondoudou));


while (moustillon.hp > 0 && rondoudou.hp > 0) {

  moustillon.attackPokemon(rondoudou)

  if (rondoudou.hp <= 0) {
    console.log(`${rondoudou.name} est mort`)
    break
  }

  rondoudou.attackPokemon(moustillon)

  if (moustillon.hp <= 0) {
    console.log(`${moustillon.name} est mort`)
    break
  }
}