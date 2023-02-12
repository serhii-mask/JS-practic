const Car = function ({ brand, model, price } = {}) {
   this.brand = brand;
   this.model = model;
   this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
   this.price = newPrice;
};

Car.description = 'Клас описуючий автомобіль';

Car.logInfo = function (carObj) {
   console.log('Car.logInfo -> carObj ', carObj);
};

const car = new Car({ brand: 'Audi', model: 'Q5', price: 35000 });

// --------------------------------------------------------------

class Car1 {
   static description = 'Клас описуючий автомобіль';
   static logInfo(carObj) {
      console.log('Car1.logInfo -> carObj ', carObj);
   }

   #test = 'test'; // Приватна власнивість

   constructor({ brand, model, price } = {}) {
      this._brand = brand;
      this._model = model;
      this._price = price;
   }

   set model(newModel) {
      this._model = newModel;
   }

   get model() {
      return this._model;
   }

   set price(newPrice) {
      this._price = newPrice;
   }

   get price() {
      return this._price;
   }
}

console.dir(Car1);

console.log(Car1.description);

const carInstrance = new Car1({
   brand: 'Audi',
   model: 'Q5',
   price: 35000,
});

console.log(carInstrance);
carInstrance.model = 'RS7';
carInstrance.price = 125000;
console.log(carInstrance);

Car1.logInfo(carInstrance);

console.log(carInstrance.model);
console.log(carInstrance);
