const numbers = [43, 65, 12, 7, 55, 9, 15, 32];
let smallestNumber = numbers[0];

for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

console.log(smallestNumber);