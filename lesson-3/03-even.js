const numbers = [3, 7, 16, 5, 43, 32, 12, 8, 33, 13, 22];
let total = 0;

for (const number of numbers) {
   if (number % 2 !== 0) {
      continue;
   }
   total += number;
}

console.log(total);
