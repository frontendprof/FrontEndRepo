


const durationInput=document.querySelector("#duration");
const startBtn=document.querySelector("#start");
const pauseBtn=document.querySelector("#pause");
const circle=document.querySelector("circle");

const perimeter=circle.getAttribute("r")*2*Math.PI;
circle.setAttribute("stroke-dasharray",perimeter);



let currentOffset=0;
const timer=new Timer(durationInput,startBtn,pauseBtn,{
    onStart(){
        console.log("Timer started")
        
    },

    onTick(){
        console.log("Timer just ticked down");
        circle.setAttribute("stroke-dashoffset",currentOffset);
        currentOffset=currentOffset-2;
        
    },

    onComplete(){
        console.log("Timer is complete");
        
    }
});