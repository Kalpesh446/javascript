// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    document.writeln(i + " ");
  }
  document.writeln("<br>");
}
document.writeln("<br>");
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(j + " ");
  }
  document.writeln("<br>");
}
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

let count = 1;
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j < i; j++) {
    document.write(count++ + " ");
  }
  document.writeln("<br>");
}

//     1
//    2 2
//   3 3 3
//  4 4 4 4
// 5 5 5 5 5

document.write("<br>");

for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    document.write("&nbsp");
  }
  for (let k = 1; k <= i; k++) {
    document.write(i + " ");
  }
  document.writeln("<br>");
}

//     1
//    1 2
//   1 2 3
//  1 2 3 4
// 1 2 3 4 5

for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    document.writeln("&nbsp");
  }
  for (let k = 1; k <= i; k++) {
    document.writeln(k + " ");
  }
  document.writeln("<br>");
}
document.writeln("<br>");
//     1
//    1 2
//   1 2 3
//  1 2 3 4
// 1 2 3 4 5
let count_1 = 1;
for (let i = 0; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    document.writeln("&nbsp;");
  }
  for (let k = 1; k <= i; k++) {
    document.writeln(count_1 + " ");
    count_1++;
  }
  document.writeln("<br>");
}

//     1
//    3 5
//   7 9 11
//  13 15 17 19
// 21 23 25 27 29

let count_2 = 1;
for (let i = 0; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    document.writeln("&nbsp;");
  }
  for (let k = 1; k <= i; k++) {
    document.writeln(count_2 + " ");
    count_2 += 2;
  }
  document.writeln("<br>");
}

// star pattern

// *
// * *
// * * *
// * * * *
// * * * * *
document.write("<br>");
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("*" + " ");
  }
  document.writeln("<br>");
}
document.write("<br>");
for (let i = 1; i <= 5; i++) {
  for (let k = 5; k >= i; k--) {
    document.write("&nbsp;");
  }
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }

  document.writeln("<br>");
}

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

document.write("<br>");
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    document.write("&nbsp");
  }
  for (let k = 1; k <= i; k++) {
    document.write("*" + " ");
  }
  document.writeln("<br>");
}
