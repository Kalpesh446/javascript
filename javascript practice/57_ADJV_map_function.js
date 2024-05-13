// before map fun using for loop

let arr = [2, 3, 4, 5, 6];
// [4,6,8,10,12]
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
  arr1[i] = arr[i] * 2;
}
console.log(arr1);

// map function with annonymus function
let arr2 = arr.map(function (val) {
  return val * 2;
});
console.log(arr2);

// map function with arrow function
let arr3 = arr.map((val) => val * 2);
console.log(arr3);
