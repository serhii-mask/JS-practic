const title = 'Top 10 benefist of React framework';

const normalizeTitle = title.toLowerCase();

const words = normalizeTitle.split(' ');

const slug = words.join('-');

console.log(slug);


// ----------------------------

const slug1 = title.toLowerCase().split(' ').join('-');

console.log(slug1);