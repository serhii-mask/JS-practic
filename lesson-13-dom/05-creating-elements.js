// --------------

const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Create title JS';
console.log(titleEl);

document.body.appendChild(titleEl); // Добавляє у кінець документу

// --------------

const imageEl = document.createElement('img');
imageEl.src =
   'https://cdn.pixabay.com/photo/2023/01/31/05/59/zebra-7757193_960_720.jpg';
imageEl.alt = 'Zebra';
imageEl.width = 240;
console.log(imageEl);

// document.body.appendChild(imageEl);

// ----------------

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Особистий кабінут';
navLinkEl.href = '/profile';

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

const navEl = document.querySelector('.site-nav__list');
// navEl.appendChild(navItemEl);
navEl.insertBefore(navItemEl, navEl.firstElementChild);
// navEl.insertBefore(navItemEl, navEl.children[1]);

// ----------------

const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);

heroEl.append(titleEl, imageEl);
