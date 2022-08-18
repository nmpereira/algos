// difference func=> sub 1 list from another=> return result
// remove all vals from A that are present in B while keeping the other
// 2 arrays=> if elem is in B, all occurances should be removed from A
// sub B from A every time

// arrays of ints
// can be empty array
// always sorted

// a=[1,2,2,2,3]
// b=[2]
// [1,3]

// a=[1,1,2,2,2,3]
// b=[1,2]
// [1,3]

// a=[1,2,3,4,5]
// b=[1,1,5]
// [2,3,4]

// a=[1,2,3,4,5]
// b=[]
// [1,2,3,4,5]

// a=[]
// b=[1,2,3,4,5]
// []

// a=[]
// b=[]
// []

// a=[1,2,3]
// b=[1,2,3]
// []

/*
// a=[1,2,3]
// b=[1,2,5]
// [3]
hash={
1:true,
2:true,
3:false
}
[3]

for loop (a) => hash
for loop (b) => check in hash, flip the value
check hash=>convert all false values into array
*/

// n=> greater of arrA.length, arrB.length
const subArray = (arrA, arrB) => {
	if (arrA.length == 0) return [];
	let hash = {};
	// let resultArr = [];
	// for (let i = 0; i < arrA.length; i++) {
	// 	// time & space O(n)
	// 	hash[arrA[i]] = false;
	// }
	for (let j = 0; j < arrB.length; j++) {
		//time O(n) & space O(1)
		if (hash.hasOwnProperty(arrB[j])) {
			hash[arrB[j]] = true;
		} else {
			hash[arrB[j]] = false;
		}
	}

	// for (let i in hash) {
	// 	if (hash[i] == false) resultArr.push(i); //time O(n) & space O(N)
	// }
	console.log(hash);
	// return resultArr;
};
// console.log(subArray([ 1, 2, 2, 2, 3 ], [ 2 ]));
// console.log(subArray([ 1, 1, 2, 2, 2, 3 ], [ 1, 2 ]));
// console.log(subArray([ 1, 2, 3, 4, 5 ], [ 1, 1, 5 ]));

const subArray2 = (arrA, arrB) => {
	return arrA.filter((elem) => arrB.indexOf(elem) == -1);
};

console.log(subArray2([ 1, 2, 2, 2, 3 ], [ 2 ]));
console.log(subArray2([ 1, 1, 2, 2, 2, 3 ], [ 1, 2 ]));
console.log(subArray2([ 1, 2, 3, 4, 5 ], [ 1, 1, 5 ]));
