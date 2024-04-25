let arr1 = [2, 4, 5, 6, 7, 8, 11];
let arr2 = [8, 7, 6, 5, 4, 2, 11];

const isArrsame =
  arr1.length === arr2.length &&
  arr1.every((curEle) => {
    if (arr2.indexOf(curEle) > -1) {
      return (curEle = [arr2.indexOf(curEle)]);
    }
  });

console.log(isArrsame);
