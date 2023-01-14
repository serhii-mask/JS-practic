// Приведення до булю на прикладі Boolean(value)

console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(false));

// Вся решта буде TRUE!!!
console.log(Boolean(54.665));
console.log(Boolean(-5));
console.log(Boolean('Hello World'));
console.log(Boolean('false'));


// Логічне І (оператор &&)
// Зупиняється на неправді (false) та повертає значення на якому зупинилось
// Iнакше вертає останнє значення

console.log(5 && 8 && 'hello') && 66;
console.log(453 && 0 && 'hello');


// Логічне АБО (оператор ||)
// Зупиняється на правді (true) та повертає значення на якому зупинилось

console.log(6 || 'hello' || 655 || 0);
console.log(false || 0 || 10 || null || 'hello');


// Логічне НІ (оператор !)
// Виконує інверсію

console.log(!false);
console.log(!0);
console.log(!true);
console.log(!'hello');