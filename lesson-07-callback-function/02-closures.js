// ------------------------------------

const fnA = function (parametr) {
   const innerVariable = 'Значення всередині змінної функції fnA';

   const innerFunction = function () {
      console.log(parametr);
      console.log(innerVariable);
      console.log(`Це виклик функції innerFunction`);
   };

   return innerFunction;
};

const fnB = fnA(777);

fnB();

console.log(fnB);

// -----------------------------------

// const madeDish = function (sheffName, dish) {
//    console.log(`${sheffName} готує ${dish}`);
// };

// madeDish('Mango', 'tea');
// madeDish('Mango', 'coffee');
// madeDish('Mango', 'sitro');

// madeDish('Sasha', 'icecream');
// madeDish('Sasha', 'milk');
// madeDish('Sasha', 'chokolate');

const madeSheff = function (name) {
   const madeDish = function (dish) {
      console.log(`${name} готує ${dish}`);
   };

   return madeDish;
};

const mango = madeSheff('Mango');
const sasha = madeSheff('Sasha');

mango('tea');
mango('coffee');
sasha('icecream');
sasha('milk');

// ------------------------------------------

const rounder = function (places) {
   return function (number) {
      return Number(number.toFixed(places));
   };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(4.747656));
console.log(rounder3(4.747656));
console.log(rounder2(7.2554645));
console.log(rounder3(7.2554645));
