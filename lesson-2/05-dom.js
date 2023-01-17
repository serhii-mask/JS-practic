const btnAdd = document.querySelector('button[data-add]');
const btnReset = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');

let total = 0;

btnAdd.addEventListener('click', function () {
   console.log('click HoHoho');

   const value = Number(valueInput.value);
   console.log(value);

   total += value;
   outputEl.textContent = total;
   valueInput.value = '';
});

btnReset.addEventListener('click', function () {
   total = 0;
   outputEl.textContent = total;
});
