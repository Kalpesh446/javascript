let arr1 = [2, 45, 6, 7, 8, 8, 8, 8];
let arr2 = [12, 33, 45, 7, 8];

let interSectionArr = arr1.filter((ele) => {
  return arr2.includes(ele);
});

console.log([...new Set(interSectionArr)]);
