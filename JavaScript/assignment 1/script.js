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


// Q14


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


// Q15

// var x = Number(prompt("Enter the number "));
// var p = 0; 
// var s = 0;

// while(x != 0){
//     p = x % 10;
//     s = (s * 10) + p;
//     // x = (x - (x%10))/10;
//     x = parseInt(x / 10); 
// }

// console.log(s)



// ***********************************************************************************************************


// Q16

// var x = Number(prompt("Enter the number "));
// var p = 0; 
// var s = 0;

// while(x != 0){
//     p = x % 10;
//     s = s + p;
//     x = parseInt(x / 10); 
// }

// console.log(s)


// ***********************************************************************************************************


// Q17

// var x = Number(prompt("Enter the number "));
// var y = x;
// var p = 0; 
// var s = 0;

// while(x != 0){
//     p = x % 10;
//     s = (s*10) + p;
//     x = parseInt(x / 10); 
// }

// if(s == y){
//     console.log('it is palindrome')
// }


// else{
//     console.log('it is not palindrome')
// }

// console.log(s)



// ***********************************************************************************************************


// Armstrong

// var x = Number(prompt("Enter the number "));
// var y = x;
// var p = 0; 
// var s = 0;

// while(x != 0){
//     p = x % 10;
//     s = (s+(p*p*p));
//     x = parseInt(x / 10); 
// }

// if (s == y){
//     console.log("armstrong")
// }

// else{
//     console.log("not armstrong")

// }

// console.log(s)





// for (let x = 1; x <= 1000; x++ ){
//     var y = x;
//     var s = 0;
//     var p = 0; 
//     while(y != 0){
//         p = y % 10;
//         s = (s+(p*p*p));
//         y = parseInt(y / 10); 
//     }

//     if(s == x ){
//         console.log("Armstrong", x)
//     }
// }



//***********************************************************************************************************


// Q19

// var a = Number(prompt("Enter the number 1"));
// var b = Number(prompt("Enter the number 2"));
// var c = Number(prompt("Enter the number 3"));

// if(a>b && a>c){
//     console.log('1 is Greater :', a)
// }
// else if(b>a && b>c){
//     console.log('2 is Greater :', b)
// }

// else{
//     console.log('3 is Greater :', c)
// }




//***********************************************************************************************************


// Q21

// var x = Number(prompt("Enter the number "));
// var count = 0;
// while(x != 0){
//     let Digit = x % 10;
//     if(Digit % 2 == 0){
//         count++;
//     }

//     x = parseInt(x/10);

// }

// console.log(count);



//***********************************************************************************************************


// Q24

// var word = ["zero","one","two","three","Four","five","six", "seven","Eight","nine","ten"];
// var x = Number(prompt("Enter the number "));

// if(x >= 0 && x <= 9){
//     console.log(x,word[x]);
// }

// else{
//     console.log("worng input");
// }



//***********************************************************************************************************


// Q22

// var age = Number(prompt("Enter your age"));


// if(age < 18){
//     console.log("Not Eligible");
// }

// else if(age >= 18){
//     var salary = Number(prompt("Enter the slalary"));
//     if(salary <= 20000){
//         console.log("low salary")
//     }

//     else if (salary >= 50000){
//         console.log("high salary")
//     }

//     else{
//         console.log("Medium salary")
//     }
// }



//***********************************************************************************************************


// Q23

// let word = prompt("Enter the word");
// let toggledWord = "";

// for(let i = 0; i < word.length; i++){
//     let char = word[i];
//     if(char === char.toUpperCase()){
//         toggledWord = toggledWord + char.toLowerCase();
//     }

//     else{
//         toggledWord = toggledWord + char.toUpperCase();
//     }
// }

// console.log("Toggled Word:", toggledWord);


