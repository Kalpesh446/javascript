let arrNum = [3, 43, 60, 30, 13];

let secondlarge = (arr) => {
  firstmaximum = Math.max(...arr);
  indexarray = arr.indexOf(firstmaximum);
  arr.splice(indexarray, 1);

  secondmaximum = Math.max(...arr);
  return secondmaximum;
};

console.log(secondlarge(arrNum));
