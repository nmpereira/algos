let stepsArray = [];
for (let i = 0; i < 100; i++) {
	const array = new Array(Math.floor(10000000)).fill(0).map((_, i) => i);
	// const array = new Array(0).fill(0).map((_, i) => i);
	const element = Math.floor(Math.random() * array.length);
	// const element = 0;
	let steps = 0;
	// console.log(element, array);

	// console.log(array, element);

	const finder = (array, element, start = 0, end = array.length) => {
		steps++;
		// console.log(`Step ${steps}: ${start} - ${end}`);
		if (end < start) return -1;
		let mid = Math.floor((start + end) / 2);
		if (array[mid] === element) return mid;
		if (array[mid] < element) return finder(array, element, mid + 1, end);
		if (array[mid] > element) return finder(array, element, start, mid - 1);
	};

	console.log(
		`${array[
			finder(array, element)
		]} found at index ${element} in ${steps} steps in array with length ${array.length} `
	);

	stepsArray.push(steps);
}

const average = stepsArray.reduce((a, b) => a + b) / stepsArray.length;

console.log(`Average steps: ${average}`);
