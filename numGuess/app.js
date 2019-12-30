

// Defining game values
let min=1,
    max=10,
    winNum=8,
    gLeft=3;

// Defining UI Elements
const game=document.querySelector("#game");
const minNum=document.querySelector(".min-num");
const maxNum=document.querySelector(".max-num");
let inpVal=document.querySelector("#guess-num");
const subVal=document.querySelector("#sub-num");
let conMsg=document.querySelector(".message");


// Assign UI min and max values
minNum.textContent=min;
maxNum.textContent=max;

// Event listener
subVal.addEventListener('click',function(){
    let guess=parseInt(inpVal.value);
    console.log(guess);

    // Validate
    if(isNaN(guess) || minNum<1 ||maxNum>10){
        setMsg(`Please enter a number between ${min} and ${max}`);
    }
    
});

function setMsg(msg){
    conMsg.textContent=msg;

}
