// ---------------
// Chatty events
// Приклади throtting та debouncing з Lodash

// Mousemove та throttle

const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

window.addEventListener('mousemove', _.throttle(onMouseMove, 500));

function onMouseMove(event) {
   mouseMoveCbInvocationCounter += 1;

   coordsOutputRef.textContent = `Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter}, X: ${event.clientX}, Y: ${event.clientY}`;
}

const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCouter = 0;

inputRef.addEventListener('input', _.debounce(onInputChange, 300));

function onInputChange(event) {
   inputCbInvocationCouter += 1;

   outputRef.textContent = `Кількість викликів onInputChange: ${inputCbInvocationCouter}, Значення: ${event.target.value}`;
}
