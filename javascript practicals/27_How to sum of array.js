let arr = [1, 3, 4, 5, 6];
let arr2 = [2, 3, 4, 5, 6];

// one way to reduce method

let c = arr.reduce((prev, curent) => {
  return prev + curent;
});
console.log(c);

// second way to sum array element for loop
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
