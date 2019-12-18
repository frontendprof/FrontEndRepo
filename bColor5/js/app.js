const colors=["red","blue","magenta","indigo","pink","green","lime",'crimson'];



const btn=document.querySelector("#btn");

btn.addEventListener("click", cColor);

function cColor(){
    const random=Math.floor(Math.random()*colors.length);

    let body=document.body;
    body.style.background=colors[random];
}