// ------------------------------

const fnA = function (message, callback) {
   console.log(message);

   console.log(callback);
   callback(100);
};

const fnB = function (number) {
   console.log('Log in function fnB', number);
};

fnA('Hello!', fnB);

// -------------------------

const doMath = function (a, b, callback) {
   const result = callback(a, b);

   console.log(result);
};

// const add = function (x, y) {
//    return x + y;
// };

// const sub = function (x, y) {
//    return x - y;
// };

// doMath(2, 3, add);
// doMath(10, 7, sub);

doMath(2, 3, function (x, y) {
   return x + y;
});
doMath(10, 7, function (x, y) {
   return x - y;
});

// --------------------------

const buttonRef = document.querySelector('.js-button');

const handleBtnClick = function () {
   console.log('Click on button');
};

buttonRef.addEventListener('click', handleBtnClick);

// ---------------------------

const onGetPositionSuccess = function (position) {
   console.log(position);
};

const onGetPositionError = function (error) {
   // console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
   onGetPositionSuccess,
   onGetPositionError,
);

// ---------------------------

const filter = function (array, test) {
   const filteredArray = [];

   for (const el of array) {
      // console.log(el);
      // console.log(test(el));
      if (test(el)) {
         filteredArray.push(el);
      }
   }

   return filteredArray;
};

const callback1 = function (value) {
   return value >= 3;
};

console.log(filter([1, 2, 3, 4, 5], callback1));

console.log(
   filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (value) {
      return value <= 5;
   }),
);

const fruits = [
   { name: 'apples', quantity: 200, isFresh: true },
   { name: 'grapes', quantity: 150, isFresh: false },
   { name: 'bananas', quantity: 100, isFresh: true },
];

console.log(
   filter(fruits, function (fruit) {
      return fruit.quantity >= 120;
   }),
);

console.log(
   filter(fruits, function (fruit) {
      return fruit.isFresh === false;
   }),
);
