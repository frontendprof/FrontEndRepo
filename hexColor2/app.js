// Immediate invoked function expression


(function (){

    const hexValue=document.querySelector("#hex-value");
    const btn=document.querySelector(".btn");

    btn.addEventListener("click",createHex);

    function createHex(){
        const hexVs=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexP="#";

        for(let i=0; i<6; i++){
            let random=Math.floor(Math.random()*hexVs.length);
            hexP+=hexVs[random];
                        
        }
        console.log(hexP);
        const body=document.body;
        body.style.background=hexP;
        hexValue.textContent=hexP;
    }



})();