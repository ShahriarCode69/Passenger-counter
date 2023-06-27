



//document.getElementById("count-el").innerHTML = 5;
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}



let welcomeEl = document.getElementById("welcome-el")

let greeting =  "Created By "
let nameME = "©Shahriar"

welcomeEl.innerText = greeting + nameME

welcomeEl.innerText += "👾"