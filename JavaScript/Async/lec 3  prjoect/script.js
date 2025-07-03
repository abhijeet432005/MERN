function getUser(userName){
    return fetch(`https://api.github.com/users/${userName}`)
    .then((raw) => {
        // if(!raw.ok) throw new Error("Username doesn't exist");
        return raw.json()
    })
}

function getRepo(userName){
    return fetch(`https://api.github.com/users/${userName}/repos?sort=updated`).then(raw => {
        if(!raw.ok) throw new Error("Failed to fetch....");
        return raw.json()
    })
}





function github(){

    let input = document.querySelector("input")
    let btn = document.querySelector("#searchBtn")
    let profileCard = document.getElementById("profileCard")
    
    btn.addEventListener("click", (e) => {
        // e.preventDefault()
        console.log('hii')
        let user = input.value.trim()
    
        if(user.length > 0){
            getUser(user).then((data) => {
                fillData(data)
            })
    
        }
        else alert()

        profileCard.classList.remove("animation-pulse")
    })
    
    function fillData(data){
        // console.log(data)
        let details = `<div class="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
                <img src="${data.avatar_url}" alt="Profile Picture"
                    class="w-full h-full object-cover" id="profileImage" />
            </div>
    
            <!-- Profile Info -->
            <div class="flex-1 text-center md:text-left">
                <h2 class="text-2xl font-bold text-gray-800" id="username">${data.login}</h2>
                <p class="text-gray-500" id="bio">${data.bio ? data.bio : ""}</p>
    
                <div class="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
                    <span id="repos" class="bg-gray-100 px-3 py-1 rounded-full">Repos: ${data.public_repos}</span>
                    <span id="followers" class="bg-gray-100 px-3 py-1 rounded-full">Followers: ${data.followers}</span>
                    <span id="following" class="bg-gray-100 px-3 py-1 rounded-full">Following: ${data.following}</span>
                    <span id="location" class="bg-gray-100 px-3 py-1 rounded-full">Location: ${data.location ? data.location : "N/A"}</span>
                    <span id="company" class="bg-gray-100 px-3 py-1 rounded-full">Company: ${data.company ? data.company : "N/A"}</span>
                </div>
    
                <a href="https://github.com/${data.login}" target="_blank" id="profileLink"
                    class="mt-4 inline-block text-blue-600 hover:underline">
                    View GitHub Profile →
                </a>
            </div>`
    
    
            
        // console.log(details)
        profileCard.innerHTML = details
      
    }
}

github()


let darkmode = localStorage.getItem("darkmode")
let body = document.querySelector("body")
let themebtn = document.querySelector("#themeToggle")


function enable(){
    body.classList.add("active")
    themebtn.innerText = "☀️ Light";
    localStorage.setItem('darkmode', 'on')
}

function disable(){
    body.classList.remove("active")
    themebtn.innerText = "🌙 Dark";
    localStorage.setItem("darkmode", "off")
}

if(darkmode === "on") enable()

themebtn.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== 'on' ? enable() : disable()
})