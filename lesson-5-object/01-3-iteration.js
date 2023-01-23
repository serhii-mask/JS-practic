// Перебор через for...in та Object.keys:value:entrles

const feedback = {
   good: 5,
   neutral: 10,
   bad: 3,
};

const keys = Object.keys(feedback);
console.log(keys);

for (const key of keys) {
   console.log(key);
   console.log(feedback[key]);
}

const values = Object.values(feedback);
console.log(values);

let totalFeedback = 0;

for (const value of values) {
   totalFeedback += value;
}

console.log('totalFeedback: ', totalFeedback);
