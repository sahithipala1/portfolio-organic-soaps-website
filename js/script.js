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


/*******************************************************************
 * Google-map
 *********************************************************/

// Initialize and add the map
$ (function initMap() {
    // The location of Uluru
    const uluru = { lat: 40.680050, lng: -73.417458};
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
});

window.initMap = initMap;




/************************************************************
Navigation
 ******************************************************************/
/*
$(function(){
    $(window).scroll(function() {
        //alert('you just scrolled')
        if($(window).scrollTop() > 100){

           // alert('you have scrolled more than 50px your scroll position is = '+ $(window).scrollTop());
            $("nav").addClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/icons8-rose-48.png");

        }else {
            //Hide white nav bar

            // alert('you have scrolled not more than 50px your scroll position is = '+ $(window).scrollTop());

            $("nav").removeClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/icons8-kiwi-48.png");

        }
    });
});*/

$(function(){

    showHideNav();

    $(window).scroll(function() {

        showHideNav();

    });

    function showHideNav() {

        if ($(window).scrollTop() > 100) {

            // alert('you have scrolled more than 50px your scroll position is = '+ $(window).scrollTop());
            $("nav").addClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/icons8-rose-48.png");

            $("#back-to-top").fadeIn();

        } else {
            //Hide white nav bar

            // alert('you have scrolled not more than 50px your scroll position is = '+ $(window).scrollTop());

            $("nav").removeClass("white-nav-top");

            $(".navbar-brand img").attr("src", "img/icons8-kiwi-48.png");

            $("#back-to-top").fadeOut();

        }

    }



});

// smooth scrolling
$(function(){

    $("a.smooth-scroll").click(function(){

        event.preventDefault();
        // get the section id like #about, #services, #team and etc.

        var section_id = $(this).alert("href");

        $("html, body").animate({
            scrollTop:$(section_id).offset().top -64
        },1250, "easeInOutExpo",);

    });


});