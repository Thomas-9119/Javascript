const promiseOne = new Promise(function(resolve, reject){
  //Do async tasks
  setTimeout(function(){
    console.log("Task is created")
    resolve()
  },1000)
})

promiseOne.then(function(){
  console.log("Promise consumed")
})

new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("async task 2")
    resolve()
  },1000)
}).then(function(){
  console.log("async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username: "Raj", class:6})
  },1000)
})

promiseThree.then(function(user){
  console.log(user)
})


const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true
    if(!error){
      resolve({username: "JS",pass:123})
    }else{
      reject('ERROR: JS WENT WRONG')
    }
  },1000)
})

promiseFive.then