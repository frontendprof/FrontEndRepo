

$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".navbar-toggler").toggleClass("change");
    })



    $(window).scroll(function(){
        let position=$(this).scrollTop();

        if(position>=157){
            $(".navbar").addClass("navbar-bg");
            $(".navbar").addClass("fixed-top");
        }else{
            $(".navbar").removeClass("navbar-bg");
            $(".navbar").removeClass("fixed-top");
        }
    })


    // smooth scroll

    $(".nav-item a").click(function(link){
        link.preventDefault();

        let target=$(this).attr("href");
        $('html,body').stop().animate({
            scrollTop:$(target).offset().top
        },5000)
    })


    // Isotope
  let $grid = $(".grid").isotope({
    // options
  });
  // filter items on button click
  $(".filter-button-group").on("click", "button", function() {
    let filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue
    });

    });


    // layout Isotope after each image loads
    $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });





});