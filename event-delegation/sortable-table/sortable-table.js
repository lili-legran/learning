let grid = document.querySelector('#grid');

class Table {
  constructor(elem) {
    this.elem = elem;
    this.body = elem.querySelector('tbody');
    let rows = this.body.querySelectorAll('tr');
    let array = [];
    rows.forEach(el => {
      let fields = el.querySelectorAll('td');
      let age = Number(fields[0].innerText);
      let name = fields[1].innerText;
      let user = {
        age,
        name
      }
      array.push(user);
    });
    this.array = array;

    elem.onclick = this.onClick.bind(this);
  }
  age() {
    let newArray = this.array.sort((a, b) => {
      return a.age - b.age;
    });
    this.draw(newArray);
  }
  name() {
    let newArray = this.array.sort((a, b) => {
      return a.name.charCodeAt() - b.name[0].charCodeAt();
    });
    this.draw(newArray);
  }
  draw(arr) {
    this.body.innerHTML = '';
    arr.forEach(el => {
      let newTR = document.createElement('tr');
      let ageTD = document.createElement('td');
      ageTD.innerText = el.age;
      newTR.appendChild(ageTD);
      let nameTD = document.createElement('td');
      nameTD.innerText = el.name;
      newTR.appendChild(nameTD);
      this.body.appendChild(newTR);
    });
  }
  onClick(event) {
    let type = event.target.dataset.type;
    if (type) {
      this[type]();
    }
  }
}
new Table(grid);

