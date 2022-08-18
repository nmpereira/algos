//  input 2 int, 1st being smaller than 2nd one, can be neg
//  output: array between them, including those numbers, array of ints
//  -100,100 =>(bounds)

// example:
// (1,5)=>[1,2,3,4,5]=
// (-5,-3)=>[-5,-4,-3]=>3
// (-5,3)=>[-5,-4,-3,-2,-1,0,1,2,3]=>9

// for loop, starting from a, all the way to b.
// push iters of the loop into array,at every iteration
// time O(n) | space O(n)

const numIter = (a, b) => {
	const arr = [];
	for (let i = a; i <= b; i++) {
		arr.push(i);
	}
	return arr;
};

console.log(numIter(-5, 3));
