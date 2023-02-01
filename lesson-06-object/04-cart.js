const cart = {
   items: [],
   getItems() {
      return this.items;
   },
   add(product) {
      for (const item of this.items) {
         if (item.name === product.name) {
            item.quantity += 1;
            return;
         }
      }

      const newProduct = {
         ...product,
         quantity: 1,
      };
      return this.items.push(newProduct);
   },
   remove(productName) {
      const { items } = this;

      for (let i = 0; i < items.length; i += 1) {
         if (productName === items[i].name) {
            console.log('Найшли, його індекс: ', i);
            items.splice(i, 1);
         }
      }
   },
   clear() {
      this.items = [];
   },
   countTotalPrice() {
      const { items } = this;
      let total = 0;

      for (const { price, quantity } of items) {
         total += price * quantity;
      }

      return total;
   },
   increaseQuantity(productName) {
      const { items } = this;
      for (const item of items) {
         console.log(item.name);
         if (productName === item.name) {
            console.log(item.quantity);
            item.quantity += 1;
            return;
         }
      }
   },
   decreaseQuantity(productName) {
      const { items } = this;
      for (const item of items) {
         console.log(item.name);
         if (productName === item.name) {
            console.log(item.quantity);
            item.quantity -= 1;
            return;
         }
      }
   },
};

console.table(cart.getItems());

cart.add({ name: 'apple', price: 40 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'lemon', price: 60 });
cart.add({ name: 'orange', price: 70 });
cart.add({ name: 'starwberry', price: 110 });
cart.add({ name: 'starwberry', price: 110 });
cart.add({ name: 'starwberry', price: 110 });
console.table(cart.getItems());

cart.remove('apple');
console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.increaseQuantity('orange');
cart.increaseQuantity('orange');
cart.increaseQuantity('apple');

console.table(cart.getItems());
console.log('Total: ', cart.countTotalPrice());

cart.decreaseQuantity('starwberry');
cart.decreaseQuantity('lemon');

console.table(cart.getItems());
console.log('Total: ', cart.countTotalPrice());
