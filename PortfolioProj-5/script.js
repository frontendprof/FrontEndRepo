

$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".navbar-toggler").toggleClass("change");
    })



    $(window).scroll(function(){
        let position=$(this).scrollTop();

        if(position>=167){
            $(".navbar").addClass("navbar-bg");
            $(".navbar").addClass("fixed-top");
        }else{
            $(".navbar").removeClass("navbar-bg");
            $(".navbar").removeClass("fixed-top");
        }
    })





});