// array=> move all 0s to the end of the array=> preserve order of other elements
// not sorted array
// elements can be any datatype
// 0s will be ints
// will always be a int 0

// [1,2,0,0,'a','b','c',true]
// [1,2,'a','b','c',true,0,0]

// ['0',0,1,2,3,'a','b','c','0']
// ['0',1,2,3,'a','b','c','0',0]

// [0]=>[0]
// ['0',0]=>['0',0]

// for loop (input array){
// if(elem==0) push into array && splice from input

// }
// take newArray push it at the end of input array

const zeroPusher = (array) => {
	let newArray = [];
	let counter = 0;
	let arrayCopy = array;
	for (let i = 0; i < arrayCopy.length; i++) {
		if (arrayCopy[i] === 0) {
			// counter++;
			newArray.push(arrayCopy[i]);
			arrayCopy.splice(i, 1);
			i--;
		}
	}
	arrayCopy.push(...newArray);

	return arrayCopy;
};

// console.log(zeroPusher([ 1, 0, 2, 3, 4, 5 ]));
// console.log(zeroPusher([ '0', 0, 1, 2, 3, 'a', 'b', 'c', '0' ]));
// console.log(zeroPusher([ 1, 2, 0, 0, 0, 'a', 'b', 'c', true ]));
// console.log(zeroPusher([ 0 ]));
// console.log(zeroPusher([ 0, 1, 0, 0, 0, 0, 0, 2, 3, 4, 5, 0 ]));
