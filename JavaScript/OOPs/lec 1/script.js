// Gahr = {
//     city: "Delhi",
//     floor: 3,
//     kitchen: 2

// }
// console.log(Gahr.city)


// this is old concept using constructor whien there is no concept of classes in javaScript

// function Gahr(){
//     this.city = "Delhi"
//     this.floor = 3
//     this.bathroom = 2
//     this.kitchen = 1
// }

// let home = new Gahr()
// console.log(home.bathroom)
// console.log(home.city)


// function Toffee(flavour, price, expiry){
//     this.flavour = flavour;
//     this.price = price;
//     this.expiry = expiry;
// }

// let t1 = new Toffee("Vanilla", 20, "26 June")
// let t2 = new Toffee("Chocolate", 10, "28 Sept")
// let t3 = new Toffee("Strawberry", 50, "31 Dec")








// ***********************************************************************************************************************

// using class 

// when we use class to create an object, then we also have to create Constructor that always runs first in class 

class Toffee{
    constructor(flavour, price, expiry){
        this.flavour = flavour;
        this.price = price;
        this.expiry = expiry;
    }
}

let t1 = new Toffee("vanilla", 10, "30 DEC")                // the bracket after Toffee runs the constructor 