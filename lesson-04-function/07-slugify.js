const slugify = function (string) {
	return string.toLowerCase().split(' ').join('-');
}

console.log(slugify('Top 10 benefist of React framework'));