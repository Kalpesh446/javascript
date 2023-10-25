let x = Math.PI;
console.log(x);

let y = Math.round(4.1); //4.5 k tethi uppar hoi to 5 batave and 4.5 thi ochi hoi to 4
console.log(y);

let z = Math.ceil(4.1); // 1 point upper j batave
console.log(z);

let x1 = Math.floor(4.9); // lower batave je 4.1 hoi k 4.9 hoi 4 j batave
console.log(x1);

let x2 = Math.trunc(5.2); // remove points
console.log(x2);

let y1 = Math.floor(Math.random() * 7) + 1;
console.log(y1);

function name(max, min) {
  let x = Math.floor(Math.random() * (max - min) + min);
  return x;
}
console.log(name(25, 15));
