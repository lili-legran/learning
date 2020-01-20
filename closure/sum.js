const sum = (a) => {
  return (b) => a + b;
}

console.log(sum(3)(4));