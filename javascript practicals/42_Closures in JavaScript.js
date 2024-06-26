// Closures
var sum = function (a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree: function () {
      return a + b + c;
    },
  };
};

var store = sum(3, 4, 5);
console.log(store.getSumTwo());
console.log(store.getSumThree());

var store1 = sum(7, 8, 9);
console.log(store1.getSumTwo());
console.log(store1.getSumThree());
