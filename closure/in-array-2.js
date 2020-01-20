let arr = [1, 2, 3, 4, 5, 6, 7];

const inArray = (arr) => {
  return function (x) {
    for (let i = 0; i < arr.length; i++) {
      if (x === arr[i]) {
        return x;
      }
    }

  }
}

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
