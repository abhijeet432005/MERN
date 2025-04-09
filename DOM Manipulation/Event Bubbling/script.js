const people = [
    {
      name: "Aman",
      age: 22,
      img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
      status: "Stranger"
    },
    {
      name: "Riya",
      age: 24,
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
      status: "Stranger"
    },
    {
      name: "Vikram",
      age: 21,
      img: "https://plus.unsplash.com/premium_photo-1669703777657-41f5adb14e9b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
      status: "Stranger"
    },
    {
      name: "Sneha",
      age: 23,
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
      status: "Stranger"
    },
    {
      name: "Raj",
      age: 25,
      img: "https://images.unsplash.com/photo-1679217125041-6f81624038d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
      status: "Stranger"
    },
    {
      name: "Priya",
      age: 22,
      img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
      status: "Stranger"
    },
    {
      name: "Kabir",
      age: 26,
      img: "https://plus.unsplash.com/premium_photo-1674933214600-483da3cb2d0c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
      status: "Stranger"
    },
    {
      name: "Anjali",
      age: 20,
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww",
      status: "Stranger"
    },
    {
      name: "Rohan",
      age: 23,
      img: "https://plus.unsplash.com/premium_photo-1661866803933-17fc0cf78150?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
      status: "Stranger"
    },
    {
      name: "Neha",
      age: 24,
      img: "https://plus.unsplash.com/premium_photo-1708110921398-1fc68e98eacc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG1vZGVsfGVufDB8fDB8fHww",
      status: "Stranger"
    }
  ];
  
  


// arr.forEach(function(val){
//     sum = val.age + sum;
    
// })
// console.log(sum)

function heroFnc(){
  let sum = ''
  people.forEach(function(val, idx){
      sum = sum + `<div class="card">
              <div class="top">
                  <img src="${val.img}" alt="">
              </div>
  
              <div class="bottom">
                  <h1>${val.name}</h1>
                  <h3>Age: ${val.age}</h3>
                  <h3>Status: ${val.status}</h3>
                  
              </div>
              <button class="ferind" id=${idx} style="background-color: ${
                val.status === "Stranger" ? "white" : "lightgreen"}">${val.status === "Stranger" ? "Add Friend" : "Unfriend"}
              </button>
          </div>`
  })
  
  let main = document.querySelector('#main')
  main.innerHTML = sum
}

heroFnc();

let btn = document.querySelector(".ferind")
main.addEventListener('click', function(dets){
  let gold = people[dets.target.id];

  if(gold.status == 'Stranger'){
    gold.status = 'Ferinds';
    // btn.style.backgroundColor = 'green'
    
  }

  else {
    gold.status = 'Stranger';
  }

  heroFnc();
})