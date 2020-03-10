function findNeedle(haystack) {
  let index;
    haystack.forEach((el, i) => {
      if (el === 'needle') {
        index = i;
      }
    });
    return 'found the needle at position ' + index;
  }
  