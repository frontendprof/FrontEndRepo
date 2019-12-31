

// Defining game values
let min=1,
    max=10,
    winNum=getRandomNum(min,max),
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

game.addEventListener("mousedown",function(e){
    if(e.target.className==="play-again"){
        window.location.reload();
    }
})

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
        gameOver(true,`YES, YOU GOT IT. ${winNum} was the winning number.`)
    }else{
        gLeft-=1;        
        if (gLeft===0){

            gameOver(false,`Game Over. You lost the game.
            ${winNum} was the winning number.`)

        }else{
            inpVal.style.borderColor="red";
            setMsg(`${guess} is not correct. You have ${gLeft} guess(es) left.`,'red');
            inpVal.value="";
            
        }
    }
    
});

function gameOver(won,msg){
    let color;
    won===true?color="green":color="red";
    

    inpVal.disabled=true;
    inpVal.style.borderColor=color;
    conMsg.style.color=color;
    setMsg(msg);

    subVal.value="Play again";
    subVal.className+="play-again";


}

function setMsg(msg,color){
    conMsg.textContent=msg;
    conMsg.style.color=color;

}

function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}