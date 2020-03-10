function multipleOfIndex(array) {
  let newArr = [];
    array.forEach((el, i) => {
      if (el % i === 0) {
        newArr.push(el);
      }
      
    });
    return newArr;
  }
  