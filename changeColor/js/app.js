

const colors=['red','green','blue','orange','cyan','magenta','brown','teal','pink','yellow'];


const btn=document.querySelector('#btn');

btn.addEventListener('click',changeColor);

function changeColor(){
    const random=Math.random()*colors.length;
}