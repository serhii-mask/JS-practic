// Array.prototype.find()

const numbers = [5, 10, 15, 20, 25, 30];

const number = numbers.find(number => number > 10);
console.log(number);

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
   { id: 'player-6', name: 'Ajax', timePlayed: 310, points: 71, online: false },
];

const playerIdTiFind = 'player-3';

const playerWithId = players.find(player => player.id === playerIdTiFind);
console.log(playerWithId);

const playerNameTiFind = 'Ajax';

const playerWithName = players.find(player => player.name === playerNameTiFind);
console.log(playerWithName);

// ---------------------------

const findPlayerById = (allPlayers, playerId) => {
   return allPlayers.find(({ id }) => id === playerId);
};

console.log(findPlayerById(players, 'player-2'));
console.log(findPlayerById(players, 'player-4'));
