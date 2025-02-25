// Q1

// var age = Number(prompt("Enter your age"));
// if(age<18){
//     console.log("you are minor");
// }
// else if(age > 18 && age < 60){
//     console.log("you are an adult")
// }

// else{
//     console.log("you are an senior citizen")
// }


// ***********************************************************************************************************


// Q2

// var num1 = Number(prompt("Enter the number 1"));
// var num2 = Number(prompt("Enter the number 2"));

// var num3 = num1 + num2;

// if (num3 % 2 == 0){
//     console.log("Even")
// }

// else{
//     console.log("Odd")
// }


// ***********************************************************************************************************

// Q3

// var char = prompt("Enter the character ");

// if (char >= 'A' && char <= 'Z'){
//     console.log('upperCase')
// }
// else if(char >= 'a' && char <= 'z'){
//     console.log('LoweCase')
// }
// else{
//     console.log('Please enter the right character')
// }


// ***********************************************************************************************************


// Q4

// var a = Number(prompt("Enter the number 1"));
// var b = Number(prompt("Enter the number 2"));
// var c = Number(prompt("Enter the number 3"));

// // console.log('Greater is :',Math.max(a,b,c))

// if(a>b && a>c){
//     console.log('1 is Greater :', a)
// }
// else if(b>a && b>c){
//     console.log('2 is Greater :', b)
// }

// else{
//     console.log('3 is Greater :', c)
// }



// ***********************************************************************************************************

// Q5

// var a = Number(prompt("Enter the Year"));

// if(a%4 == 0){
//     console.log("leap year")
// }

// else{
//     console.log("not")
// }


// ***********************************************************************************************************


// Q6

// var a = Number(prompt("Enter the number 1"));
// var b = Number(prompt("Enter the number 2"));
// var op = prompt("Enter the operator(+,-,*,/)");

// if(op == '+'){
//     console.log(a+b)
// }
// else if(op == '-'){
//     console.log(a-b)
// }
// else if(op == '*'){
//     console.log(a*b)
// }
// else if(op == '/'){
//     console.log(a/b)
// }



// ***********************************************************************************************************


// Q7

// var a = Number(prompt("Enter the number 1"));

// if (a>0){
//     console.log("positive");
// }

// else if(a<0){
//     console.log("negative")
// }

// else{
//     console.log("Equal to zero")
// }


// ***********************************************************************************************************


// Q8

// var username = prompt("Enter your name ");
// var time = Number(prompt("Enter time (24-hr-Format) "));


// if(time >= 5 && time <= 12 ){
//     console.log("Good Morning", username)
// }
// else if(time >= 12 && time <= 17 ){
//     console.log("Good Afternoon", username)
// }
// else if(time >= 17 && time <= 21 ){
//     console.log("Good Evening", username)
// }
// else if(time >= 21 && time <= 24 ){
//     console.log("Good Night", username)
// }


// ***********************************************************************************************************


// Q9

// var color = prompt("Enter the color (red,yellow,green)");

// if(color == 'red'){
//     console.log("stop")
// }
// else if(color == 'yellow'){
//     console.log("Get ready")
// }
// else{
//     console.log("go")
// }



// ***********************************************************************************************************


// Q10

// var x = Number(prompt("Enter the number "));

// for(let i = 1; i <= 10; i++){
//     console.log(`${x} * ${i} = ${x*i}`);
// }


// ***********************************************************************************************************


// Q11

// var x = Number(prompt("Enter your number "));
// if(x >= 90 && x <=100){
//     console.log("grade : A")
// }

// else if(x >= 80 && x <=89){
//     console.log('grade : B')
// }

// else if (x >= 70 && x <=79){
//     console.log('grade : C')
// }

// else if(x >= 60 && x <=69){
//     console.log('grade : D')
// }

// else{
//     console.log('grade : F')
// }


// ***********************************************************************************************************


// Q12

// const username = 'abhi2005';
// const password = 'a@123';0

// var x = prompt("Enter your name ");
// var y = prompt("Enter your password");

// if(x == username){
//     if(y == password){
//         console.log("successful")
//     }
//     else{
//         console.log("incorrect passwaord")
//     }
// }
// else{
//     console.log("incorrect username")
// }


// ***********************************************************************************************************


// Q13

// var a = Number(prompt("Enter number"));
// var b = Number(prompt("Enter number"));

// console.log(`Initia a : ${a} , b : ${b}`)

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(`After Swapping => a : ${a} , b : ${b}`)



// ***********************************************************************************************************


// Q13


// var a = Number(prompt("Enter the number "));

// if(a % 3 == 0 && a % 5 == 0){
//     console.log('FizzBuzz');
// }

// else if(a % 3 == 0){
//     console.log('fizz');
// }

// else{
//     console.log('Buzz');
// }



// ***********************************************************************************************************


// Q13

var x = Number(prompt("Enter the number "));
var p = 0; 
var s = 0;

while(x != 0){
    p = x % 10;
    s = (s * 10) + p;
    // x = (x - (x%10))/10;
    x = x / 10; 
}

console.log(s)