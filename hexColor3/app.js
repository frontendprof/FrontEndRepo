

// Defining immediate invoked function expression

(function(){
    const hVal=document.querySelector("#hex-value");
    const btn=document.querySelector(".btn");
    btn.addEventListener('click',hexChange);

    function hexChange(){

        const hexVs=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexP="#";

        for(let i=0;i<6;i++){
            let random=Math.floor(Math.random()*hexVs.length);
            hexP+=hexVs[random];
        }
        hVal.textContent=hexP;
        document.body.style.backgroundColor=hexP;

    }




})();