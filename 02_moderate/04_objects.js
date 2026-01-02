// const tinderUser = new Object();
// console.log(tinderUser);
// tinderUser.id = "12345";
// tinderUser.name = "Rajparno";
// tinderUser.isLoggedin = false;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedin"));

// const regularUser = {
//   email: "sumonahotttt",
//   fullname: {
//     userfullName: { userfull: "sumona", title: "Sex" },
//   },
// };
// console.log(regularUser.fullname);

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };
// // const obj3 = {obj1,obj2}

// // const obj3 =Object.assign(obj1,obj2)
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const course = {
  courseName : "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

const {courseInstructor : instructor} = course //object destructure
console.log(instructor)

// {
//   "name":"hitesh",
//   "course": "js in hindi",
//   "price":"free"
// }