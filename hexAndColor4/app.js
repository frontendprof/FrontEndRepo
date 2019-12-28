(function(){

    const hexx=document.querySelector("#hex-value");
    const btn=document.querySelector(".btn");

    btn.addEventListener("click",hexColor);

    function hexColor() {

        const hexValues=[1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"]
        hexP="#"

        
        for(let i=0;i<6;i++){
            let random=Math.floor(Math.random()*hexValues.length);
            hexP+=hexValues[random];
            console.log(hexP);
            
        }
        document.body.style.background=hexP;
        hexx.textContent=hexP;
        
    }

})();