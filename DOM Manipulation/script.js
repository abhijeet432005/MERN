// DOM - Document Object Model -----> Frontend ki JavaScript


// 4 pillar of DOM 

// 1. Selection of Element 
    // - document.querySelector('#box')
    // - document.getElementById(box)
    // - document.querySelectorAll('h1')  -- it will select all h1

// 2. Changing HTML 
    // box.innerHTML

// 3. Changing CSS 
    // - box.style.color 

// 4. Event Listener 
    // box.addEventListener 



var btn = document.querySelector('button')
let h2 = document.querySelector('h2')


let check = 0;

btn.addEventListener('click', function(){
    if(check == 0){
        btn.innerHTML = 'REMOVE FERIND';
        h2.innerHTML = "Let's Chat";
        check = 1;
        console.log('Frendship hooo  gyi');
        
    }
    else{
        btn.innerHTML = "ADD FERIND"
        h2.innerHTML = "Stranger"
        check = 0;
        console.log('Frendship tutt gyi');
    }
})















// 1. Selection of Element

// let h = document.querySelector('h1');
// console.log(h)


// 2. Changing HTML 

// h.innerHTML = "vartman ankho ka dhoka hai"


// 3. Changing CSS 

// h.style.color = 'pink'
// h.style.textTransform = 'uppercase'

// 4. Event Listener 

// h.addEventListener('mousemove', function(){
//     // console.log('hiiii')
//     h.style.textTransform = 'capitalize';
//     h.style.color = 'white';
//     h.innerHTML = 'Gyan mat deeeee'
//     h.style.textAlign = 'center'
// })



// let box = document.getElementById('box');
// box.innerHTML = '<h1>hiii<h1>'