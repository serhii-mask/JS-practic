// Визначення довжини рядка length
const message = 'Тут скількись символів.';
console.log(message.length);


// Конкатенація
const firstName = 'Garry';
const lastName = 'Solomia';

console.log(firstName + ' loves ' + lastName);
console.log(`${firstName} loves ${lastName}`);

// Нормалізація методом toLowerCase(), toUpperCase()

const brand = 'SamsUng';

const normalizeBrand = brand.toLowerCase()
const normalizeUpBrand = brand.toUpperCase()

console.log(normalizeBrand);
console.log(normalizeUpBrand);

// Пошук в рядку, метод includes()

const blacklistedWord1 = 'spam';
const blacklistedWord2 = 'nospam';

const mes = 'No my spammm and my noSpam'

console.log(mes.includes(blacklistedWord1));
console.log(mes.includes(blacklistedWord2));

console.log(mes.toLowerCase().includes(blacklistedWord2));