

const colors=['blue','red','green','black','cyan','magenta','teal','yellow'];

const btn=document.querySelector('.btn');

btn.addEventListener('click',changeColor);


function changeColor(){
    let random=Math.floor(Math.random()*colors.length);
    
    
    const body=document.body;
    body.style.background=colors[random];
    
}