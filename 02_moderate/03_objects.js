// singleton

// Object.literals

// object literals

const mySym = Symbol("key1");

const jsUser = {
  name: "Rajparno",
  FullName: "Rajparno Dhar",
  [mySym]: "mykey1",
  age: 18,
  location: "Bengal",
  email: "dharrajparno@gmail.com",
  isLOggedIn: false,
  lastLoginDays: ["mon", "Tue"],
};

console.log(jsUser["email"]);
console.log(jsUser["FullName"]);
console.log(jsUser.mySym);

jsUser.email = "ReshmiPaul";
jsUser.email = "ReshmiPaul";

console.log(jsUser);

jsUser.email = "Sumona";
console.log(jsUser);

jsUser.greetting = function () {
  console.log("hello js user");
};

jsUser.greettingTwo = function () {
  console.log(`hello js user ${this.name}`);
};
console.log(jsUser.greetting());
console.log(jsUser.greettingTwo());
