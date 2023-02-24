// ---------------------------

const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseover', onMouseEnter);  // Спрацьовує коли мишка знаходиться безпосередньо на блоку
// boxRef.addEventListener('mouseout', onMouseLeave);  // Спрацьовує коли мишка знаходиться безпосередньо на блоку

// boxRef.addEventListener('mousemove', onMouseMove); // Відслідковує координати мишки

boxRef.addEventListener('mouseenter', onMouseEnter);
boxRef.addEventListener('mouseleave', onMouseLeave);

function onMouseEnter(event) {
   const box = event.currentTarget;
   box.classList.add('box--active');
}

function onMouseLeave(event) {
   const box = event.currentTarget;
   box.classList.remove('box--active');
}

function onMouseMove(event) {
   console.log(event);
}
