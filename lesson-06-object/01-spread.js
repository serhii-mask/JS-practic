// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

const numbers = [1, 2, 3, ...[4, 5, 6], 777, ...[7, 8, 9]];

console.log(numbers);

// --------------------------

const temps = [14, 24, 16, 12, 8, 23, 27];

console.log(Math.max(temps));
console.log(Math.max(...temps));
console.log(Math.min(...temps));

// --------------------------

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

console.log(allTemps);

// * ---------------------------

const a = { x: 1, y: 2, g: { hello: 'world' } };
const b = { x: 5, z: 3 };

// const c = Object.assign({}, a, b);

const c = { ...a, x: 0, ...b, y: 20 };

console.log(c);
