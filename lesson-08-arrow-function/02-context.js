// -----------------------------------
const showThis = () => {
   console.log('this in showThis', this);
};

showThis();

const user = { name: 'Mango' };
user.showContent = showThis;

user.showContent();

// ---------------------------------

const user1 = {
   fullName: 'Mango',
   showName() {
      console.log('this', this);
      console.log('this.fullName: ', this.fullName);

      const inner = () => {
         console.log('this in inner: ', this);
      };

      inner();
   },
};

user1.showName();

// ---------------------------------

// const user2 = {
//    fullName: 'Mango',
//    showName: () => {
//       console.log('this', this);
//       console.log('this.fullName: ', this.fullName);
//    },
// };

// user2.showName();

// --------------------------------

const objA = {
   x: 5,
   showX() {
      console.log(this.x);

      const objB = {
         y: 10,
         showThis: () => {
            console.log('this in objB.showThis: ', this);
         },
      };

      objB.showThis();
   },
};

objA.showX();
