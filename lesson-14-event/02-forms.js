// ------------------

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
   event.preventDefault();

   const formData = new FormData(event.currentTarget);

   formData.forEach((value, name) => {
      console.log(value);
      console.log(name);
   });

   // console.dir(event.currentTarget.elements.subscroption.value);
   console.log('Це відправка форми');
   console.log(formData);
}
