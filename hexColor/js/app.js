


// Need to create immediate invoked function expression

(function(){


    const hexValue=document.querySelector('#hex-value');
    const btn=document.querySelector("#btn");

    btn.addEventListener("click",createHex);

    function createHex(){
        const hexValues=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

        let hexPound='#';

        for (let i=0; i<6;i++){
            let random=Math.floor(Math.random()*hexValues.length);
            hexPound+=hexValues[random];
        }

        document.body.style.backgroundColor=hexPound;
        hexValue.textContent=hexPound;



    }





})();