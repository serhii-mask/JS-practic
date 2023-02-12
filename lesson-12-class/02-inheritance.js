class Hero {
   constructor({ name = 'hero', xp = 0 } = {}) {
      this.name = name;
      this.xp = xp;
   }

   gainXp(amount) {
      this.xp += amount;
   }
}

class Warrior extends Hero {
   constructor({ weapon, ...restProp } = {}) {
      super(restProp);

      this.weapon = weapon;
   }
}

class Mage extends Hero {
   constructor({ spells, ...restProp } = {}) {
      super(restProp);

      this.spells = spells;
   }
}

const mango = new Warrior({ name: 'mango', xp: 1000, weapon: 'alebada' });
const jakson = new Mage({ name: 'jakson', xp: 10000, spells: 'maracuiy' });

console.log(mango);
mango.gainXp(1000);
console.log(mango);
console.log(jakson);
