const counter = {
   value: 0,
   increment() {
      console.log('increment -> this', this);
      this.value += 1;
   },

   decrement() {
      console.log('decrement -> this', this);
      this.value -= 1;
   },
};

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');

decrementBtn.addEventListener('click', () => {
   counter.decrement();
   valueEl.textContent = counter.value;
});
incrementBtn.addEventListener('click', () => {
   counter.increment();
   valueEl.textContent = counter.value;
});

console.log(window);
