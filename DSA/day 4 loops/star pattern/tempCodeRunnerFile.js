let n = prompt("Enter the number ");
let temp = 65;

for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n - i; j++){
        process.stdout.write(" ");
    }

    for(let k = 1; k <= i; k++){
        process.stdout.write(String.fromCharCode(temp) + " ");
        temp++;
    }

    console.log()
}