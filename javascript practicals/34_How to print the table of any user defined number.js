const table = (number) => {
  for (let i = 1; i <= 10; i++) {
    var res = i * number;
    console.log(`${number} * ${i} = ${res}`);
  }
};
console.log(table(20));
