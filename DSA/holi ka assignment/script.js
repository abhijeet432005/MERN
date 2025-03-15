// 1. ISBN numeber

// let x = prompt("Enter the number");
// let sum = 0;
// let isValid = true;

// if(x.length !== 10){
//     console.log("Please enter correct number")
// }

// else{
//     for(let i = 1; i <= 10; i++){
//         let digit = x[i - 1];

//         if(digit === 'X' && i === 10){
//             digit = 10;
//         }

//         else{
//             digit = Number(digit);

//             if(isNaN(digit)){
//                 console.log("Contains non numeric character");
//                 isValid = false;
//                 break;
//             }
//         }
//         sum = sum + (digit * i);
//     }
    
//     if (isValid)    (sum % 11 === 0) ? console.log('valid ISBN') : console.log("Invalid ISBN");
// }


// **********************************************************************************************************************************
// **********************************************************************************************************************************
// **********************************************************************************************************************************

// 2. HCF/GCD

// let a = Number(prompt("Enter the number 1"));
// let b = Number(prompt("Enter the number 2"));

// while(b !== 0){
//     let temp = b;
//     b = a % b;
//     a = temp;
// }

// console.log(`HCF (GCD) of the given number is : ${a}`)



// **********************************************************************************************************************************
// **********************************************************************************************************************************
// **********************************************************************************************************************************

// 3. Harshed number

// let x = Number(prompt("Enter the number"));
// let rem, sum = 0;
// let y = x;

// while(x != 0){
//     rem = x % 10;
//     sum = sum + rem;
//     x = parseInt(x/10)
// }

// (y % sum === 0) ? console.log("Harshed number"): console.log("Not a Harshed number")




// **********************************************************************************************************************************
// **********************************************************************************************************************************
// **********************************************************************************************************************************



// 5. Abundant number 


let x = Number(prompt("Enter the number"));
let fact = 0;

for(let i = 1; i <= x/2; i++){
    if(x % i === 0){
        fact = fact + i;
    }
}

console.log((fact > x) ? 'Abundant number': 'Non abundant number')