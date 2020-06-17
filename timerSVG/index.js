

class Timer{
    constructor(durationInput,startBtn,pauseBtn,callbacks){
        this.durationInput=durationInput;
        this.startBtn=startBtn;
        this.pauseBtn=pauseBtn;

        this.startBtn.addEventListener("click",this.start);
        this.pauseBtn.addEventListener("click",this.pause);

        if(callbacks){
            this.onStart=callbacks.onStart;
        }
    
    }

    start=()=>{

        if(this.onStart){
            this.onStart();
        }

        this.tick();
        this.interval=setInterval(this.tick,1000);
        
    }
    pause=()=>{
        clearInterval(this.interval);
        
    }

    tick=()=>{

        if(this.timeRemaining<=0){
            this.pause();
        }else{
            this.timeRemaining=this.timeRemaining-1;
        }
        
        
    }

    get timeRemaining(){
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        this.durationInput.value=time;
    }
}


const durationInput=document.querySelector("#duration");
const startBtn=document.querySelector("#start");
const pauseBtn=document.querySelector("#pause");

const timer=new Timer(durationInput,startBtn,pauseBtn,{
    onStart(){
        console.log("Timer started")
        
    },

    onTick(){},

    onComplete(){}
});