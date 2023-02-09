// Object.create()
// [[Prototype]] та __proto__
// Object.getPrototypeOf()

const objA = {
   x: 1,
};

const objB = {
   y: 2,
};

const objC = {
   z: 3,
};

console.log(objA);
console.log(objA.hasOwnProperty('x'));
console.log(objA.hasOwnProperty('y'));
