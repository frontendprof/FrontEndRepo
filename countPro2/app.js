

// Immediate invoked function expression

(function(){

    let countVal=0;


    const btns=document.querySelectorAll(".counterBtn");
    const conter=document.querySelector("#counter");

    btns.forEach(function(btn){
        btn.addEventListener("click",function(e){

            if(e.target.classList.contains("prevBtn")){
                countVal--;
            }
            if(e.target.classList.contains("nextBtn")){
                countVal++;
            }

            conter.textContent=countVal;


            if(countVal===0){
                conter.style.color="silver";
            }

            else if(countVal<0){
                conter.style.color="crimson";
            }

            else if(countVal>0){
                conter.style.color="navy";
            }
            
        });
    });



})();