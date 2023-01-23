const friends = [
   { name: 'Martin', online: false },
   { name: 'Aria', online: true },
   { name: 'Jozef', online: true },
   { name: 'Nikki', online: false },
   { name: 'Kiwi', online: false },
];

for (const friend of friends) {
   console.log(friend.online);

   friend.newprop = 777;
}

console.table(friends);

// Пошук друга по імені

const findFriendByName = function (allFriends, friendName) {
   for (const friend of friends) {
      // console.log(friend);
      // console.log(friend.name);

      if (friend.name === friendName) {
         return 'Найшли!';
      }
   }

   return 'Не найшли(';
};

console.log(findFriendByName(friends, 'Jozef'));
console.log(findFriendByName(friends, 'Maik'));

// Отримання список всії друзів

const getAllName = function (allFriends) {
   const names = [];

   for (const friend of friends) {
      console.log(friend.name);
      names.push(friend.name);
   }

   return names;
};

console.log(getAllName(friends));

// Отримання імена друзів які onlone

const getOnlineFriends = function (allFriends) {
   const onlineFriends = [];
   for (const friend of friends) {
      if (friend.online) {
         onlineFriends.push(friend);
      }
   }
   return onlineFriends;
};

console.log(getOnlineFriends(friends));

// Отримання імена друзів які offlone

const getOfflineFriends = function (allFriends) {
   const offlineFriends = [];
   for (const friend of friends) {
      if (!friend.online) {
         offlineFriends.push(friend);
      }
   }
   return offlineFriends;
};

console.log(getOfflineFriends(friends));

// -----------------------------------------

const getFriendsByOnlineStatus = function (allFriends) {
   const friendsByStatus = {
      online: [],
      offline: [],
   };

   for (const friend of friends) {
      if (friend.online) {
         friendsByStatus.online.push(friend);
         continue;
      }

      friendsByStatus.offline.push(friend);
   }

   return friendsByStatus;
};

console.log(getFriendsByOnlineStatus(friends));

// ------------------------

const x = {
   a: 1,
   b: 2,
   c: 50,
   d: 100,
};

console.log(Object.keys(x).length);
