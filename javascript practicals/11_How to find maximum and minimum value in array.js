let arrNum = [-1, 0, 1, 2, 3, 22, 321];

// math method min and max
let max = Math.max(...arrNum);
console.log(max);

let min = Math.min(...arrNum);
console.log(min);

// maxmimum number
let Maxnum = (arr) => {
  return arr.reduce((prev, curent) => {
    return prev > curent ? prev : curent;
  });
};
console.log(Maxnum(arrNum));

// minimum number
let Minnum = (arr) => {
  return arr.reduce((pre, cure) => {
    return pre < cure ? pre : cure;
  });
};
console.log(Minnum(arrNum));
