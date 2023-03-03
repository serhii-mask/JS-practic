// ------------------

// const input = document.querySelector('.js-input');
// const nameLable = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

const refs = {
   input: document.querySelector('.js-input'),
   nameLable: document.querySelector('.js-button > span'),
   licenseCheckbox: document.querySelector('.js-license'),
   btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);

refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change', onLicenleChange);

function onInputFocus() {
   console.log('Інпут отримати фокус події focus');
}

function onInputBlur() {
   console.log('Інпут втратити фокус події blur');
}

function onInputChange(event) {
   console.log(event.currentTarget.value);
   refs.nameLable.textContent = event.currentTarget.value;
}

function onLicenleChange(event) {
   console.log(event.currentTarget.checked);
   console.log(refs.btn.disabled);

   refs.btn.disabled = !event.currentTarget.checked;
}
