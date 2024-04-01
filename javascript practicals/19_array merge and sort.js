const arr1 = ["1", "2", "3", "4"];
const arr2 = ["3", "1", "5", "0"];

// copy array
const mergeArr = [...arr1, ...arr2];
console.log(mergeArr);

const mergeArr2 = arr1.concat(arr2);
console.log(mergeArr2);

// sort array
const sortArr = mergeArr.sort(function (a, b) {
  return a - b;
});
console.log(sortArr);
