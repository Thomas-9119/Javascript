function User(username,Logininfo,isloggedin){
  this.username=username;
  this.Logininfo=Logininfo;
  this.isloggedin=isloggedin;

  return this
}

const userOne = User("arj",12,true)
console.log(userOne)