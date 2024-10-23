let getal = 100
let output = document.getElementById("output")
let budget = 100
let product = 60

let hour = 10;


function addnumber(){
    output.innerText = getal
}

if (budget > product) {
    console.log("I have enough money")
}

else if (budget < product) {
    console.log("I'm poor")
}

if (hour < 18) {
    console.log("Midday")
}

else if (hour < 12) {
    console.log("Morning")
}

else if (hour < 23) {
    console.log("Evening")
}

else {
    console.log("Night")
}
