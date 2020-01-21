function User(name) {
  this.name = name;
}
let user = new User('Pete');

let user2 = new user.constructor('John');

console.log(user2.name);