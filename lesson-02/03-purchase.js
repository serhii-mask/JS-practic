let balance = 5000;
const payment = 1500;

if (balance >= payment) {
   balance -= payment;
   console.log('Все чудово, покупка здійснюється!');
   console.log(`На вашому рахунку лишилось ${balance}`);
} else {
   console.log('Недостатньо коштів на рахунку!');
}

console.log('Операція завершена');
