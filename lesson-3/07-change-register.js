const string = 'JavaScript Best Lenguage!';
const letters = string.split('');
let inversString = '';

console.log(letters);

for (const letter of letters) {

    // if (letter === letter.toLowerCase()) {
    //     inversString += letter.toUpperCase();
    // } else {
    //     inversString += letter.toLowerCase();
    // }

    // -----------------

    inversString += 
        letter === letter.toLowerCase() 
            ? letter.toUpperCase() 
            : letter.toLowerCase();
}

console.log(inversString);