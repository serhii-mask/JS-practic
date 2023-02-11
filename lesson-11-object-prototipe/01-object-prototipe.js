// Object.create()
// [[Prototype]] та __proto__
// Object.getPrototypeOf()

const objA = {
   x: 1,
};
console.log(objA);
console.log(objA.hasOwnProperty('x'));
console.log(objA.hasOwnProperty('y'));

const objB = Object.create(objA);
objB.y = 5;
console.log(objB);
console.log(objB.y);
console.log(objB.x);

const objC = Object.create(objB);
objC.z = 3;
console.log(objC.x);
console.log(objC.hasOwnProperty('x'));

objC.x = 1000;

console.log('objC ', objC);
console.log(objC.hasOwnProperty('z'));
console.log(objC.hasOwnProperty('x'));
console.log(objC.hasOwnProperty('y'));
