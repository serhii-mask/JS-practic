const logins = ['pot555kk', 'gff43kks1', 'qwer455y5', '58rrttg333'];
const loginToFind = 'qwer455y5';
let message = `Користувач ${loginToFind} не знайдено.`;

// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Користувач ${loginToFind} знайдено.`;
//         break;  // Зупиняє весь цикл перебору!!!
//     }
// }

// console.log(message);


// --------------------------

if (logins.includes(loginToFind)) {
    message = `Користувач ${loginToFind} знайдено.`;
}

console.log(message);


// ----------------------------

const mess = logins.includes(loginToFind)
    ? `Користувач ${loginToFind} знайдено.`
    : `Користувач ${loginToFind} не знайдено.`;

console.log(mess);