const user = {
  userName: "Raj",
  price: 900,

  welcomeMessage: function () {
    console.log(`${this.userName} , welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage();
user.userName = "Sam";
user.welcomeMessage();
