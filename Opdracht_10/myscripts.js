let answer = document.getElementById("h1");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");


function plus() {

    if(num1.value > 0 && num2.value > 0) {
        let ans = Number(num1.value) + Number(num2.value);

        answer.innerText = ans;
    }
    
    else {
        answer.innerText = "The number is too low"
    }
}

function minus() {
    if(num1.value > 0 && num2.value > 0) {
        let ans = Number(num1.value) - Number(num2.value);

        answer.innerText = ans;
    }
    
    else {
        answer.innerText = "The number is too low"
    }
}

function divide() {
    if(num1.value > 0 && num2.value > 0) {
        let ans = Number(num1.value) / Number(num2.value);

        answer.innerText = ans;
    }
    
    else {
        answer.innerText = "The number is too low"
    }
    
}

function multiply() {
    if(num1.value > 0 && num2.value > 0) {
        let ans = Number(num1.value) * Number(num2.value);

        answer.innerText = ans;
    }
    
    else {
        answer.innerText = "The number is too low"
    }

}
