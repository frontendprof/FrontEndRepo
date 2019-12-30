

// Immediate invoked function expression

(function(){

    sForm=document.querySelector("#m-form");

    sForm.addEventListener("submit",showMsg);

    function showMsg(e){
        e.preventDefault();


        const msg=document.querySelector("#mess");
        const valM=msg.value;
        console.log(valM);

        if(valM===""){
            const feedB=document.querySelector(".feedback");
            feedB.classList.add("show");
            setTimeout(function(){
                feedB.classList.remove("show")
            },2500);

        }else{
            document.querySelector(".mes-cont").textContent=valM;
            msg.value="";

        }

        
    }

})();