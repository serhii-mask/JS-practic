// const numbers = [43, 65, 12, 7, 55, 9, 15, 32];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//    if (number < smallestNumber) {
//       smallestNumber = number;
//    }
// }

// console.log(smallestNumber);

const findSmallerNumber = function (numbers) {
	let smallestNumber = numbers[0];

	for (const number of numbers) {
		if (number < smallestNumber) {
			smallestNumber = number;
		}
	}

	return smallestNumber;
}

console.log(findSmallerNumber([54, 45, 444, 5, 65, 12, 41]));
console.log(findSmallerNumber([100, 54, 33, 76, 97, 876, 343]));
console.log(findSmallerNumber([65, 34, 54, 65, 21, 32, 14, 43]));