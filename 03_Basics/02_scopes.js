//global scope
var c = 300;
let a = 400;
if (true) {
  //block scope
  let a = 10;
  const b = 20;
  var c = 30;
  console.log(a);
}

console.log(a);
// console.log(b);
console.log(c);

function one() {
  const userName = "Raj";
  function two() {
    const website = "Youtube";
    console.log(userName);
  }
  // console.log(website)

  two();
}
one();

if (true) {
  const userName = "raj";
  if (userName === "raj") {
    const website = "You";
    console.log(userName + website);
  }
  // console.log(website)
}
// console.log(userName)

function addOne(num) {
  return num + 1;
}
console.log(addOne(5));
