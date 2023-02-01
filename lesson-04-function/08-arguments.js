// const fn = function () {
// 	console.log(arguments);

// 	const args = Array.from(arguments);
// 	console.log(args);
// };

// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);


// -------------------------------

const fn = function (a, b, c, ...args) {
	console.log(`${a} ${b} ${c}`);
	console.log(args);
};

fn('hello', 1, 2, 3);
fn('aloha', 1, 2, 3, 4, 5);
fn('h1', 1, 2, 3, 4, 5, 6, 7);

// ----------------------------

const add = function (...args) {
	console.log(args);

	let total = 0;

	for (const arg of args) {
		total += arg;
	}

	return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5));


// -------------------------------

const finterNumbers = function (array, ...args) {
	console.log(array);
	console.log(args);
	let uniqueElements = [];

	for (const element of array) {
		console.log(element)
		if (args.includes(element)) {
			uniqueElements.push(element)
		}
	}

	return uniqueElements;
};

console.log(finterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 4, 8));
console.log(finterNumbers([16, 54, 34, 55], 54, 65, 34, 16));
console.log(finterNumbers([100, 200, 300, 400, 500], 4, 64, 200, 54));