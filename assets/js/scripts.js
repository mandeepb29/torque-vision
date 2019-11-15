

(function($) {
	'use strict';
	
	/*===================================*
	01. LOADING JS
	/*===================================*/
	$(window).on('load', function() {
		var preLoder = $(".preloader");
		preLoder.delay(700).fadeOut(500);
	});

	const Url='https://tv-backend.herokuapp.com/post';

	

var validate = function(e){
	//console.log('hitttttttt');
	let name=document.getElementById("first-name").value;
	let email=document.getElementById("email").value;
	let subject =document.getElementById("subject").value;
	let description= document.getElementById("description").value;
	var flag = 1;
	if(email === ""){
		document.getElementById("email").style.borderColor="#fa3b3b";
		document.getElementById("email").placeholder = "Email cannot be null";
		flag=0;
	}
	if(subject === ""){
		document.getElementById("subject").style.borderColor="#fa3b3b";
		document.getElementById("subject").placeholder = "Subject cannot be null";
		
		flag=0;
	}
	if(description === ""){
		document.getElementById("description").style.borderColor="#fa3b3b";
		document.getElementById("description").placeholder = "Message cannot be null";
		
		flag=0;
	}if(name === ""){
		document.getElementById("first-name").style.borderColor="#fa3b3b";
		document.getElementById("first-name").placeholder = "Name cannot be null";
		flag=0;
	}
	if(flag==1){
		$.ajax({
			url: Url,
			type: "POST",
			contentType: 'application/json',
			data: JSON.stringify({"name": name, "email":email, "subject": subject, "desc":description}),
			// data: {name: 'John'},
			success: function(data){
				console.log(data);
			}
		  });
	}
	else{
		e.preventDefault();
        console.log("validations not fullfilled");
	}
	
}

$('form').on('submit', validate);

	/*===================================*
	02. SMOOTH SCROLLING JS
	*===================================*/
	// Select all links with hashes
    $('a.page-scroll').on('click', function(event) {
        // On-page links
        if ( location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {
          // Figure out element to scroll to
          var target = $(this.hash),
              speed= $(this).data("speed") || 800;
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 60
            }, speed);
          }
        }
    });
	
	/*===================================*
	03. MENU JS
	*===================================*/
	//Main navigation scroll spy for shadow
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

	    if (scroll >= 80) {
	        $('header').addClass('nav-fixed');
	    } else {
	        $('header').removeClass('nav-fixed');
	    }

	});
	
	//Hide Navbar Dropdown After Click On Links
	var navBar = $(".header_wrap");
	var navbarLinks = navBar.find(".navbar-collapse ul li a");

    $.each( navbarLinks, function( i, val ) {

      var navbarLink = $(this);

        navbarLink.on('click', function () {
          navBar.find(".navbar-collapse").collapse('hide');
        });

    });
	
	//Main navigation Active Class Add Remove
	$('.navbar-toggler').on('click', function() {
	    $("header").toggleClass("active");
	});
   
	/*===================================*
	04. BACKGROUND ANIMATION JS
	*===================================*/
	var $particles_js = $('#banner_bg_effect');
	if ($particles_js.length > 0) {
		particlesJS('banner_bg_effect',
			// Update your personal code.
			{
				"particles": {
					"number": {
						"value": 90,
						"density": {
							"enable": true,
							"value_area": 800
						}
					},
					"color": {
						"value": "#eb0101"
					},
					"shape": {
						"type": "polygon",
						"stroke": {
							"width": 0,
							"color": "#000000"
						},
						"polygon": {
							"nb_sides": 6
						},
						"image": {
							"src": "img/github.svg",
							"width": 100,
							"height": 100
						}
					},
					"opacity": {
						"value": 0.5,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1,
							"opacity_min": 0.1,
							"sync": false
						}
					},
					"size": {
						"value": 3,
						"random": true,
						"anim": {
							"enable": false,
							"speed": 40,
							"size_min": 0.1,
							"sync": false
						}
					},
					"line_linked": {
						"enable": true,
						"distance": 150,
						"color": "#fff",
						"opacity": 0.2,
						"width": 1
					},
					"move": {
						"enable": true,
						"speed": 7,
						"direction": "none",
						"random": false,
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
							"enable": false,
							"rotateX": 600,
							"rotateY": 1200
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": true,
							"mode": "repulse"
						},
						"onclick": {
							"enable": true,
							"mode": "push"
						},
						"resize": true
					},
					"modes": {
						"grab": {
							"distance": 400,
							"line_linked": {
								"opacity": 1
							}
						},
						"bubble": {
							"distance": 400,
							"size": 40,
							"duration": 2,
							"opacity": 8,
							"speed": 3
						},
						"repulse": {
							"distance": 200,
							"duration": 0.4
						},
						"push": {
							"particles_nb": 4
						},
						"remove": {
							"particles_nb": 2
						}
					}
				},
				"retina_detect": true
			}
	
		);
	}
	
	  
  	/*===================================*
	05. BACKGROUND ANIMATION JS
	*===================================*/
	 $('.clients').owlCarousel({
	     loop: false,
	     margin: 40,
	     nav: true,
	     navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
	     responsive: {
	         0: {
	             items: 1,

	         },
	         380: {
	             items: 2,
	             margin: 15,
	         },
	         600: {
	             items: 3
	         },
	         1000: {
	             items: 5
	         },
	         1199: {
	             items: 5
	         }
	     }
	 });
	
	/*===================================*
     06.COUNTDOWN JS
    *===================================*/
    $('.tk_countdown_time').each(function() {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function(tm) {
            $(this).html(tm.strftime('<span class="counter_box"><span class="tk_counter days">%D </span><span class="tk_text">Days</span></span><span class="counter_box"><span class="tk_counter hours">%H</span><span class="tk_text">Hours</span></span><span class="counter_box"><span class="tk_counter minutes">%M</span><span class="tk_text">Minutes</span></span><span class="counter_box"><span class="tk_counter seconds">%S</span><span class="tk_text">Seconds</span></span>'));
        });
    });
	


	/*===================================*
	08. CONTACT FORM JS
	*===================================*/
	// $("#submitButton").on("click", function(event) {
	//     event.preventDefault();
	//     var mydata = $("form").serialize();
	//     $.ajax({
	//         type: "POST",
	//         dataType: "json",
	//         url: "contact.php",
	//         data: mydata,
	//         success: function(data) {
	//             if (data.type === "error") {
	//                 $("#alert-msg").removeClass("alert-msg-success");
	//                 $("#alert-msg").addClass("alert-msg-failure");
	//             } else {
	//                 $("#alert-msg").addClass("alert-msg-success");
	//                 $("#alert-msg").removeClass("alert-msg-failure");
	//                 $("#first-name").val("Enter Name");
	//                 $("#email").val("Enter Email");
	//                 $("#subject").val("Enter Subject");
	//                 $("#description").val("Enter Message");

	//             }
	//             $("#alert-msg").html(data.msg);
	//             $("#alert-msg").show();
	//         },
	//         error: function(xhr, textStatus) {
	//             alert(textStatus);
	//         }
	//     });
	// });
	
	
	/*===================================*
	09. SCROLLUP JS
	*===================================*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 150) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	
	$(".scrollup").on('click', function (e) {
		
		$('html, body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	
	
	/*===================================*
	10. POPUP JS
	*===================================*/
	$('.content-popup').magnificPopup({
		type: 'inline',
		preloader: true,
		mainClass: 'mfp-zoom'
	});
	
	/*===================================*
	11. ANIMATION JS
	*===================================*/
	$(function() {
	
		function ckScrollInit(items, trigger) {
			items.each(function() {
				var ckElement = $(this),
					AnimationClass = ckElement.attr('data-animation'),
					AnimationDelay = ckElement.attr('data-animation-delay');
	
				ckElement.css({
					'-webkit-animation-delay': AnimationDelay,
					'-moz-animation-delay': AnimationDelay,
					'animation-delay': AnimationDelay
				});
	
				var ckTrigger = (trigger) ? trigger : ckElement;
	
				ckTrigger.waypoint(function() {
					ckElement.addClass("animated").css("visibility", "visible");
					ckElement.addClass('animated').addClass(AnimationClass);
				}, {
					triggerOnce: true,
					offset: '90%'
				});
			});
		}
	
		ckScrollInit($('.animation'));
		ckScrollInit($('.staggered-animation'), $('.staggered-animation-wrap'));
	
	});
	
	/*===================================*
	12. SHOW HIDE PASSWORD
	*===================================*/
	
	$(".toggle-password").on('click', function () {

	  $(this).toggleClass("ion-eye ion-eye-disabled");
	  var input = $($(this).attr("data-toggle"));
	  if (input.attr("type") == "password") {
		input.attr("type", "text");
	  } else {
		input.attr("type", "password");
	  }
	});
	
	/*===================================*
	13. COLOR SWITCHHER JS
	*===================================*/
	$(".color-switch").on("click", "button", function() {
	
		$(this).addClass("active").siblings().removeClass("active");
		$("#layoutstyle").attr("href", "assets/color/" + $(this).val() + ".css");
	
	});
	
	$(".icon").on("click", function() {
		$(".color-switch").toggleClass("switch-active");
		$(this).toggleClass("switch-active");
	});

	/*Demo js*/
	$( window ).on( "load", function() {
		document.onkeydown = function(e) {
			if(e.keyCode == 123) {
			 return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
			 return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
			 return false;
			}
			if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
			 return false;
			}
		
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
			 return false;
			}      
		 }
		 
		$("html").on("contextmenu",function(){
			return true;
		});
	});
			
})(jQuery);
	/*===================================*
	 07. VIDEO ON HOVER
	*===================================*/
	const videos = document.querySelectorAll('video')
	if(screen.width > 768){
		videos.forEach(video => {
			video.addEventListener("mouseover", function(){
				this.play();
			});
			video.addEventListener("mouseout", function(){
				this.pause();
			});
		})
	}
	else{
		videos.forEach(video => {
			video.setAttribute("controls","controls") ;
		});
	}


//https://webdesign.tutsplus.com/tutorials/how-to-integrate-no-captcha-recaptcha-in-your-website--cms-23024
