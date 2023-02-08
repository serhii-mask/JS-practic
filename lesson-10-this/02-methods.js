// call та apply

const showThis = function (a, b, c) {
   console.log(a, b, c);
   console.log('showThis -> this', this);
};

console.dir(showThis);

showThis();

const objA = {
   a: 5,
   b: 10,
};

showThis.call(objA, 5, 1, 1);
showThis.apply(objA, [5, 1, 1]);

const objB = {
   x: 657,
   y: 55,
};

showThis.call(objB, 1, 1, 2);
showThis.apply(objB, [1, 1, 2]);

// -----------------------------------

const changeColor = function (color) {
   console.log('changeColor -> this', this);
   // this.color = color;
};

const hat = {
   color: 'black',
};

// changeColor.call(hat, 'orange');
// console.log(hat);

const sweeter = {
   color: 'green',
};

// changeColor.call(sweeter, 'black');
// console.log(sweeter);

// -----------------------------------
// bind

const changeHatColor = changeColor.bind(hat);
console.log(changeHatColor);

const changeSweeterColor = changeColor.bind(sweeter);
console.log(changeSweeterColor);

changeColor();
changeHatColor();
changeSweeterColor();

console.log(sweeter);
