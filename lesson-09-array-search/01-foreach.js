// Array.prototype.forEach(callback (currentValue, endex, array), thisArg)
// Поелементно перебирає масив, нічого не повертаючи. Заміна for

const numbers = [5, 10, 15, 20, 25, 30];

numbers.forEach(
   function (number, index, array) {
      console.log('number ', number);
      console.log(this);
   },
   { a: 5, b: 10 },
);

numbers.forEach(number => {
   console.log('number ', number);
});
