// -----------------------------

const tagsContainer = document.querySelector('.js-tags');
let selectiveTag = null;

// Вибирає якийсь один елемент, знімаючи клас з активного
// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//    if (evt.target.nodeName !== 'BUTTON') {
//       return;
//    }

//    const currentActiveBtn = document.querySelector('.tags__btn--active');

//    // if (currentActiveBtn) {
//    //    currentActiveBtn.classList.remove('tags__btn--active');
//    // }
//    currentActiveBtn?.classList.remove('tags__btn--active'); // Заміняє if

//    const nextActoveBtn = evt.target;
//    nextActoveBtn.classList.add('tags__btn--active');
//    selectiveTag = nextActoveBtn.dataset.value;

//    console.log(selectiveTag);
// }

// -----------------------------

// Вибирає декілька елементів
tagsContainer.addEventListener('click', onTagsContainerClick);
const selectedTags = new Set();

function onTagsContainerClick(evt) {
   const btn = evt.target;

   if (btn.nodeName !== 'BUTTON') {
      return;
   }

   const tag = btn.dataset.value;
   const isActive = btn.classList.contains('tags__btn--active');

   if (isActive) {
      selectedTags.delete(tag);
   } else {
      selectedTags.add(tag);
   }

   btn.classList.toggle('tags__btn--active');

   // selectedTags.add(btn.dataset.value);
   console.log(selectedTags);
}
