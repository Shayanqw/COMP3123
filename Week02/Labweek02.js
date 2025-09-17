const people = ["Randy", "Rick", "Hulk"];
const greet = name => `Hello, ${name}👋`;
console.log("list of guests :" + people);

for (const names of people) {
  console.log(greet(names));
}
//
console.log("--------------------------------------------------\n ");

//Question 2
const capitalize = str => {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize("javascript")); // "Javascript"
console.log(capitalize("hello"));      // "Hello"
console.log(capitalize("comp3123"));   // "Comp3123"
console.log(capitalize("fooBar"));          // "Foobar"
console.log(capitalize("nodeJs"));               // "Nodejs"

// question 2 version 2 whic is more suited for ES6 i think:
const capitalizes = ([first = '', ...rest]) => {
  if (!first) return ''; // handle empty string
  return first.toUpperCase() + rest.join('').toLowerCase();
};

console.log(capitalizes("javascript")); // "Javascript"
console.log(capitalizes("hello"));      // "Hello"
console.log(capitalizes("comp3123"));   // "Comp3123"
console.log(capitalizes("fooBar"));          // "Foobar"
console.log(capitalizes("nodeJs"));               // "Nodejs"

console.log("--------------------------------------------------\n ");
//Question 3

const colors = ["red", "green", "blue", "yEllOw", "pUrpLe"];

const capColors = ([first = '', ...rest]) => {
  if (!first) return ''; 
  return first.toUpperCase() + rest.join('').toLowerCase();
};

const capitalizedColors = colors.map(capColors);

console.log(capitalizedColors);
// ["Red", "Green", "Blue", "Yellow", "Purple"]

console.log("--------------------------------------------------\n ");

//Question 4

const values = [1, 60, 34, 30, 20, 5];
const filteredValues = values.filter(num => num < 20);
console.log(filteredValues); // [1, 5]

console.log("--------------------------------------------------\n ");

//Question 5

const array = [1, 2, 3, 4];
const calculateSum = arr => arr.reduce((acc, num) => acc + num, 0);
const calculateProduct = arr => arr.reduce((acc, num) => acc * num, 1);

console.log(calculateSum(array));     // 10
console.log(calculateProduct(array)); // 24
console.log("--------------------------------------------------\n ");

//Question 6
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, batteryCapacity) {
    super(make, model, year);
    this.batteryCapacity = batteryCapacity;
  }

  getCarInfo() {
    return `${super.getCarInfo()} with a battery capacity of ${this.batteryCapacity} kWh`;
  }
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.getCarInfo()); // "2020 Toyota Corolla"

const myElectricCar = new ElectricCar("Tesla", "Model S", 2021, 100);
console.log(myElectricCar.getCarInfo()); // "2021 Tesla Model S with a battery capacity of 100 kWh"
console.log("--------------------------------------------------\n ");


