var btn = document.querySelector('button');
var h4 = document.querySelector('h4');

let flag = 0;

btn.addEventListener('click', function(){
    if(flag == 0){
        h4.innerHTML = 'Request Sending...'
        h4.style.color = 'gold';
        btn.innerHTML = 'Adding...'

    setTimeout(() => {
        h4.innerHTML = 'Friend';
        h4.style.color = 'green'
        btn.innerHTML = 'Remove Friend'
        flag = 1;
    }, 2000);
    }

    else{
        h4.innerHTML = 'Stranger'
        h4.style.color = 'black';
        btn.innerHTML = 'Add Friend'
        flag = 0;
    }
})






let downlaod = document.querySelector('#download');
let count = document.querySelector('.count');
let ineer = document.querySelector('.ineer');
let grow = 0;

let check = 0;

downlaod.addEventListener('click', function(){
    let speed = Math.floor(Math.random()* 10 + 1)
    console.log(speed)
    

    if(check == 0){

        let int = setInterval(function(){
            grow++;
            count.innerHTML = `${grow}%`;
            ineer.style.width = `${grow}%`;
            downlaod.innerHTML = 'Downloading...'
        }, speed * 10);
    
        setTimeout(() => {
            clearInterval(int)
            downlaod.innerHTML = 'Downloaded'
        }, speed * 1000)
        check = 1
    }

    else{
        downlaod.innerHTML = "Already Downloaded"
    }

})