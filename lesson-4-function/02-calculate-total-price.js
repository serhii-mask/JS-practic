// const cart = [54, 64, 24, 154, 54, 66, 8, 43];
// let total = 0;

// for (const value of cart) {
// 	total += value;
// }

// console.log('total: ', total);


// -------------------------------------------

const calculateTotalPrice = function (items) {
	console.log('Всередині функції ', items);

	let total = 0;

	for (const item of items) {
		total += item;
	}

	return total;
};

const r1 = calculateTotalPrice([5, 6, 22]);

console.log(r1);  // 33
console.log(calculateTotalPrice([34, 65, 123, 76]));  // 298
console.log(calculateTotalPrice([65, 87, 0]));  // 152