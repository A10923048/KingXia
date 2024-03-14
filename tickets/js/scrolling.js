$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop:false,    
        autoplay:false,
        clone:false,
        margin:0,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:true,
        },

        376:{
            items:1,
            nav:true,
        },
        700:{
            items:2,
            nav:true,
        },
        950:{
            items:3,
            nav:true,
        },
        1200:{
            items:5,
            nav:true
        },
        }
    })

})