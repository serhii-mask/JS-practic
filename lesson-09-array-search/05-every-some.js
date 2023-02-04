// Array.prototype.every()
// Перевіряє кожен елемент, і якщо хоч один елемент не відповідає вимогам, повертає FALSE

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

const isAllOnline = players.every(player => player.online);
console.log('isAllOnline ', isAllOnline);

// Array.prototype.some()
// Перевіряє кожен елемент, і якщо хоч один елемент відповідає вимогам, повертає TRUE

const isAnyOnline = players.some(player => player.online);
console.log('isAnyOnline ', isAnyOnline);
