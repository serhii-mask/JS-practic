const playlist = {
   name: 'My top playlist',
   rating: 5,
   tracks: ['trak-1', 'trak-2', 'trak-3'],
   trackCount: 3,
   getName: function () {
      //  Метод об'єкта
      console.log('Hello!');
   },
};

console.log(playlist);

playlist.getName();
