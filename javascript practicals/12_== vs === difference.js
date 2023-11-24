let a = 20;
let b = "20";

// == is only compaire their value not check their datatype
console.log(a == b); //true
// === is strict compaire this also check datatype
console.log(a === b); // false

let m = []; //this is object thieir value is diff
let n = [];
console.log(m == n); //false
console.log(m === n); //false

let M = undefined;
let N = null;

console.log(M == N, "Null"); //true
console.log(M === N, "Null"); //false
