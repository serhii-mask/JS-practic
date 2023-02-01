const stars = 4;
let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такої кількості зірок немає');
// }

// console.log(price);

switch (stars) {
   case 1:
      price = 20;
      break;

   case 2:
      price = 30;
      break;

   case 3:
      price = 50;
      break;

   case 4:
      price = 70;
      break;

   case 5:
      price = 120;
      break;

   default:
      console.log('Такої кількості зірок немає');
}

console.log(price);

// ------------------------

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 50;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такої кількості зірок немає');
// }

// console.log(price);

switch (stars) {
   case 1:
   case 2:
      price = 20;
      break;

   case 3:
   case 4:
      price = 50;
      break;

   case 5:
      price = 120;
      break;

   default:
      console.log('Такої кількості зірок немає');
}

console.log(price);

// -------------------------

const option = 2;
let message = '';

switch (option) {
   case 1:
      message = 'Товар можна забрати з 12:00 в нашому офісі';
      break;

   case 2:
      message = 'Курєр доставить замовлення завтра з 9:00 по 18:00';
      break;

   case 3:
      message = 'Посилка буде відправлена сьогодні';
      break;

   default:
      message = 'Вам зателефонує менеджер';
}

console.log(message);
