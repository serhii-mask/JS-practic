const cards = ['Card-1', 'Card-2', 'Card-3', 'Card-4', 'Card-5'];

console.table(cards);

const cardToRemove = 'Card-3';
const index = cards.indexOf(cardToRemove);
console.log(index);

cards.splice(index, 1);

console.table(cards);

// ------------------
const cardToInsert = 'Card-6';
const indx = 3;

cards.splice(indx, 0, cardToInsert);

console.table(cards);

// ------------------
const cardToUpdate = 'Card-7';

cards.splice(indx, 1, cardToUpdate);

console.table(cards);
