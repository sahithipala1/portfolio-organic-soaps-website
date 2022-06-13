//java script
//var myvariable = "welcome to kiwi";
//document.write(myvariable);


// hide preloader //

$(window).on('load' ,function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


// Team memebers .......//

$(function() {
    $('#team-members').owlCarousel({
      items:2,
      margin:10,
      autoplay:true,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause : true,
      nav: true,
      dots: false,
      navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right" ></i>']
    
     
   });
});

/* progress bar (waypoints plugins)*/
$(function(){

    $("#progress-elements").waypoint(function(){

        $(".progress-bar").each(function(){
            $(this).animate({
              width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset:"bottom-in-view"        
    });
});



/* Responsive tabs */

$(function() {

    $("#services-tabs").responsiveTabs({
       animation:"slide"

    });

});


$(function(){
    $('#responsiveTabsDemo').responsiveTabs({
        startCollapsed: 'accordion'
    });
   

});

/* Portfolio */
$(window).on("load", function() {
    // initialize isotope
    $("#isotope-container").isotope({
    });

    $("#isotope-filters").on("click", "button", function(){
        var filterValue =$(this).attr('data-filter');
        

        $("#isotope-container").isotope({
            filter:filterValue
        });

        //active button
        $("#isotope-filters").find("active").removeClass("active");
        $(this).addClass('active');
    

    });

}); 

/** Magnifier*/

$(function(){
    $("#portfolio-wraper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
          enabled:true
        }
        // other options
    });

});



/** testimonials */
$(function() {
    $('#testimonial-slider').owlCarousel({
      items:1,
      autoplay:true,
      smartSpeed:700,
      loop:true,
      autoplayHoverPause : true,
      nav: true,
      dots: false,
      navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right" ></i>']
    
     
   });
});





/** Stats Section **/

$(function() {
    $('.counter').counterUp({
        delay:10,
        time:2000

    });

});

/** Clients **/
$(function() {
    $('#clients-list').owlCarousel({
        items:7,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause : true,
        nav: true,
        dots: false,
        navText:['<i class="fa fa-solid fa-angle-left"></i>','<i class="fa fa-angle-right" ></i>']


    });
});
