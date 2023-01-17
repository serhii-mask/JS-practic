const cart = [54, 7, 135, 23, 80, 44, 9, 78, 91];
let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// };

// console.log(total);

for (const value of cart) {
   total += value;
}

console.log(total);

// -----------------

for (let i = 0; i < cart.length; i += 1) {
   cart[i] = Math.round(cart[i] * 1.1);
}

console.log(cart);
