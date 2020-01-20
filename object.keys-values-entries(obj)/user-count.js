let user = {
  name: 'John',
  age: 30
};

const count = (user) => {
  return Object.keys(user).length;
}

console.log(count(user)); // 2