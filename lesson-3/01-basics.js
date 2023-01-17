const friends = ['Mango', 'Piter', 'Romeo', 'Alex', 'Fixik'];
console.table(friends);

friends[2] = 'MAKARON';

console.log(friends[2]);

const lastIndex = friends.length - 1;
console.log(lastIndex);

// -----

const a = [1, 2, 3];
const b = a;

console.log('a', a);
console.log('b', b);

a[0] = 500;

console.log('a', a);
console.log('b', b);

console.log(a === b);
console.log([1, 2, 3] === [1, 2, 3]);

// -----

const names = ['Mango', 'Piter', 'Romeo', 'Alex', 'Fixik'];
console.table(names);
const nLastIndex = names.length - 1;

for (let i = 0; i <= nLastIndex; i += 1) {
   names[i] += '-1';

   console.log(i);
   console.log(names[i]);
}

for (const name of names) {
   console.log('name "for of":', name);
}
