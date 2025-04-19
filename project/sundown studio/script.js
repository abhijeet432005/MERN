const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});


function swiperanim(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
        
      });

}

swiperanim()



function imageeffect(){
    let elem = document.querySelectorAll('.sec');


console.log(elem)


elem.forEach(function(val){

   

    val.addEventListener('mouseenter', function(dets){
        val.childNodes[3].style.opacity = 1
        
    })
    val.addEventListener('mouseleave', function(dets){
        val.childNodes[3].style.opacity = 0
    })
})
}

if(window.innerWidth >= 1000){
    imageeffect()

}



function menuanim(){
    let menu = document.querySelector('nav .menu')
    let full = document.querySelector('.full-scr');
    let navimg = document.querySelector('nav img')
    let flag = 0;
    
    menu.addEventListener('click', function(){
        if(flag === 0){
            full.style.opacity = 1
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        }
        
        else{
            full.style.opacity = 0
            full.style.top = '-100%'
            navimg.style.opacity = 1
            flag = 0
    
        }
    })

}

menuanim()

function loader(){
    let load = document.querySelector('.loader')
    
    setTimeout(function(){
        load.style.top = '-100%'
    }, 4000)
}

loader();
