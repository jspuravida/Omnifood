//Easy example to check if jquery works
//This selects the h1 element, and when you click it, it switches the color
//Everything has to live within the original document.ready function

//$(document).ready(function() {
//    
//    $('h1').click(function(){
//        $(this).css('background-color', '#ff0000');
//    }) 
//});

    //-----------------------------
    //STICKY NAVIGATION
    //-----------------------------

//Add a class to the nav element everytime we leave the header

//WAYPOINTS PLUGIN
// (to trigger a function when the user scrolls to an element)

//We used the plugin called Waypoints, to trigger a function when the user scrolls to an element

//var waypoints = $('#handler-first').waypoint(function(direction) {
//  notify(this.element.id + ' hit 25% from top of window') 
//}, {
//  offset: '25%'
//})

$(document).ready(function() {
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    //-----------------------------
    // SCROLL ON BUTTON CLICKS
    //-----------------------------
    
//    In the end, we select .js--scroll-to-plans class, and when we click on it, we have an animation which scrolls to the top of the js--section-plans section with a speed of 1 second.
    
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 700);
    });
    
    //-----------------------------
    // NAVIGATION SCROLL
    //-----------------------------
    
//    Taken from css-tricks.com - smooth scrolling
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    //-----------------------------
    // ANIMATIONS ON SCROLL
    //-----------------------------
    
//    To have the element fade in, it needs to start off invisible so we need to make adjustments to the css.
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '70%'
    });
    
    
    //-----------------------------
    // MOBILE NAVIGATION
    //-----------------------------
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
    
});










