// ----------------

// window.addEventListener('keyup', onKeypress); //  Реагує на нажимання любої клавіши
// window.addEventListener('keydown', onKeypress); //  Реагує на нажимання любої клавіши
// window.addEventListener('keypress', onKeypress); //  Реагує на нажимання клавіши символ, не реагує на службові клавіши

const refs = {
   output: document.querySelector('.js-output'),
   clearBtn: document.querySelector('.js-clear'),
};

window.addEventListener('keypress', onKeypress);
refs.clearBtn.addEventListener('click', onCleareOutput);

function onKeypress(event) {
   // console.log(event.key);
   // console.log(event.code);

   refs.output.textContent += event.key;
}

function onCleareOutput() {
   refs.output.textContent = '';
}
