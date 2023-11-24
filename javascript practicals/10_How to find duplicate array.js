// const array = [1, 3, 4, 2, 1, 4, 6, 4, 3];

const duplicateArr = array.filter((ele, ind, arr) => {
  return arr.indexOf(ele) !== ind;
});
console.log(duplicateArr);

let array = [2, 3, 4, 2, 3, 10, 11, 20, 10, 30, 40, 20];

let dublicateArr = array.filter((ele, ind, arr) => arr.indexOf(ele) !== ind);
console.log(dublicateArr);
