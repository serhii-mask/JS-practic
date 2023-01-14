const x1 = 10;
const x2 = 30;

const number = 25;

console.log(`Число ${number} попадає у відрізок до ${x1}?`, number < x1);
console.log(`Число ${number} попадає у відрізок після ${x2}?`, number > x2);
console.log(`Число ${number} попадає у відрізок від ${x1} до ${x2}?`, number > x1 && number < x2);
console.log(`Число ${number} попадає у відрізок до ${x1} або після ${x2}?`, number < x1 || number > x2);