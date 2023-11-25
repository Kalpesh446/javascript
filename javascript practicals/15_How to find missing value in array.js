let arrNum = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 15];
let missingArr = [];

let missingValue = (arr) => {
  let maxVal = Math.max(...arr);
  let minVal = Math.min(...arr);

  for (let i = minVal; i < maxVal; i++) {
    if (arr.indexOf(i) < 0) {
      missingArr.push(i);
    }
  }
  return missingArr;
};
console.log(missingValue(arrNum));
