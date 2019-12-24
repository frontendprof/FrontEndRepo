

const colors=['red','blue','green','pink','coral','aqua','brown','crimson','indigo','magenta','maroon','olive','orange','purple','silver','yellow'];

const btn=document.querySelector(".btn");


btn.addEventListener('click',chColor);


function chColor(){
    let randomNum=Math.floor(Math.random()*colors.length);
        
    const body=document.body;
    body.style.background=colors[randomNum];
    
}