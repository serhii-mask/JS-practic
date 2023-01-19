const logins = ['fghyt564', 'qwe345tf', '65gt754g', 'mjti48ke'];
// const loginToFind = '65gt754g';

// const mess = logins.includes(loginToFind)
//    ? `Користувач ${loginToFind} знайдено.`
//    : `Користувач ${loginToFind} не знайдено.`;

// console.log(mess);

// const findLogin = function (allLogins, loginToFind) {
// 	const mess = allLogins.includes(loginToFind)
//    ? `Користувач ${loginToFind} знайдено.`
//    : `Користувач ${loginToFind} не знайдено.`;
// 	return mess;
// };

const findLogin = function (allLogins, loginToFind) {
	return allLogins.includes(loginToFind)
   ? `Користувач ${loginToFind} знайдено.`
   : `Користувач ${loginToFind} не знайдено.`;
};

console.log(findLogin(logins, 'gfdtritui44'));
console.log(findLogin(logins, 'fgfg'));
console.log(findLogin(logins, '65gt754g'));
console.log(findLogin(logins, 'fddgr5445t45t45'));