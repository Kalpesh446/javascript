for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(i);
  }
  document.write("<br>");
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(j);
  }
  document.write("<br>");
}

let count = 1;
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= i; j++) {
    document.write(count + " ");
    count++;
  }
  document.write("<br>");
}

for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    document.write("&nbsp;");
  }
  for (let k = 1; k <= i; k++) {
    document.write(i + " ");
  }
  document.write("<br>");
}

for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    document.write("&nbsp;");
  }
  for (let k = 1; k <= i; k++) {
    document.write(k + " ");
  }
  document.write("<br>");
}

let count1 = 1;
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    document.write("&nbsp;");
  }
  for (let k = 1; k <= i; k++) {
    document.write(count1 + " ");
    count1++;
  }
  document.write("<br>");
}
