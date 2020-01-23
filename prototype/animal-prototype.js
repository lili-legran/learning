function Animal(legs, hasHvost) {
  this.legs = legs;
  this.hasHvost = hasHvost; 
}

Animal.prototype.speak = function() { 
  console.log('speak something');
}

let cat = new Animal(4, true);
let dog = new Animal(4, false);
