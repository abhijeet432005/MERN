class ContactManager {
    constructor() {
        this.contact = []
        if (localStorage.getItem('contact')) {
            this.contact = JSON.parse(localStorage.getItem('contact'))
        }


        this.ContactForm = document.getElementById("Contact-form")
        this.NameIpnput = document.getElementById("name")
        this.PhoneInput = document.getElementById("phone")
        this.searchInp = document.getElementById("Search")
        this.searchBtn = document.querySelector(".btn")
        this.renderList()
        this.Addcontact()
        this.search()


    }

    renderList(data = this.contact, query = "") {
        
    localStorage.setItem('contact', JSON.stringify(this.contact));
    let contactList = document.querySelector(".contact-list");
    let sum = "";

    data.forEach((elem, idx) => {
        let nameToShow = elem.Name;

        if (query) {
            const regex = new RegExp(`(${query})`, "ig");
            nameToShow = elem.Name.replace(regex, `<mark>$1</mark>`);
        }

        sum += `
        <div class="contact">
            <div class="info">
                <h5>Name: ${nameToShow}</h5>
                <h5>Mobile: ${elem.Phone}</h5>
            </div>
            <button id="${idx}">Delete</button>
        </div>
        `;
    });

    contactList.innerHTML = sum;
    this.delete();
}

    Addcontact() {
        this.ContactForm.addEventListener("submit", e => {
            e.preventDefault()

            this.contact.push({
                Name: this.NameIpnput.value,
                Phone: this.PhoneInput.value
            })

            this.NameIpnput.value = ""
            this.PhoneInput.value = ""
            this.renderList()
        })
    }

    delete() {
        let delBtn = document.querySelectorAll(".contact button")
        delBtn.forEach(elem => {
            elem.addEventListener("click", () => {
                this.contact.splice(elem.id, 1);
                this.renderList()
            })
        })
    }

    search() {
        this.searchBtn.addEventListener("click", (e) => {
            e.preventDefault()
            console.log('hii')
            let query = this.searchInp.value.toLowerCase();

            let filter = this.contact.filter(contact =>
                contact.Name.toLowerCase().includes(query)
            );

            this.renderList(filter, query);
        });
    }
}

window.onload = () => {
    new ContactManager();
};

let arr = [1, 2, 3, 4, 5]
let remove = arr.splice(3, 1)
console.log("remove: " + remove)
console.log(arr)