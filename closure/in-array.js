let arr = [1, 2, 3, 4, 5, 6, 7];

const inArray = (arr) => {
  return function (x) {
    return arr.includes(x);
  }
}

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2
