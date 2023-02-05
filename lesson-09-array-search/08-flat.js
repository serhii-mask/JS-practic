// Array.prototype.flat(depth)
// Розгладжуе масив до вказаної глибини

const array = [1, 2, [4, [5]], [6, 7, [9]]];
console.log(array.flat());
console.log(array.flat(2));
console.log(array);

// -------------------------------------

// Array.prototype.flatMap(calback)
// Комбінація map + flat

const tweets = [
   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
   { id: '001', likes: 2, tags: ['html', 'css'] },
   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
   { id: '003', likes: 8, tags: ['css', 'react'] },
   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

// const tags = tweets.map(t => t.tags).flat();
const tags = tweets.flatMap(t => t.tags); // Розгладжує на один рівень
console.log(tags);

const tagsStats = tags.reduce(
   (acc, tag) => ({
      ...acc,
      [tag]: acc[tag] ? acc[tag] + 1 : 1,
   }),
   {},
);
console.log(tagsStats);

// Простіший варіант
const starts = tweets
   .flatMap(tweet => tweet.tags)
   .reduce(
      (acc, tag) => ({
         ...acc,
         [tag]: acc[tag] ? acc[tag] + 1 : 1,
      }),
      {},
   );
console.log(starts);
