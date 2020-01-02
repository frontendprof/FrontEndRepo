

// Defining UI elements

const colors=['red','blue','green','black','cyan','indigo','brown','magenta','plum','pink',
"orange","silver"];
const btn=document.querySelector(".btn");

btn.addEventListener("click",function(){
    let random=Math.floor(Math.random()*colors.length);
    document.body.style.background=colors[random];

});