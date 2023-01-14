// Оператор розгалуження if

if (5 > 10) {
    console.log('Pro');
}
console.log('ProPropro');


// Оператор розгалуження if...else

if (5 > 10) {
    console.log('Tak');
} else {
    console.log('Inskshe');
}


// Оператор розгалуження else...if

const salary = 1000;

if (salary < 500) {
    console.log('level 1');
} else if (salary > 500 && salary < 1500) {
    console.log('level 2');
}


// Тернарний оператор

const balance = -1000;
let message;

if (balance >= 0) {
    message = 'Позитивний баланс';
} else {
    message = 'Негативний баланс';
}

const messageTer = balance >= 0 ? 'Позитивний баланс' : 'Негативний баланс';

console.log(message);
console.log(messageTer);