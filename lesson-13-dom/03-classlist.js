const magicBtn = document.querySelector('.js-magic-btn');

// -------------------------

const bodyEl = document.querySelector('body');
console.log(bodyEl.classList);

// magicBtn.addEventListener('click', () => {
//    bodyEl.classList.remove('lite');
//    bodyEl.classList.add('dark', 'tems');
//    console.log(bodyEl.classList);
// });

// Якщо є такий клас то видалить його, а якщо немає то добавить
magicBtn.addEventListener('click', () => {
   bodyEl.classList.toggle('dark');
});

// Перезаписує клас
// bodyEl.classList.replace('lite', 'qwerty');

// Перевіряє наявність даноо классу
console.log(bodyEl.classList.contains('qwerty'));

console.log(document);
