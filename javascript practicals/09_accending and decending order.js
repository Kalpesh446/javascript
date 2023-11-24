let array = [22, 45, 12, 5, 1, -2, -1, 7, 2, 20];

let sortArr = (array) => {
  array.sort((a, b) => a - b);
  return array;
};

let decendArr = (array) => {
  array.reverse();
  return array;
};

console.log(sortArr(array));
console.log(decendArr(array));
