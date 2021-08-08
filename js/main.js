/* Please ❤ this if you like it! */


(function($) { "use strict";

	$(function() {
		var header = $(".start-style");
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();
		
			if (scroll >= 10) {
				header.removeClass('start-style').addClass("scroll-on");
			} else {
				header.removeClass("scroll-on").addClass('start-style');
			}
		});
	});		
		
	//Animation
	
	$(document).ready(function() {
		$('body.hero-anime').removeClass('hero-anime');
	});

	//Menu On Hover
		
	$('body').on('mouseenter mouseleave','.nav-item',function(e){
			if ($(window).width() > 750) {
				var _d=$(e.target).closest('.nav-item');_d.addClass('show');
				setTimeout(function(){
				_d[_d.is(':hover')?'addClass':'removeClass']('show');
				},1);
			}
	});	

	$(document).ready(function(){
		$('.carousel').slick({
		  speed: 500,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  dots:true,
		  centerMode: true,
		  responsive: [{
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  // centerMode: true,
	  
			}
	  
		  }, {
			breakpoint: 800,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  dots: true,
			  infinite: true,
	  
			}
		  },  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  dots: true,
			  infinite: true,
			  autoplay: true,
			  autoplaySpeed: 2000,
			}
		  }]
		});
	  });
	
	
  })(jQuery);

  jQuery(document).ready(function(){

    jQuery('.dot-1, .card-2-pre').click(function(){
        jQuery('.slider-card-1').css({"transform":"translateX(0%)"}).addClass('cuurent-act-card-border');
        jQuery('.slider-card-2').css({"transform":"translateX(110%)"}).removeClass('cuurent-act-card-border');
        jQuery('.slider-card-3').css({"transform":"translateX(220%)"}).removeClass('cuurent-act-card-border');
        jQuery('.slider-card-4').css({"transform":"translateX(330%)"}).removeClass('cuurent-act-card-border');
        jQuery('.slider-card-5').css({"transform":"translateX(440%)"}).removeClass('cuurent-act-card-border');
        jQuery('.dot-1').addClass('cuurent-act-card');
        jQuery('.dot-2, .dot-3, .dot-4, .dot-5').removeClass('cuurent-act-card');
        jQuery('.card-1-disable, .card-1-nxt ,.card-2-nxt, .card-2-pre').css({"display":"block"});
        jQuery('.card-2-pre, .card-2-nxt, .card-3-pre, .card-3-nxt, .card-4-pre, .card-4-nxt, .card-5-pre, .card-5-disable').css({"display":"none"});
    });
    jQuery('.dot-2, .card-3-pre, .card-1-nxt').click(function(){
        jQuery('.slider-card-1').css({"transform":"translateX(-110%)"}).removeClass('cuurent-act-card-border');
        jQuery('.slider-card-2').css({"transform":"translateX(0%)"}).addClass('cuurent-act-card-border');
        jQuery('.slider-card-3').css({"transform":"translateX(110%)"}).removeClass('cuurent-act-card-border');
        jQuery('.slider-card-4').css({"transform":"translateX(220%)"}).removeClass('cuurent-act-card-border');
        jQuery('.slider-card-5').css({"transform":"translateX(330%)"}).removeClass('cuurent-act-card-border');
        jQuery('.dot-2').addClass('cuurent-act-card');
        jQuery('.dot-1, .dot-3, .dot-4, .dot-5').removeClass('cuurent-act-card');
        jQuery('.card-2-nxt, .card-2-pre').css({"display":"block"});
        jQuery('.card-1-nxt, .card-1-disable, .card-3-pre, .card-3-nxt, .card-4-pre, .card-4-nxt, .card-5-pre, .card-5-disable').css({"display":"none"});
    });
    jQuery('.dot-3, .card-2-nxt, .card-4-pre').click(function(){
        jQuery('.slider-card-1').css({"transform":"translateX(-220%)"}).removeClass('cuurent-act-card-border');
        jQuery('.slider-card-2').css({"transform":"translateX(-110%)"}).removeClass('cuurent-act-card-border');
        jQuery('.slider-card-3').css({"transform":"translateX(0%)"}).addClass('cuurent-act-card-border');
        jQuery('.slider-card-4').css({"transform":"translateX(110%)"}).removeClass('cuurent-act-card-border');
        jQuery('.slider-card-5').css({"transform":"translateX(220%)"}).removeClass('cuurent-act-card-border');
        jQuery('.dot-3').addClass('cuurent-act-card');
        jQuery('.dot-1, .dot-2, .dot-4, .dot-5').removeClass('cuurent-act-card');
        jQuery('.card-3-nxt, .card-3-pre').css({"display":"block"});
        jQuery('.card-1-nxt, .card-1-disable, .card-2-pre, .card-2-nxt, .card-4-pre, .card-4-nxt, .card-5-pre, .card-5-disable').css({"display":"none"});
    });
 
    });
    
    const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
      document.getElementById('scrollcontainer').scrollLeft += 310;
	  console.log('1')
    };
    buttonLeft.onclick = function () {
      document.getElementById('scrollcontainer').scrollLeft -= 310;
    };