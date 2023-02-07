// -------------------------------------

console.log('[] === []: ', [] === []);
console.log('{} === {}: ', {} === {});
console.log(
   'function() {} === function() {}: ',
   function () {} === function () {},
);

const fnA = () => {
   console.log('hello');
};
const fnB = fnA;
console.log('fnB === fnA: ', fnB === fnA);

// -------------------------------------
// Контекст this

const user = {
   tag: 'Mango',
   showTag() {
      console.log('showTag -> this', this);
   },
};

user.showTag();

const foo = function () {
   console.log('foo -> this', this);
};

foo();

// ----------------

const showTag = function () {
   console.log('showTag -> this', this);
   console.log('showTag -> this.tag', this.tag);
};

// showTag();

const user1 = {
   tag: 'Mango',
};

user1.showUserTag = showTag;
console.log('user1', user1);

user1.showUserTag();

// ----------------

const user2 = {
   tag: 'Mango',
   showTag() {
      console.log('showTag -> this', this);
      console.log('showTag -> this.tag', this.tag);
   },
};

user2.showTag();

// const outerShowTag = user2.showTag;

// outerShowTag();

// ----------------

const user3 = {
   tag: 'Mango',
   showTag() {
      console.log('showTag -> this', this);
      console.log('showTag -> this.tag', this.tag);
   },
};

const invokeAction = function (action) {
   console.log(action);

   action();
};

// invokeAction(user3.showTag);

// -------------------------------------
// Training

const makeChangeColor = function () {
   const changeColor = function (color) {
      console.log('changeColor -> this', this);
   };

   const sweater = {
      color: 'teal',
   };

   sweater.updateColor = changeColor;

   return sweater.updateColor;
};

const swapColor = makeChangeColor();

swapColor('blue');

// ----------------
