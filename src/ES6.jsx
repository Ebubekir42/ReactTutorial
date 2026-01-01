// ES6 - Class

class Car {
    constructor(name) {
        this.brand = name;
    }

    present() {
        return `I have a ${this.brand}`;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }

    show() {
        return `${this.present()}, it is a ${this.model}`;
    }
}

const mycar = new Model("Ford", "Mustang");
const text = mycar.show();

// ES6 - Arrow Function
const hello = () => {
    return "Hello World";
}
const hello2 = () => "Hello World";
const hello3 = val => `Hello ${val}`;
const hello4 = (val1, val2) => `Hello ${val1}, ${val2}`;

class Header {
    constructor() {
        this.color = "red";
    }
    changeColor = function () {
        document.getElementById("root").innerHTML += this;
    }

    changeColor2 = () => {
        document.getElementById("root").innerHTML += this;
    }
}

const myHeader = new Header();
window.addEventListener("load", myHeader.changeColor); // object Window
window.addEventListener("load", myHeader.changeColor2); // object Object

document.getElementById("btn").addEventListener("click", myHeader.changeColor); // object HTMLButtonElement
document.getElementById("btn").addEventListener("click", myHeader.changeColor2); // object Object

// ES6 - Variables
for (let i = 0; i < 3; i++) {
    var val;
    let val2;
    const val5 = "text";
    val3 = "text3";
    val4 = "text4";
}
val = "text";
var val3 = "text";
let val4 = "text";
const val6 = "text";

// ES6 - Array map()
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2);

// ES6 - Destructing
const vehicles = ['mustang', 'f-150', 'expedition'];
// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
// new way
const [car2, truck2, suv2] = vehicles;
const [car3, , suv3] = vehicles;

const dateInfo = (dat) => {
    const d = dat.getDate();
    const m = dat.getMonth() + 1;
    const y = dat.getFullYear();

    return [d, m, y];
};
const [date, month, year] = dateInfo(new Date());

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};
let { firstName, country = "Norway" } = person;

const person2 = {
    firstName2: "John",
    lastName2: "Doe",
    age2: 50,
    car: {
        brand: 'Ford',
        model: 'Mustang',
    }
}
let { firstName2, car: { brand } } = person2;

// ES6 - Spread Operator
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
const [one, two, ...rest] = numbersCombined;

const car4 = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const car_more = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}
const mycar2 = { ...car4, ...car_more };