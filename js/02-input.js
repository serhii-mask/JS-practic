// Методи взаємодії з користувачем windows.confirm() та windows.prompt()

const shouldRenew = confirm('Бажаєте продовжити підписку?');
console.log(shouldRenew);

let quantity = prompt('Скільки Вам повних років?');
console.log(quantity);
console.log(typeof quantity);

console.log('"Number()" перетворює тип інформації у число');

quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);