


const colors=["red","blue","green","orange","purple","cyan","teal","magenta"];

const btn=document.querySelector("#btn");

btn.addEventListener("click",changeColor);

function changeColor(){
    let random=Math.floor(Math.random()*colors.length);
    
    const body=document.body;
    body.style.backgroundColor=colors[random];
    console.log(random);
    
}