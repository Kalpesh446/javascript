let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

let evenNum = arrNum.filter((item) => {
  return item % 2 === 0;
});
console.log("evenNum ====", evenNum);

let oddNum = arrNum.filter((item) => {
  return item % 2 !== 0;
});
console.log("oddNum ==== ", oddNum);
