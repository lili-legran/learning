let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const topSalary = (salaries) => {
  let maxSalary = 0;
  let name = null;

  for (let [keys, values] of Object.entries(salaries)) {
    if (values > maxSalary) {
      maxSalary = values;
      name = keys;
    }
  }
  console.log(name);
  return name;
}

topSalary(salaries);