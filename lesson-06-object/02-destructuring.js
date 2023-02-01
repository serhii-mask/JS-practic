const playlist = {
   nameUs: 'My best playlist',
   rating: 5,
   tracks: ['trek-1', 'trek-2', 'trek-3'],
   trackCount: 3,
};

const {
   rating,
   tracks,
   nameUs,
   trackCount: numberOfTracks = 0,
   author = 'user',
} = playlist;

console.log(nameUs);
console.log(rating);
console.log(tracks);
console.log(numberOfTracks);
console.log(author);
console.log(playlist);

// --------------------------

const profile = {
   nameUser: 'Jaques Gluke',
   tag: 'jgluke',
   avatar: 'https://kinokrad.cc/282184-mister-robot-1-sezon-2015.html',
   stats: {
      follower: 5605,
      views: 4874,
      lokes: 1530,
   },
};

const {
   nameUser,
   tag,
   avatar,
   stats: { follower, lokes, views },
} = profile;

console.log(nameUser, tag, avatar, follower, views, lokes);

// --------------------------

const rgb = [255, 100, 80];

const [a, b, c] = rgb;

console.log(a, b, c);

// --------------------------

const authors = {
   kiwi: 4,
   poli: 7,
   alex: 9,
   mango: 6,
};

const entries = Object.entries(authors);

for (const [name, ratinge] of entries) {
   //  lvl 3
   // console.log(entrie);
   // lvl 1
   // const name = entrie[0];
   // const ratinge = entrie[1];

   // lvl 2
   // const [name, ratinge] = entrie;

   console.log(name, ratinge);
}

// ---------------------------

const profileUser = {
   userName: 'Jaques Gluke',
   tags: 'jgluke',
   lokation: 'Ocho Rio',
   avatar: 'https://kinokrad.cc/282184-mister-robot-1-sezon-2015.html',
   stats: {
      follower: 5605,
      views: 4874,
      lokes: 1530,
   },
};

const { userName, tags, lokation, ...restProps } = profileUser;

console.log(userName, tag, lokation);
console.log(restProps);
