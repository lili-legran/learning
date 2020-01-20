let calculator = new Calculator();

function Calculator() {
  this.read = function () {
    this.a = prompt('a?', '');
    this.b = prompt('b?', '');
  };
  this.sum = function () {
    return this.a + this.b;
  }
  this.mull = function () {
    return this.a * this.b;
  };
}

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());
