// Парс числа з Number.parseInt() та Number.parseFloat()

let elementWidth = '50.55px';
const result = Number.parseInt(elementWidth);

console.log(result);
console.log(typeof result);

let elementHeight = '125.13px';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight: ', elementHeight);
console.log(typeof elementHeight);

// Для роботи з грошима використовують toFixed(), медот не заокруглює а відсікає
let salary = 1200.6677;
console.log(salary.toFixed());
console.log(salary.toFixed(2));

console.log(typeof salary.toFixed());
salary = Number(salary.toFixed(2));
console.log(typeof salary);


// Приведення до числа з допомогою Number(value)
// NaN (Not a Number) та метод Number.isNaN(value)

let queantity = '30';
let value = 'Цей рядок не можливо перевести у число';

console.log('True: ', Number(true));
console.log('False: ', Number(false));
console.log('Queantity: ', Number(queantity));
console.log('Value: ', Number(value));


// Всі медоти медоду Math математичних операцій
console.log(Math);

console.log('Math.PI: ', Math.PI);
console.log('Math.pow(2, 5): ', Math.pow(2, 5));

// Генерація рандомного числа за допомогою Math.random()
console.log(Math.random());

const min = 1;
const max = 100;

console.log(Math.random() * (max - min) + min);
// Плюс математичне заокруглення
const resul = Math.round(Math.random() * (max - min) + min);

console.log(resul);