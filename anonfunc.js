const count = (array) => {
	let hash = {};
	for (let i = 0; i < array.length; i++) {
		if (hash[array[i]]) {
			hash[array[i]]++;
		} else {
			hash[array[i]] = 1;
		}
	}
	console.log(hash);
	for (const key in hash) {
		if (hash[key] === 1) {
			return key;
		}
	}
};

console.log(count([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 4, 5 ]));
