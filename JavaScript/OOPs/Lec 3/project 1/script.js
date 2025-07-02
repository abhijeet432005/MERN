class Library{
    constructor(){
        this.book = []
    }

    addBooks(books){
        this.book.push(...books)
    }

    listOfAllBooks(){
        this.book.forEach((elem, idx) => {
            console.log(`${idx + 1} --> ${elem.name} written by ${elem.Author}`)
        })
    }
}



class Book{
    constructor(name, Author, ISBN, Price){
        this.name = name;
        this.Author = Author;
        this.ISBN = ISBN
        this.Price = Price;
        this.isRead = false;
    }

    BookDetails(){
        console.log(`Book name is ${this.name} written by ${this.Author} and you have ${this.isRead ? "read it" : "not read it"}, this book is availabe on amazon`)
    }

    changeReadStatus(){
        this.isRead = true;
    }


}

let Book1 = new Book("Rich Dad Poor Dad", "Robert Kyosaki", 32496421684, 180)
let Book2 = new Book("Can't Hurt Me", "David Goggins", 36846351684, 300)
let Book3 = new Book("Subconcious Mind", "ME", 14815744674, 380)
let Delhi = new Library()
Delhi.addBooks([Book1, Book2, Book3])



class MusicPlayer{
    constructor(){
        this.song = [
            {
                name: "Chal Diye Tum Kaha",
                Address: "Chal Diye Tum Kahan.mp3",
                BackGround: "chal diye tum kaha.webp"
            },
            {
                name: "Pal Pal",
                Address: "Afusic - Pal Pal.mp3",
                BackGround: "pal pal.webp"
            }
        ]

        this.CurrentIndex = 0

        
        this.play = document.querySelector(".play")
        this.audio = document.querySelector("audio")
        this.title = document.querySelector(".title")
        this.banner = document.querySelector(".banner img")
        this.previous = document.querySelector(".prev")
        this.next = document.querySelector(".next")
        this.progress = document.querySelector("#progress")
        this.loadSong()
        this.addEventListener()
        this.progressSong()
    }

    progressSong(){

        this.audio.addEventListener("loadedmetadata", () => {
            this.progress.max = this.audio.duration
        })

        this.audio.addEventListener("timeupdate" , () => {
            this.progress.value = this.audio.currentTime
        })

        this.progress.addEventListener("input", () => {
            this.audio.currentTime = this.progress.value
            this.playSong()
        })
    }

    loadSong(){
        let currentSong = this.song[this.CurrentIndex]
        this.title.innerHTML = currentSong.name
        this.audio.src = currentSong.Address
        this.banner.src = currentSong.BackGround
    }

    playSong(){
        this.audio.play();
        this.play.innerHTML = `<i class="ri-pause-fill"></i>`
    }

    PauseSong(){
        this.audio.pause();
        this.play.innerHTML = `<i class="ri-play-line"></i>`
    }

    nextSong(){
        this.CurrentIndex = (this.CurrentIndex + 1) % this.song.length
        this.loadSong()
        this.playSong()
    }

    prevSong(){
        this.CurrentIndex = (this.CurrentIndex - 1 + this.song.length) % this.song.length;
        this.loadSong()
        this.playSong()
    }

    addEventListener(){
        this.play.addEventListener("click", () => {
            if(this.audio.paused){
                this.playSong()
            }

            else{
                this.PauseSong()
            }
        })

        this.next.addEventListener("click", () => {
            this.nextSong()
        })
        this.previous.addEventListener("click", () => this.prevSong())
    }


}

window.onload = () => {
    new MusicPlayer();
};
