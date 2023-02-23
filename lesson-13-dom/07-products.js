import products from './products.js';

console.log(products);

// --------------------------------

const product = {
   name: 'Privodu',
   description:
      'Jkds fjgr g sfjkd jk lsdfkef dsfkj dslfj vvjae oiojfv jvdfewj oija;af fdlkf',
   price: 2000,
   available: true,
   onSale: true,
};

const makeProductCard = ({ name, description, price }) => {
   const productEl = document.createElement('article');
   productEl.classList.add('product');

   const nameEl = document.createElement('h2');
   nameEl.textContent = name;
   nameEl.classList.add('product__name');

   const descrEl = document.createElement('p');
   descrEl.textContent = description;
   descrEl.classList.add('product__descr');

   const priceEl = document.createElement('p');
   priceEl.textContent = `Ціна ${price} гривень`;
   priceEl.classList.add('Product__price');

   productEl.append(nameEl, descrEl, priceEl);

   return productEl;
};

const elements = products.map(makeProductCard);

console.log(elements);

const productsContainerEl = document.querySelector('.js-products');
productsContainerEl.append(...elements);
