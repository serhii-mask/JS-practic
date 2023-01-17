// Цикл for

for (let i = 0; i <= 5; i += 1) {
   console.log(i);
}

console.log('hello');

// Pre-increment та Post-increment   ZLO

for (let i = 0; i <= 5; i++) {
   console.log(i);
}

console.log('world');

// ----------------------

const minSalery = 500;
const maxSalery = 5000;
const employees = 3;
let totalSalery = 0;

for (let i = 1; i <= employees; i += 1) {
   const salery = Math.round(
      Math.random() * (maxSalery - minSalery) + minSalery,
   );
   console.log(`ЗП робітника номер ${i} - `, salery);
   totalSalery += salery;
}

console.log(totalSalery);

// -----------------------

const min = 6;
const max = 13;
let total = 0;

/*
for (let i = min; i <= max; i += 1) {
   if (i % 2 === 0) {
      console.log(i);
      total += i;
   }
}

console.log('total ', total);
*/

for (let i = min; i <= max; i += 1) {
   if (i % 2 !== 0) {
      continue;
   }
   console.log(i);
   total += i;
}

console.log('total ', total);
