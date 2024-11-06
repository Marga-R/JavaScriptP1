let answer = document.getElementById("h1");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");


function plus() {
    let ans = Number(num1.value) + Number(num2.value);

    answer.innerText = ans;
}

function minus() {
    let ans = num1.value - num2.value;

    answer.innerText = ans;
}

function divide() {
    let ans = num1.value / num2.value;

    answer.innerText = ans;
    
}

function multiply() {
    let ans = num1.value * num2.value;

    answer.innerText = ans;

}

