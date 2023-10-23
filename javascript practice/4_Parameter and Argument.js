function multitable(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i} `);
  }
}

multitable(2);

console.log("===== 5 no ghadiyo");
multitable(5);

// multiple parameter and argument

function add(num1, num2, num3) {
  console.log(num1 + num2 + num3);
}

add(200, 100, 400);
