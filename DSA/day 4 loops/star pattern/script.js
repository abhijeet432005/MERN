const prompt = require("prompt-sync")()


// 1. Right angle triangle

// for(let i = 1; i <= 5; i++){
    
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("* ")
//     }

//     console.log();
// }



// ****************************************************************************************************************************
// ****************************************************************************************************************************
// ****************************************************************************************************************************

// 2. Right angle triangle number 


// let n = prompt("Enter the number ");

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(j + " ")
//     }
//     console.log()
// }




// ****************************************************************************************************************************
// ****************************************************************************************************************************
// ****************************************************************************************************************************

// 3. inverted right angle triangle


// let n = prompt("Enter the number ")

// for(let i = 1; i <= n; i++){

//     for(let j = n; j >= i; j--){
//         process.stdout.write("* ")
//     }
//     console.log()
// }




// ****************************************************************************************************************************
// ****************************************************************************************************************************
// ****************************************************************************************************************************

// 4. mirrored right angle triangle

// let n = prompt("Enter the number ");

// for(let i = 1; i <= n; i++){

//     for(let j = 1; j <= n - i; j++){
//         process.stdout.write("  ");
//     }
//     for(let k = 1; k <= i; k++){
//         process.stdout.write("* ");

//     }
//     console.log();
// }




// ****************************************************************************************************************************
// ****************************************************************************************************************************
// ****************************************************************************************************************************

// 5. alphabet right angle triangle

// let n = prompt("Enter the number ");
// let temp = 65;

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write(String.fromCharCode(temp) + " ");
//         temp++;
//     }
//     console.log();
// }



// ****************************************************************************************************************************
// ****************************************************************************************************************************
// ****************************************************************************************************************************

// 6. mirror alphabet right angle triangle

// let n = prompt("Enter the number ");
// let temp = 65;

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n - i; j++){
//         process.stdout.write("  ");
//     }

//     for(let k = 1; k <= i; k++){
//         process.stdout.write(String.fromCharCode(temp) + " ");
//         temp++;
//     }

//     console.log()
// }



// ****************************************************************************************************************************
// ****************************************************************************************************************************
// ****************************************************************************************************************************

// 7. alphabet triangle

// let n = prompt("Enter the number ");
// let temp = 65;

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n - i; j++){
//         process.stdout.write(" ");
//     }

//     for(let k = 1; k <= i; k++){
//         process.stdout.write(String.fromCharCode(temp) + " ");
//         temp++;
//     }

//     console.log()
// }




// ****************************************************************************************************************************
// ****************************************************************************************************************************
// ****************************************************************************************************************************

// 8. print X (only applicable for odd number)

// let n = Number(prompt("Enter the number "));

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n; j++){
//         if(i == j || i + j == n + 1) process.stdout.write("* ");

//         else process.stdout.write("  ")
//     }

//     console.log();
// }




// ****************************************************************************************************************************
// ****************************************************************************************************************************
// ****************************************************************************************************************************

// 9. print V 

let n = Number(prompt("Enter the number "));

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n * 2; j++){
//         if(i == j || i + j == n * 2)  process.stdout.write("* ");

//         else process.stdout.write("  ")
//     }
//     // for(let k = 1; k <= 3; k++){
//     // }

//     console.log();
// }

// for(let i = 1; i <= n; i++){
//     process.stdout.write("* ");
// }

// for(let i = 1; i <= n - 1; i++){
//     for(let j = 1; j <= n; j++){
//         if(i + j == n + 1){
//             process.stdout.write("* ")
//         }

//         else process.stdout.write("  ")
//     }
//     console.log()
// }

// for(let i = 1; i <= n; i++){
//     process.stdout.write("* ")
// }



// for (let i = 0; i < n; i++) {
//     let line = "";

//     // S
//     for (let j = 0; j < n; j++) {
//         if (i === 0 || i === Math.floor(n / 2) || i === n - 1)
//             line += "*";
//         else if (i < Math.floor(n / 2) && j === 0)
//             line += "*";
//         else if (i > Math.floor(n / 2) && j === n - 1)
//             line += "*";
//         else
//             line += " ";
//     }
//     line += "  ";

//     // H
//     for (let j = 0; j < n; j++) {
//         if (j === 0 || j === n - 1 || i === Math.floor(n / 2))
//             line += "*";
//         else
//             line += " ";
//     }
//     line += "  ";

//     // E
//     for (let j = 0; j < n; j++) {
//         if (i === 0 || i === Math.floor(n / 2) || i === n - 1 || j === 0)
//             line += "*";
//         else
//             line += " ";
//     }
//     line += "  ";

//     // R
//     for (let j = 0; j < n; j++) {
//         if (j === 0 || (i === 0 && j < n - 1) || (i === Math.floor(n / 2) && j < n - 1) || (j === n - 1 && i < Math.floor(n / 2)) || (i - j === Math.floor(n / 2)))
//             line += "*";
//         else
//             line += " ";
//     }
//     line += "  ";

//     // I
//     for (let j = 0; j < n; j++) {
//         if (i === 0 || i === n - 1 || j === Math.floor(n / 2))
//             line += "*";
//         else
//             line += " ";
//     }
//     line += "  ";

//     // Y
//     for (let j = 0; j < n; j++) {
//         if ((i <= Math.floor(n / 2) && (j === i || j === n - 1 - i)) || (i > Math.floor(n / 2) && j === Math.floor(n / 2)))
//             line += "*";
//         else
//             line += " ";
//     }
//     line += "  ";

//     // A
//     for (let j = 0; j < n; j++) {
//         if ((i === 0 && j !== 0 && j !== n - 1) || (i === Math.floor(n / 2)) || j === 0 || j === n - 1)
//             line += "*";
//         else
//             line += " ";
//     }
//     line += "  ";

//     // N
//     for (let j = 0; j < n; j++) {
//         if (j === 0 || j === n - 1 || j === i)
//             line += "*";
//         else
//             line += " ";
//     }
//     line += "  ";

//     // S
//     for (let j = 0; j < n; j++) {
//         if (i === 0 || i === Math.floor(n / 2) || i === n - 1)
//             line += "*";
//         else if (i < Math.floor(n / 2) && j === 0)
//             line += "*";
//         else if (i > Math.floor(n / 2) && j === n - 1)
//             line += "*";
//         else
//             line += " ";
//     }

//     console.log(line);
// }


// ****************************************************************************************************************************
// ****************************************************************************************************************************
// ****************************************************************************************************************************

// 10. print tittli/butterfly

// let n = Number(prompt("Enter the number "));

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= i; j++){
//         process.stdout.write("* ")
//     }

//     for(let j = 1; j <= n - i; j++){
//         process.stdout.write("  ");
//     }
    
//     for(let j = 1; j <= n - i; j++){
//         process.stdout.write("  ");
//     }

//     for(let k = 1; k <= i; k++){
//         process.stdout.write("* ");
        
//     }
//     console.log()
// }



// for(let i = 1; i <= n; i++){
    
//     for(let j = n; j > i; j--){
//         process.stdout.write("* ");
//     }                                                                            

//     for(let j = 1; j <= i; j++){
//         process.stdout.write("  ");
//     }

//     for(let j = 1; j <= i; j++){
//         process.stdout.write("  ");
//     }

//     for(let k = n; k > i; k--){
//         process.stdout.write("* ");
        
//     }
//     console.log()
// }

// let n = 9

// for(let i = 1; i <= n; i++){
//     for(let j = 1; j <= n; j++){
//         if(i == j || i + j == n + 1){
//             process.stdout.write("* ")
//         }
//         else process.stdout.write("  ")
//     }

//     console.log()
// }


for(let i = 1; i <= n; i++){
    for(let j = 1; j <= i; j++){
        process.stdout.write("* ")
    }
    for(let k = 1; k <= n - i; k++){
        process.stdout.write("  ")
    }
    for(let k = 1; k <= n - i; k++){
        process.stdout.write("  ")
    }
    for(let j = 1; j <= i; j++){
        process.stdout.write("* ")
    }
    console.log()
}

for(let i = 1; i <= n; i++){
    
    for(let j = n; j > i; j--){
        process.stdout.write("* ");
    }                                                                            

    for(let j = 1; j <= i; j++){
        process.stdout.write("  ");
    }

    for(let j = 1; j <= i; j++){
        process.stdout.write("  ");
    }

    for(let k = n; k > i; k--){
        process.stdout.write("* ");
        
    }
    console.log()
}