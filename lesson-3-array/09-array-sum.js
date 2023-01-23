const array1 = [5, 65, 12, 55];
const array2 = [80, 11, 32];
let total = 0;

const numbers = array1.concat(array2, [44, 16, 91, 11]);

for (const number of numbers) {
   total += number;
}

console.log(total);
