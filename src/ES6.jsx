// ES6 - Class

class Car{
    constructor(name){
        this.brand = name;
    }

    present(){
        return `I have a ${this.brand}`;
    }
}

class Model extends Car{
    constructor(name, mod){
        super(name);
        this.model = mod;
    }

    show(){
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

class Header{
    constructor(){
        this.color = "red";
    }
    changeColor = function(){
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
