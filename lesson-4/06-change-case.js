// const string = 'JavaScript Best Lenguage!';
// const letters = string.split('');
// let inversString = '';

// for (const letter of letters) {

//    inversString +=
//       letter === letter.toLowerCase()
//          ? letter.toUpperCase()
//          : letter.toLowerCase();
// }

// console.log(inversString);

const changeCase = function (string) {
	const letters = string.split('');
	let inversString = '';

	for (const letter of letters) {

		inversString +=
			letter === letter.toLowerCase()
				? letter.toUpperCase()
				: letter.toLowerCase();
	}

	return inversString;
}

console.log(changeCase('JavaScript Best Lenguage!'));
console.log(changeCase('Mark fRaNK!'));
console.log(changeCase('KaRl MaRcS!'));