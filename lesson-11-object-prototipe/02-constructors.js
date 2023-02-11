const Car = function ({ brand, model, price } = {}) {
   // console.log(config);
   // const { brand, model, price } = config;

   this.brand = brand;
   this.model = model;
   this.price = price;

   // this.changePrice = function (newPrice) {
   //    this.price = newPrice;
   // };
};

Car.prototype.sayHl = function () {
   console.log('Car.prototype.sayHl -> this ', this);
   console.log('Hello!');
};

Car.prototype.changePrice = function (newPrice) {
   this.price = newPrice;
};

console.log(Car.prototype);

// Якщо функція викликається через оператор new, створюється порожній об'єкт
const myCar = new Car({ brand: 'Audi', model: 'Q5', price: 35000 });
console.log(myCar);
// myCar.sayHl();
myCar.changePrice(25000);
console.log(myCar);

const myCar1 = new Car({ brand: 'BMW', model: 'X5', price: 10000 });
console.log(myCar1);
// myCar1.sayHl();

const myCar2 = new Car({ brand: 'Audi', model: 'RS7', price: 125000 });
console.log(myCar2);
// myCar2.sayHl();

// -----------------------------------

const User = function ({ email, password } = {}) {
   this.email = email;
   this.password = password;
};

User.prototype.changeEmail = function (newEmail) {
   this.email = newEmail;
};

const mango = new User({ email: 'my-email@gmail.com', password: 12316542 });
console.log(mango);

mango.changeEmail('mu-new-email@gmail.com');
console.log(mango);
