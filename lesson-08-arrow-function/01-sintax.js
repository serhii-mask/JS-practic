// Стрілочні функції

const add = function (a, b, c) {
   console.log(a, b, c);
   return a + b + c;
};

const addArrow = (a, b, c) => {
   console.log(a, b, c);
   return a + b + c;
};

const addArrow1 = a => {
   // Якщо параметр один то скобки опускаються
   console.log(a);
   return a;
};

const addArrow2 = () => {
   // Якщо параметра немає то обов'язкові порожні скобки
   console.log();
   return;
};

const addArrow3 = (a, b, c) => a + b + c; // Якщо не потрібно щось логувати, то можна просто повернути результат з ось таким спрощенням

console.log(add(5, 10, 15));

// ------------------------------

const addArguments = function (a, b, c) {
   console.log(arguments);
   // return a + b + c;
};

const addArrowArguments = (...args) => {
   console.log(args);
   // return a + b + c;
};

console.log(addArguments(5, 10, 15));
console.log(addArrowArguments(5, 10, 15));

// -----------------------------------

const fnA = function () {
   return {
      a: 5,
   };
};

console.log(fnA());

const arrowFnA = () => ({ arrowA: 5 }); // Для того щоб з функції повернути об'єкт а не значення

console.log(arrowFnA());
