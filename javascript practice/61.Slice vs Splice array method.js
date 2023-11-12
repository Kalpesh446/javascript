let arr = ["kalpesh", "jalebi", "fafda", "pandya", "lalji"];
//         -5,           -4,      -3,     -2,       -1

let Arr = [1, 2, 3, 4, 5, 6];
let Newarr = Arr.slice(2, 4);
console.log(arr);
console.log(Newarr);
// ====================slice ====================
// let arr1 = arr.slice(1, 3); //starting point, and ending point of array in splice like pieace of cake (tukdo)
// console.log(arr1);
// let arr2 = arr.slice(-4, -2);
// console.log(arr);
// console.log(arr2);

//===================== splice ====================
let arr1 = arr.splice(-2, 2, "jamun", "liliya");
console.log(arr);
console.log(arr1);
