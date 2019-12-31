

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
        setMsg(`Please enter a number between ${min} and ${max}`,'red');
    }

    // Check winning sitaution
    if(guess===winNum){
        inpVal.disabled=true;
        inpVal.style.borderColor="green";
        setMsg(`YES, YOU GOT IT. ${winNum} was the winning number.`,'green');
    }else{
        gLeft-=1;
        
        if (gLeft===0){

            inpVal.disabled=true;
            inpVal.style.borderColor="red";
            setMsg(`Game Over. You lost the game.
             ${winNum} was the winning number.`,'red');

        }else{
            inpVal.style.borderColor="red";
            inpVal.value="";
            setMsg(`${guess} is not correct. You have ${gLeft} guess(es) left.`,'red')
        }
    }
    
});

function setMsg(msg,color){
    conMsg.textContent=msg;
    conMsg.style.color=color;

}
