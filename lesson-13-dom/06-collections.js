// ------------------
const colorPickerOptions = [
   { lable: 'red', colob: '#F44336' },
   { lable: 'green', colob: '#4CAF5B' },
   { lable: 'blue', colob: '#2196F3' },
   { lable: 'grey', colob: '#69708B' },
   { lable: 'pink', colob: '#E91E63' },
   { lable: 'indigo', colob: '#3F51B5' },
];

const colorPickerOptionsEl = document.querySelector('.js-color-piker');

// const elements = [];

// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//    const option = colorPickerOptions[i];

//    const buttonEl = document.createElement('buttom');
//    buttonEl.type = 'button';
//    buttonEl.textContent = option.lable;
//    buttonEl.style.backgroundColor = option.colob;

//    elements.push(buttonEl);
// }
// console.log(elements);

// ------

// const elements = colorPickerOptions.map(option => {
//    const buttonEl = document.createElement('buttom');
//    buttonEl.type = 'button';
//    buttonEl.textContent = option.lable;
//    buttonEl.style.backgroundColor = option.colob;

//    return buttonEl;
// });

// colorPickerOptionsEl.append(...elements);

// -------------------------

const makeColorPickerOptions = options => {
   return options.map(option => {
      const buttonEl = document.createElement('buttom');
      buttonEl.type = 'button';
      buttonEl.textContent = option.lable;
      buttonEl.style.backgroundColor = option.colob;

      return buttonEl;
   });
};

const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerOptionsEl.append(...elements);
