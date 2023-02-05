// Array.prototype.sort(callback(currentEl, nextEl) {})
// Сортує та змінює існуючий масив, тому потрібно зробити копію аби мати оргінал

const numbers = [1, 9, 6, 2, 3, 13];
// numbers.sort();                         //  numbers [1, 13, 2, 3, 6, 9]
// console.log('numbers ', numbers);

const letters = ['b', 'B', 'a', 'A'];
// letters.sort();                         //  letters ['A', 'B', 'a', 'b']
// console.log('letters ', letters);

// numbers.sort((curEl, nextEl) => curEl - nextEl);
// console.log(numbers);

const copy = [...numbers].sort((a, b) => a - b);
console.log(copy);

const copyReverse = [...numbers].sort((a, b) => b - a);
console.log(copyReverse);

// --------------------------------

const players = [
   {
      id: 'player-1',
      name: 'Mango',
      timePlayed: 310,
      points: 54,
      online: false,
   },
   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const copyPlayers = [...players].sort((a, b) => a.timePlayed - b.timePlayed);
console.log(copyPlayers);

// --------------------------------

// const byName = [...players].sort((a, b) => {
//    const result = a.name[0] > b.name[0];

//    if (result) {
//       return 1;
//    }

//    if (!result) {
//       return -1;
//    }
// });

const byName = [...players].sort((a, b) => (a.name[0] > b.name[0] ? 1 : -1));

console.log(byName);
