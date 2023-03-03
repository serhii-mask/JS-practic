const refs = {
   parent: document.querySelector('#parent'),
   child: document.querySelector('#child'),
   innerChild: document.querySelector('#inner-child'),
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', oninnerChildClick);

function onParentClick(evt) {
   console.log('onParentClick');
   console.log('onParentClick -> evt.target', evt.target);
   console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
}

function onChildClick(evt) {
   console.log('onChildClick');
   console.log('onChildClick -> evt.target', evt.target);
   console.log('onChildClick -> evt.currentTarget', evt.currentTarget);
}

function oninnerChildClick(evt) {
   console.log('oninnerChildClick');
   console.log('oninnerChildClick -> evt.target', evt.target);
   console.log('oninnerChildClick -> evt.currentTarget', evt.currentTarget);
}
