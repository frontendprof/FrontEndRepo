

// Immediate invoked function expression

(function(){

    sForm=document.querySelector("#m-form");

    sForm.addEventListener("submit",showMsg);

    function showMsg(e){
        e.preventDefault();

        const messg=document.querySelector("#mess");
        const valM=messg.value;
        console.log(valM);
        
    }

})();