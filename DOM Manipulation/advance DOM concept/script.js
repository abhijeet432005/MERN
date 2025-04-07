// getAttribute -  for getting an attribute 

// var h = document.querySelector('h1');
// var id = h.getAttribute('id')
// console.log(id)


// setAttribute - for setting an attribute

// h.setAttribute('id', 'heroin')



// 1. creating element in js 

let character = ['ninja-Photoroom.png', 'pika-Photoroom.png', 'shinchan-Photoroom.png', 'doremon-Photoroom.png', 'motu-Photoroom.png']


let create = document.querySelector('#cr-elem');
let body = document.body;

create.addEventListener('click', function(){
    let num = Math.floor(Math.random() * character.length);
    let random = character[num]

    let x = Math.random() * 84;
    let y = Math.random() * 65;
    let rot = Math.random() * 360;


    let img = document.createElement('img');
    img.setAttribute('src', random);
    img.style.position = 'absolute'
    img.style.height = '200px'
    img.style.left = `${x}%`
    img.style.top = `${y}%`
    img.style.rotate = `${rot}deg`

    body.appendChild(img)
})



// 2. image swap 

let swap = document.querySelector('.btn-grad')
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')


swap.addEventListener('click', function(){
    let img1src = img1.getAttribute('src')
    let img2src = img2.getAttribute('src')

    img1.setAttribute('src', img2src)
    img2.setAttribute('src', img1src)
})


// 3. custom cursor

let main = document.querySelector('main');
let cursor = document.querySelector('.cursor')


main.addEventListener('mousemove', function(dets){
    setTimeout(() => {
        cursor.style.opacity = 1;
    }, 50);
    cursor.style.left = dets.clientX+'px'
    cursor.style.top = dets.clientY+'px'
});