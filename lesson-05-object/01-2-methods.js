const playlist = {
   name: 'My top playlist',
   rating: 5,
   tracks: ['track-1', 'track-2', 'track-3'],
   // getName: function () {
   //    //  Метод об'єкта
   //    console.log('Hello!');
   // },

   getName() {
      //  Метод об'єкта
      console.log('Hello!');
   },

   changeName(newName) {
      console.log('Всередині чендж: ', this);
      this.name = newName;
   },

   addTrack(track) {
      this.tracks.push(track);
   },

   updateRating(newRating) {
      this.rating = newRating;
   },

   getTrackCount() {
      return this.tracks.length;
   },
};

console.log(playlist);

playlist.getName();

playlist.changeName('New name');
console.log(playlist);

console.log(playlist.getTrackCount());

playlist.addTrack('track-4');
console.log(playlist);

playlist.updateRating(10);
console.log(playlist);

console.log(playlist.getTrackCount());
