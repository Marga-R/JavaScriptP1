let getal = 0;
let output = document.getElementById("output");



function changenumber(){
    if (getal >= 10) {
        getal = 0;
        output.innerText = getal;
        
    } else {
        getal++;
        output.innerText = getal;

    }
    
};
