

// Immediate invoked function expression


(function(){

    const pics=[
        "cB-0.jpeg",
        "cB-1.jpeg",
        "cB-2.jpeg",
        "cB-3.jpeg",
        "cB-4.jpeg"

    ];

    let counter=0;

    const btns=document.querySelectorAll(".btn");

    btns.forEach(function(btn){
        btn.addEventListener("click",function(e){
            
            if(e.target.classList.contains("btn-left")){
                counter--;
                if(counter<0){
                    counter=pics.length-1;
                }
                document.querySelector(".img-cont").style.backgroundImage=`url("img/${pics[counter]}")`;                
            }        
            
            

        });
    });

})();