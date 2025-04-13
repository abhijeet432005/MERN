let users = [
    {
      displayPic: "https://images.unsplash.com/photo-1500048993953-d23a436266cf",
      profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "Raj Malhotra",
      age: 23,
      location: "Delhi, India",
      bio: "Filmmaker | Dreamer | Traveler. Always chasing the golden hour 🌅",
      pendingMessage: 3,
      interest: [
        { icon: `<i class="ri-movie-line"></i>`, interest: "Movies" },
        { icon: `<i class="ri-camera-line"></i>`, interest: "Photography" },
        { icon: `<i class="ri-flight-takeoff-line"></i>`, interest: "Traveling" }
      ],
      isFriend: false
    },
    {
      displayPic: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce",
      profilePic: "https://randomuser.me/api/portraits/women/2.jpg",
      name: "Aadarsh",
      age: 25,
      location: "Mumbai, India",
      bio: "Dancer 💃 | Chai lover ☕ | Let's vibe to some Bollywood beats!",
      pendingMessage: 7,
      interest: [
        { icon: `<i class="ri-dance-line"></i>`, interest: "Dancing" },
        { icon: `<i class="ri-music-line"></i>`, interest: "Music" },
        { icon: `<i class="ri-team-line"></i>`, interest: "Networking" }
      ],
      isFriend: true
    },
    {
      displayPic: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fG1vZGVsfGVufDB8fDB8fHww",
      profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Aman Verma",
      age: 21,
      location: "Bangalore, India",
      bio: "Coder 🧑‍💻 | Anime lover | Let’s debug life together 🧠💡",
      pendingMessage: 0,
      interest: [
        { icon: `<i class="ri-code-line"></i>`, interest: "Coding" },
        { icon: `<i class="ri-movie-2-line"></i>`, interest: "Anime" },
        { icon: `<i class="ri-brain-line"></i>`, interest: "Psychology" }
      ],
      isFriend: false
    },
    {
      displayPic: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
      profilePic: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Salmon Bhai",
      age: 22,
      location: "Pune, India",
      bio: "Techie 👩‍💻 | Cat Mom 🐱 | Book hoarder 📚",
      pendingMessage: 1,
      interest: [
        { icon: `<i class="ri-macbook-line"></i>`, interest: "Tech" },
        { icon: `<i class="ri-book-2-line"></i>`, interest: "Reading" },
        { icon: `<i class="ri-heart-2-line"></i>`, interest: "Animals" }
      ],
      isFriend: true
    },
    {
      displayPic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
      profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Alia",
      age: 24,
      location: "Chandigarh, India",
      bio: "Fitness freak 🏋️‍♂️ | Nutrition junkie 🥗 | Early riser 🌄",
      pendingMessage: 5,
      interest: [
        { icon: `<i class="ri-run-line"></i>`, interest: "Running" },
        { icon: `<i class="ri-bowl-line"></i>`, interest: "Healthy Eating" },
        { icon: `<i class="ri-sun-line"></i>`, interest: "Nature" }
      ],
      isFriend: false
    },
    {
      displayPic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      profilePic: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Dev",
      age: 26,
      location: "Kolkata, India",
      bio: "Poet | Tea Enthusiast 🍵 | Deep thinker 💭",
      pendingMessage: 2,
      interest: [
        { icon: `<i class="ri-quill-pen-line"></i>`, interest: "Writing" },
        { icon: `<i class="ri-cup-line"></i>`, interest: "Tea Tasting" },
        { icon: `<i class="ri-moon-line"></i>`, interest: "Night Walks" }
      ],
      isFriend: true
    },
    {
      displayPic: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Kirti",
      age: 22,
      location: "Hyderabad, India",
      bio: "Gamer 🎮 | Meme Lord 😂 | Pizza is life 🍕",
      pendingMessage: 6,
      interest: [
        { icon: `<i class="ri-gamepad-line"></i>`, interest: "Gaming" },
        { icon: `<i class="ri-image-line"></i>`, interest: "Memes" },
        { icon: `<i class="ri-restaurant-line"></i>`, interest: "Food" }
      ],
      isFriend: false
    },
    {
      displayPic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      profilePic: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Priya Anand",
      age: 24,
      location: "Jaipur, India",
      bio: "Fashionista 👗 | Insta blogger | Dog lover 🐶",
      pendingMessage: 8,
      interest: [
        { icon: `<i class="ri-star-smile-line"></i>`, interest: "Fashion" },
        { icon: `<i class="ri-instagram-line"></i>`, interest: "Blogging" },
        { icon: `<i class="ri-dog-line"></i>`, interest: "Pets" }
      ],
      isFriend: true
    },
    {
      displayPic: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
      profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Harshita",
      age: 27,
      location: "Lucknow, India",
      bio: "Finance guy 📊 | Always learning 📈 | Gym rat 💪",
      pendingMessage: 4,
      interest: [
        { icon: `<i class="ri-bank-line"></i>`, interest: "Finance" },
        { icon: `<i class="ri-book-read-line"></i>`, interest: "Learning" },
        { icon: `<i class="ri-dumbbell-line"></i>`, interest: "Fitness" }
      ],
      isFriend: false
    },
    
]

function select(elem){
    return document.querySelector(elem)
}

let curr = 0;
let isAnimating = false;

function setData(index){
    select(".prflimg img").src = users[index].profilePic
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".Name h1:nth-child(1)").textContent = users[index].name;
    select(".Name h1:nth-child(2)").textContent = users[index].age;
    select(".bio p").textContent = users[index].bio;

    let clutter = ""
    users[index].interest.forEach(function(interests){
        clutter += `<div class="tag flex items-center whitespace-nowrap justify-center bg-white/40 px-3 py-1 rounded-full gap-1">
            ${interests.icon}
            <h3 class="text-sm tracking-tighter">${interests.interest}</h3>
        </div>`
    })

    select(".tags").innerHTML = clutter;
}



(function setInitial(){
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[(curr + 1) % users.length].displayPic;
    setData(curr);

    curr = 2;
})();



function imageChange(){
    if(!isAnimating){
        isAnimating = true;

        let t1 = gsap.timeline({
            onComplete: function(){
                isAnimating = false;

                let main = select(".maincard");
                let incoming = select(".incomingcard");

                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");

                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                });

                
                if(curr === users.length) curr = 0;
     
                select(".maincard img").src = users[curr].displayPic;
               
                             
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");

               
            }
        });

        t1.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            duration: 0.9
        }, "a")
        .from(".incomingcard", {
            scale: 0.9,
            opacity: 0,
            duration: 1.1
        }, "a");
    }
}

let deny = select(".deny");
let accept = select(".accept");



deny.addEventListener('click', function(){
    imageChange();
    setData(curr - 1);
    gsap.from(".details .element", {
        y: "100%", 
        opacity: 0,
        stagger: 0.06,
        ease: "power3.out",
        duration: 0.6
    });
});

let heart = document.querySelector(".heart")

accept.addEventListener('click', function(){
    heart.style.transform = "translate(-50%, -50%) scale(1)"
    heart.style.opacity = '0.8'
    
    setTimeout(() => {
        heart.style.opacity = '0'
    }, 1000);
    
    setTimeout(() => {
        heart.style.transform = "translate(-50%, -50%) scale(0)"
        setData(curr - 1);
        imageChange();
        gsap.from(".details .element", {
            y: "100%", 
            opacity: 0,
            stagger: 0.06,
            ease: "power3.out",
            duration: 0.6
        });
    }, 600);
    
});



    

(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function(element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, 'overflow-hidden')
        div.appendChild(element);
        select(".details").appendChild(div);
    })
})();

