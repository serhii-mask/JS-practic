const numbers = [1, 5, 2, 4, 3];

const greaterThenTwo = numbers.filter(num => num > 2);
console.log(greaterThenTwo);

const multByTwo = greaterThenTwo.map(num => num * 3);
console.log(multByTwo);

const sorted = multByTwo.sort((a, b) => a - b);
console.log(sorted);

const res = numbers
   .filter(num => num > 2)
   .map(num => num * 3)
   .sort((a, b) => a - b);
console.log(res);

// -----------------------------------

const players = [
   { id: 'player-1', name: 'Mango', timePlayed: 310, point: 54, online: false },
   { id: 'player-2', name: 'Poly', timePlayed: 470, point: 92, online: true },
   { id: 'player-3', name: 'Kiwi', timePlayed: 230, point: 48, online: true },
   { id: 'player-4', name: 'Ajax', timePlayed: 310, point: 71, online: false },
   { id: 'player-5', name: 'Chelsy', timePlayed: 80, point: 48, online: true },
];
console.table(players);

const playerIdToUpdate = 'player-3';

const updatePlayers = players.map(player =>
   player.id === playerIdToUpdate
      ? { ...player, timePlayed: player.timePlayed + 50 }
      : player,
);
console.table(updatePlayers);
