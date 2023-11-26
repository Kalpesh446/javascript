let arrNum = [1, 3, 5, 6, 10, 12, 13];

let sumArr = (arr) => {
  return arr.reduce((prev, curent) => {
    return prev + curent;
  });
};
console.log(sumArr(arrNum));
