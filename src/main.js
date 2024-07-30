var prompt = require("prompt-sync")();

const age = prompt("Enter the age");
if (age < 18) {
  console.log("You will get the discount 80 rupees");
} else {
  console.log("No Discount is available");
}

var obj = [
  {
    name: "Mukesh",
    price: 23,
    inStock: true,
  },

  {
    name: "Mukesh2",
    price: 23,
    inStock: true,
  },

  {
    name: "Mukesh3",
    price: 24,
    inStock: true,
  },
];

console.log(obj);

const arr = ["Mukesh", "ashok", "blue", "green"];

arr.push("Bella");
console.log(arr);

let found = arr.find(function (name) {
  return name === "ashok";
});

console.log(found);

let arrray = [2, 24, 34, 566, 32, 20, 222, 1, 2];
