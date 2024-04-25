let arr1 = [1, 2, 6, 8, 17];
let arr2 = [4, 8, 6, 19, 12, 17];

let unionArr = [...arr1, ...arr2];
console.log([...new Set(unionArr)]);
