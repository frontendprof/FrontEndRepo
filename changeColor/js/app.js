

const colors=['red','green','peacock','lilac','blue','orange','coral','cyan','magenta','brown','teal','pink','yellow','tan'];


const btn=document.querySelector('.btn');

btn.addEventListener('click',changeColor);

function changeColor(){
    const random=Math.floor(Math.random()*colors.length);

    const body=document.body;
    body.style.background=colors[random];
    console.log(random);
    
}