// 1. check the leap year

// let year = Number(prompt("Enter the year"));

// let isLeap = false;

// if(year % 4 == 0){

//     if(year % 100 == 0){
//         if(year % 400 == 0) isLeap = true;
//         else isLeap = false;
//     }
//     else{
//         isLeap = true;
//     }
// }else isLeap = false;

// console.log(isLeap ? "Leap year" : "Not a Leap year")



//*************************************************************************************************************************************
//*************************************************************************************************************************************
//*************************************************************************************************************************************



// 2. discount 

// let paisa = Number(prompt('Enter the paisa'));
// let dis = 0;

// if(paisa >= 0 && paisa <= 5000) dis = 0;
// else if(paisa > 5001 && paisa <= 7000) dis = 5;
// else if(paisa > 7001 && paisa <= 9000) dis = 10;
// else if(paisa > 9000) dis = 20;
// else console.log("Invalid input")

// console.log(paisa - (dis * paisa)/100);


//*************************************************************************************************************************************
//*************************************************************************************************************************************
//*************************************************************************************************************************************


// 3. Calculate electricity bill


// let unit = Number(prompt("Enter the unit"));
// let amount = 0;


// if(unit > 400){
//     amount = (unit - 400) * 13;
//     unit = 400;
// }

// if(unit > 200 &&  unit <= 400){
//     amount = amount + (unit - 200) * 8;
//     unit = 200;
// }

// if(unit > 100 && unit <= 200){
//     amount = amount + (unit - 100) * 6;
//     unit = 100;

// }

// amount = amount + (unit * 4.2)

// console.log(amount);





// if(unit <= 100){
//     amount = unit * 4.2;
// }
// else if(unit >= 100 && unit <= 200){
//     amount = (100 * 4.2) + (unit-100) * 6;
// }
// else if(unit >= 200 && unit <= 400){
//     amount = (100 * 4.2) + (100 * 6) + (unit - 200) * 8;
// }

// else if(unit > 400){
//     amount = (100 * 4.2) + (100 * 6) + (200 * 6) + (unit - 400) * 13;
// }


// console.log(amount);




//*************************************************************************************************************************************
//*************************************************************************************************************************************
//*************************************************************************************************************************************



// 4. wap to calculate salary

// let gender = prompt("Enter your gender");
// let service = Number(prompt("Enter year of services"));
// let qualification = prompt("Enter your qualification");

// if(gender == "male" || gender == "Male"){
//     if(service >= 10){
//         if(qualification == "Post-graduate" || qualification == "post-graduate"){
//             console.log("Salary is : 15000");
//         }
//         else if(qualification == "graduate" || qualification == "Graduate"){
//                 console.log("Salary is : 10000");
//         }
//     }
//     else if(service < 10){
//         if(qualification == "Post-graduate" || qualification == "post-graduate"){
//             console.log("Salary is : 10000");
//         }
//         else if(qualification == "graduate" || qualification == "Graduate"){
//                 console.log("Salary is : 7000");
//         }
//     }

// }

// else if(gender == "female" || gender == "Female"){
//     if(service >= 10){
//         if(qualification == "Post-graduate" || qualification == "post-graduate"){
//             console.log("Salary is : 12000");
//         }

//         else if(qualification == "graduate" || qualification == "Graduate"){
//             console.log("Salary is : 9000");
//         }
//     }

//     else if(service < 10){
//         if(qualification == "Post-graduate" || qualification == "post-graduate"){
//             console.log("Salary is : 10000");
//         }
//         else if(qualification == "graduate" || qualification == "Graduate"){

//             console.log("Salary is : 6000");
//         }
//     }
// }
