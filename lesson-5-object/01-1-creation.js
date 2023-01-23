const x = {};
console.log(x);

console.log({});

const fn = function (myObject) {
   console.log(myObject);
};

fn({ a: 1, b: 2 });

const rtfn = function () {
   return {};
};

// --------------------------

const playlist = {
   name: 'My top playlist',
   rating: 5,
   tracks: ['trek-1', 'trek-2', 'trek-3'],
   trackCount: 3,
};

console.log(playlist);
console.log(playlist.name);
console.log(playlist.tracks);

const propertyNate = 'rating';

console.log(playlist.propertyNate);
console.log(playlist['rating']);
console.log(playlist[propertyNate]);

// --------------------------

const username = 'Martin';
const email = 'martin@gmail.com';
const password = 'ngh45Hgf5v';

const signupDate = {
   username: username,
   email,
   password,
};

console.log(signupDate);

signupDate.age = 22;

console.log(signupDate);

// -------------------------
// <input name="color" value="tomato">

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerDate = {
   [inputName]: inputValue,
};

console.log(colorPickerDate);

// ------------------------

console.log({ x: 1, y: 2 } === { x: 1, y: 2 });

const a = { x: 1, y: 2 };
const b = a;

console.log(a === b);

a.c = 100;

console.log(a);
console.log(b);

// ! ---------------------

const f = [1, 2, 3];

f.hello = ':)';

console.log(f);

// ! --------------------

const fnc = function () {
   console.log('hello');
};

fnc.hello = ':)';

console.dir(fnc);
