
// Defining variables

let prevVal="";
let newVal="";
let resultVal="";
let mathOperator="";
let decimalClicked=false;
let valMemStored="";


function numButPress(num){
    
}

function mathButPress(operator){
    
}

function equalButPress(num){
    
}

function clearButPress(){
    prevVal="";
    newVal="";
    resultVal="";
    mathOperator="";
    decimalClicked=false;
    document.querySelector("#entry").value="0";
    
}

function copyButPress(num){
    valMemStored=document.querySelector("#entry").value;
    
}

function pasteButPress(num){
    if(valMemStored){
        document.querySelector("#entry").value="0"=valMemStored;
        newVal=valMemStored;
    }
    
}
