function sayMyName() {
  console.log("B");
  console.log("U");
  console.log("B");
  console.log("U");
}
// sayMyName()

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
addTwoNumbers(5, 7);
// console.log(result)

function logInUserMessage(username) {
  if (!username) {
    console.log("leora nam enter kor");
  }
  return `${username} logged in`;
}
console.log(logInUserMessage("Rajparno"));
console.log(logInUserMessage());

function calculatePrice(val1, val2, ...num1) {
  //rust operator
  return num1;
}
console.log(calculatePrice(2, 8, 9));

const user = {
  username: "Raj",
  price: 19,
};
function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}
handleObject(user);
