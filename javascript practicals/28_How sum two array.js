let arr1 = [2, 5, 8, 9, 6];
let arr2 = [10, 10, 30, 50, 20];
let result = [];

// one way to sum two array for loop
for (let i = 0; i < arr1.length; i++) {
  result.push(arr1[i] + arr2[i]);
}
console.log(result);

// second way to sum two array
let sumOftwoArr = arr1.map((ele, ind) => ele + arr2[ind]);

console.log(sumOftwoArr);
