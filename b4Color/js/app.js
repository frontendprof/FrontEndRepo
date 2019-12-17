

const colors=['red','blue','cyan','orange','yellow','magenta','pink','lime','teal','#2d132c'];


const btn=document.querySelector('#btn');

btn.addEventListener('click',cColor);

function cColor(){

    let random=Math.floor(Math.random()*colors.length);

    const body=document.body;
    body.style.background=colors[random];

    console.log(random);
    
}