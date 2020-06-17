

class Timer{
    constructor(durationInput,startBtn,pauseBtn){
        this.durationInput=durationInput;
        this.startBtn=startBtn;
        this.pauseBtn=pauseBtn;

        this.startBtn.addEventListener("click",this.start);
        this.pauseBtn.addEventListener("click",this.pause);
    
    }

    start=()=>{

        this.tick();
        this.interval=setInterval(this.tick,1000);
        
    }
    pause=()=>{
        clearInterval(this.interval);
        
    }

    tick=()=>{
        const timeRemaining=parseFloat(this.durationInput.value);
        this.durationInput.value=timeRemaining-1;
        
    }
}


const durationInput=document.querySelector("#duration");
const startBtn=document.querySelector("#start");
const pauseBtn=document.querySelector("#pause");

const timer=new Timer(durationInput,startBtn,pauseBtn);