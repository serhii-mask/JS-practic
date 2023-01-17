let totalSpent = 1700;
let payment = 500;
let discount = 0;

if (totalSpent >= 100 && totalSpent < 1000) {
   console.log('Бронзовий партнер, знижка 2%');
   discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
   console.log('Срібний партнер, знижка 5%');
   discount = 0.05;
} else if (totalSpent >= 5000) {
   console.log('Золоки партнер, знижка 10%');
   discount = 0.1;
} else {
   console.log('Не партнер, знижка 0%');
}

payment = payment - payment * discount;

console.log(
   `Оформлюємо замовлення на суму ${payment} зі знижкою ${discount * 100}%`,
);

totalSpent += payment;
console.log(`Загальна потрачена сума в магазині ${totalSpent}`);
