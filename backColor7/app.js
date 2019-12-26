const colors=["turquoise","maroon",'red','blue','cyan','magenta',"gold",'silver','teal','green','plum','pink','yellow'];
const btn=document.querySelector(".btn");


btn.addEventListener("click",changeColor);


function changeColor(){
    let random=Math.floor(Math.random()*colors.length);
    console.log(random);
    
    document.body.style.backgroundColor=colors[random];
}