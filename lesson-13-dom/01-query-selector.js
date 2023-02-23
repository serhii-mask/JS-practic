const magicBtn = document.querySelector('.js-magic-btn');
console.log(magicBtn);

magicBtn.addEventListener('click', () => {
   const navEL = document.querySelector('.site-nav__link');
   console.log(navEL);

   const navELAll = document.querySelectorAll('.site-nav__link');
   console.log(navELAll);
});
