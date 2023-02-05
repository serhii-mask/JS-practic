const numbers = [1, 9, 6, 2, 3];

const array = numbers
   .filter(num => num > 2)
   .map(num => num * 3)
   .sort((a, b) => a - b);
console.log(array);

// ------------------------------------

const players = [
   { id: 'id-1', name: 'Mango', rank: 310, online: false },
   { id: 'id-2', name: 'Poly', rank: 470, online: true },
   { id: 'id-3', name: 'Kiwi', rank: 230, online: true },
   { id: 'id-4', name: 'Ajax', rank: 150, online: false },
   { id: 'id-5', name: 'Chelsy', rank: 80, online: true },
];

const onlineAndSorted = players
   .filter(player => player.online)
   .sort((a, b) => a.rank - b.rank);
console.log(onlineAndSorted);

// ----------------------------------------

const element = {
   class: '',
   hovered: false,
   changeClass(cls) {
      this.class = cls;

      return this;
   },
   toggleHovered() {
      this.hovered = !this.hovered;

      return this;
   },
};

element.toggleHovered().changeClass('open');
console.log(element);
