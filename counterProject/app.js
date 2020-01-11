
// Immediate invoked function expression

(function(){

    let counterVal=0;

    const btns=document.querySelectorAll(".counterBtn");
    const conter=document.querySelectorAll("#counter");


    btns.forEach(function(btn){
        btn.addEventListener("click",function(event){
            const value=event.target;

            console.log(value);

            if(value.classList.contains("prevBtn")){
                counterVal--;
            }
            
            else if(value.classList.contains("nextBtn")){
                counterVal++;
            }

            conter.textContent=counterVal;
            
        });

    });



})();