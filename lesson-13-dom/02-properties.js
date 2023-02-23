const magicBtn = document.querySelector('.js-magic-btn');

// -----------------------

const imageEl = document.querySelector('.hero__image');
console.log(imageEl);
console.log(imageEl.src);

const titleEl = document.querySelector('.hero__title');
console.log(titleEl.textContent);

magicBtn.addEventListener('click', () => {
   // titleEl = 'I with girl';
   imageEl.src =
      'https://images.pexels.com/photos/4180194/pexels-photo-4180194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
   imageEl.alt = 'I and girl';

   titleEl.textContent = 'I and girl';
});

// -----------------------
// Атрибути
// get()
// set()
// remove()
// has()

console.log(imageEl.getAttribute('alt'));
console.log(imageEl.hasAttribute('alt'));
imageEl.setAttribute('alt', 'I am setAttribute');
console.log(imageEl);
imageEl.removeAttribute('alt');
console.log(imageEl);

console.log(imageEl.hasAttribute('alt'));
console.log(imageEl.hasAttribute('src'));

// ----------------------

const actions = document.querySelectorAll('.js-actions button');
console.log(actions);
console.log(actions[0].dataset.action);
console.log(actions[1].dataset.action);
