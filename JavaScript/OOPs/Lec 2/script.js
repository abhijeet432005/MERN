function Toffee(name){
    this.name = name;
}

Toffee.prototype.price = 10
Toffee.prototype.SayHello = () => {
    console.log("Eat me")
}

let t1 = new Toffee("Dairy milk")
let t2 = new Toffee("5 Star")


class Employee{

    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}

Employee.prototype.printDetails = function() {
    console.log(
        `Hello my name is ${this.name} and my age is ${this.age}, and my salary is ${this.salary}`
    )
}

let e1  = new Employee("Abhi", 5, 100000)