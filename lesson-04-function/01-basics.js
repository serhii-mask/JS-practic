const add = function (a, b) {
	console.log(a);
	console.log(b);
	console.log("Виклик функції add.")
	return a + b;
};

const z = add(4, 5);
console.log(z);

// -------------------


const fn = function () {
	console.log(1);

	console.log(2);

// return 'Hello!';

	console.log(3);
};

console.log(fn());