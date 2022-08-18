// string=> case insensitive => palendrome
// racecar=>true
// madam
// RaceCar=>valid?
// abcdef!=fedecba=>false
// ""=>true
// race car => rac ecar=>false

// bool=> true or false =>type bool

// ""=>true
// convert string to lowercase
// reverse the string
// compare that with the original string
// time O(n) | space O(n)

const validPalendrome = (str) => {
  if (str.length <= 1) return true;
  str = str.toLowerCase();
  const reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) return true;
  return false;
};

const validPalendrome2 = (str) => {
  if (str.length <= 1) return true;
  str = str.toLowerCase();
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  if (str === reversedStr) return true;
  return false;
};

// console.log(validPalendrome2('racecar'));
// console.log(validPalendrome2('abcdef'));
// console.log(validPalendrome2('RaceCar'));
// console.log(validPalendrome2(''));

// p1 =>str[0]
// p2=>str[str.length-1]
// lowercase both p1 and p2
// compare p1, p2
// p1>=p2, stop the loop, return true
// p1!=p2, return false

const validPalendrome3 = (str) => {
  console.log(str);
  if (str.length <= 1) return true;
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    // console.log({ i });
    // if (left >= right) return true;
    if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;

  // if (str === reversedStr) return true;
  // return false;
};
// console.log(validPalendrome3('racecar'), 'true');
// console.log(validPalendrome3('abcdef'));
// console.log(validPalendrome3('RaceCar'));
// console.log(validPalendrome3('abccba'));
// console.log(validPalendrome3('1abccba1'));
// console.log(validPalendrome3('abcba'));
// console.log(validPalendrome3(''));

const validPalendrome4 = (str) => {
  // stopping condition
  // recurse
};
