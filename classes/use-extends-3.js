class Animal {
  constructor(legs, hasHvost) {
    this.legs = legs;
    this.hasHvost = hasHvost;
  }
  speak() {
    return 'speak something';
  }
}

class Fish extends Animal {
  constructor(head) {
    super(0, true);
    this.head = head;
  }
  swim() {
    console.log('bul-bul!');
  }
}

let cat = new Animal(4, true);
let fish = new Fish(0, true, 1);
fish.swim();
console.log(fish.legs, fish.speak());