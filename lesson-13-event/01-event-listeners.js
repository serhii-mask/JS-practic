const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listened');
const removeListenerBtn = document.querySelector('.js-remove-listened');

// targetBtn.addEventListener('click', handleTargetButtonClick);

// function handleTargetButtonClick() {
//    console.log('click');
// }

// function targetButtonClickHandler() {
//    console.log('click');
// }

// function onTargetButtonClick() {
//    console.log('click');
// }

addListenerBtn.addEventListener('click', () => {
   console.log(event);
   console.log('Вішаю відслідковувач на кнопку');

   targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', () => {
   console.log(event);
   console.log('Знімаю відслідковувач на кнопку');

   targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick() {
   console.log(event);
   console.log('Click по цільовій кнопці');
}
