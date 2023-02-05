// Array.prototype.map()
// Перебирає масив не змінюючи оригінал, а повертає новий масив такої ж довжини

const numbers = [5, 10, 15, 20, 25, 30];

const dubleNumbers = numbers.map(number => number + 100);

console.log(dubleNumbers);

// -----------------------------------

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
   { id: 'player-4', name: 'Ajax', timePlayed: 310, points: 71, online: false },
   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const playersName = players.map(player => player.name);
console.log('playersName ', playersName);

const playersIds = players.map(player => player.id);
console.log('playersIds ', playersIds);

const res = players.map((name, online) => ({ name, online }));
console.log('res ', res);

// ------------------------------------

const updatePlayers = players.map(player => ({
   ...player,
   points: player.points * 1.1,
}));
console.table(updatePlayers);

const playerIdToUpdate = 'player-3';

const updateToIdPlayers = players.map(player =>
   player.id === playerIdToUpdate
      ? { ...player, points: player.points * 1.5 }
      : player,
);
console.table(updateToIdPlayers);
