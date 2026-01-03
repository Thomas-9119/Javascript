const user = {
  username : "Raj",
  age : 22,
  signedIn : true, 

  getUserDetaills: function(){
    // console.log(`UserName : ${this.username} `)
    console.log(this)
  }
}

console.log(user.username)
console.log(user.getUserDetaills())