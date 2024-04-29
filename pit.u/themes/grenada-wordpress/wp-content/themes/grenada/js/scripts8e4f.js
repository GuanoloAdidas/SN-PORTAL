
jQuery(function ($) {

	
	$(document).ready(function() {
	
		"use strict";
		
		PageLoad();
		FirstLoad();
		HeroSection();
		Sliders();
		if( (typeof ClapatGrenadaThemeOptions != 'undefined') && (ClapatGrenadaThemeOptions.enable_ajax == "1") ){
			AjaxLoad();
		} else {
			PageLoadNoAjax();
		}
		Portfolio();
		setTimeout(function(){
			Portfolio();						
		} , 100 );
		PortfolioPackery();
		Blog();
		BackToTop();		
		JustifiedGrid();
		Lightbox();
		AppearIteam();
		InitContactMap();
		PlayVideo();
	
	});



/*--------------------------------------------------
Function Page Load
---------------------------------------------------*/

	function PageLoad() {	
		
		if ($('#page-content').hasClass("light-content")) {
			$('.preloader-wrap').addClass('light-content');			
		}
		
		$('body').removeClass('hidden');		
		
		var width = 100,
			perfData = window.performance.timing, 
			EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
			time = ((EstimatedTime/1000)%10) * 50
		
		
		// Percentage Increment Animation
		var PercentageID = $("#precent"),
				start = 0,
				end = 100,
				durataion = time;
				animateValue(PercentageID, start, end, durataion);
				
		function animateValue(id, start, end, duration) {
		  
			var range = end - start,
			  current = start,
			  increment = end > start? 1 : -1,
			  stepTime = Math.abs(Math.floor(duration / range)),
			  obj = $(id);
			
			var timer = setInterval(function() {
				current += increment;
				$(obj).text(current);
			  //obj.innerHTML = current;
				if (current == end) {
					clearInterval(timer);
				}
			}, stepTime);
		}
		
		// Fading Out Loadbar on Finised
		setTimeout(function(){
			$('body').waitForImages({
					finished: function() {
						
						if( $('.split-slider').length > 0 ){
							TweenMax.to($(".preloader-wrap"),1, {force3D:true, xPercent: -101, delay:0.3, ease:Power2.easeInOut});
						} else {
							TweenMax.to($(".preloader-wrap"),0.7, {force3D:true, yPercent: -101, delay:0.3, ease:Power2.easeInOut});
						}
						TweenMax.set($(".preloader-wrap"), {visibility:'hidden', delay:0.9, opacity:0});
						
						setTimeout(function(){
						
							$('body').waitForImages({
								finished: function() {
									TweenMax.to($("#header-container, #footer-container, #sidebar"), 1, {force3D:true, opacity:1, ease:Power2.easeOut});
									TweenMax.to($(".split-slider #image-slider"), 1.2, {force3D:true, opacity:0.8, x:0, scale:1, delay:0.5, ease:Power2.easeOut});
									TweenMax.to($(".centered-slider #image-slider"), 1, {force3D:true, opacity:0.8, x:0, scale:0.6, delay:0.5, ease:Power2.easeOut});						
									var tlThumbs = new TimelineLite();
									$(".split-slider .swiper-slide").each(function(index, element) {
										tlThumbs.to(element, 1, {x:0, opacity:1, delay:0.5,  ease:Power2.easeOut}, index * 0.03)
									});
									TweenMax.to($("#external-caption"), 0.6, {force3D:true, opacity:1, delay:1, x:0, ease:Power2.easeOut});
									TweenMax.to($(".centered-slider .swiper-slide-active"), 1, {force3D:true, scale:1, opacity:1, delay:0.8, ease:Power2.easeOut  });
									TweenMax.to($(".centered-slider .swiper-slide-active").prev(), 1, {force3D:true, scale:1, opacity:1, delay:0.85, ease:Power2.easeOut  });
									TweenMax.to($(".centered-slider .swiper-slide-active").next(), 1, {force3D:true, scale:1, opacity:1, delay:0.85, ease:Power2.easeOut  });
									TweenMax.to($(".centered-slider .swiper-slide-active").prev().prev(), 1, {force3D:true, scale:1, opacity:1, delay:0.9, ease:Power2.easeOut  });
									TweenMax.to($(".centered-slider .swiper-slide-active").next().next(), 1, {force3D:true, scale:1, opacity:1, delay:0.9, ease:Power2.easeOut  });
									TweenMax.to($(".centered-slider .swiper-slide"), 1, {force3D:true, scale:1, opacity:1, delay:1, ease:Power2.easeOut  });
										
								},
								waitForAll: true
							});
							
							TweenMax.to($("#main"), 0.2, {force3D:true, opacity:1, delay:0.1, ease:Power2.easeOut});
							if( $('#hero').hasClass("has-image")) {	
								TweenMax.to($("#hero-bg-image"), 1, {force3D:true, scale:1.05 , opacity:0.8, delay:0.4, ease:Power2.easeOut});
								TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.7, ease:Power2.easeOut});
								TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y: 50, opacity:1, delay:0.75, ease:Power2.easeOut});
								TweenMax.to($(".scroll-down-wrap"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.85, ease:Power2.easeOut});
								TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:0.95, ease:Power2.easeOut});
							} else {
								TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.7, ease:Power2.easeOut});
								TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y: 50, opacity:1, delay:0.75, ease:Power2.easeOut});
								TweenMax.to($(".post-article-wrap"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.7, ease:Power2.easeOut});
								TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:0.85, ease:Power2.easeOut});
								TweenMax.to($("#post-content, .post-meta-data, .post-navigation, .post-comments, .post-form"), 0.4, {force3D:true, opacity:1, y:0, delay:0.75, ease:Power2.easeOut});
								var blogarticles = new TimelineLite();
								$("article").each(function(index, element) {
									blogarticles.to(element, 0.4, {y:0, opacity:1, delay:0.9,  ease:Power2.easeOut}, index * 0.1)
								});
							}
							TweenMax.to($("#footer-container, #blog-navigation, #sidebar"), 1, {force3D:true, opacity:1, ease:Power2.easeOut});
							
							if ($('#hero-bg-image').hasClass("light-content")) {
								$('#hero-caption').addClass('light-content');
								setTimeout(function(){
									$('#magic-cursor').addClass('light-content');
								} , 700 );			
								setTimeout(function(){
									$('#header-container').addClass('light-content');
								} , 600 );
							}		
								
							setTimeout( function(){	
								$('body').removeClass("load-project-page");
							} , 600 );
							
							setTimeout( function(){	
								$('body').removeClass("load-next-project");
								$('body').addClass("header-visible");
								$('#showcase-holder').removeClass("disabled");
							} , 1600 );
							
							setTimeout( function(){	
								$('body').removeClass("show-loader")
							} , 800 );	
							
						} , 100 );
					},
				waitForAll: true
			});
	  
		}, time);
		
		
		
	}// End Page Load
		


/*--------------------------------------------------
Function First Load
---------------------------------------------------*/	

	function FirstLoad() {	
		
		if ($("body").hasClass("smooth-scroll")) {
			var elem = document.querySelector("#content-scroll");
			var scrollbar = Scrollbar.init(elem,
			{
				renderByPixels: true,
				damping:0.05
			});
		}
		
		var heroparallax = TweenMax.to('#hero-image-parallax', 1, {top:"20%", ease:Linear.easeNone});
		var captionParallax = TweenMax.to('.has-image #hero-caption', 0.5, {top:"25%", ease:Linear.easeNone});
		
		var controller = new ScrollMagic.Controller();
		
		var heroScene = new ScrollMagic.Scene({
			triggerElement: '#hero',
			triggerHook: 0,
			duration:'100%'
		})
		.setTween(heroparallax)
		.addTo(controller);
		  
		var captionScene = new ScrollMagic.Scene({
			triggerElement: '#hero',
			triggerHook: 0,
			duration:'100%'
		})
		.setTween(captionParallax)
		.addTo(controller);
		
		if ($("body").hasClass("smooth-scroll")) {
			scrollbar.addListener(() => {
				heroScene.refresh()
				captionScene.refresh()
			});
		}
		
		// animate each
		$('.has-animation').each(function(){
			var $this = $(this);
			var $thisHeight = $(this).height();
			
			var scene = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeight})
				.addTo(controller);
			
			scene.triggerHook(1)
			
			scene.on('enter', function(){
				$this.delay($this.attr('data-delay')).queue(function(next){
					TweenMax.to($this, 0.6, {force3D:true, opacity:1, y:0, scale:1, delay:0.1, ease:Power2.easeOut});
					next();
				});
			});
			
			scene.on('leave', function(event){
				$this.removeClass('active');
			});
			
			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					scene.refresh()
				});
			}
		});
		
		
		// Item animate on scroll
		$('.item-appear').each(function(){
			var $this = $(this);
			var $thisHeight = $(this).height();
			
			var scene = new ScrollMagic.Scene({triggerElement:$this[0],duration: $thisHeight})
				.addTo(controller);
			
			scene.triggerHook(1)
			
			scene.on('enter', function(){
				$this.addClass('active');
			});
			
			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					scene.refresh()
				});
			}
		})
		
		
		var heroheight = $("#hero").height() 
		$('.scroll-down-wrap').on('click', function() {
			if ($("body").hasClass("smooth-scroll")) {
				TweenLite.to(scrollbar, 1.5, {scrollTo:heroheight, ease:Power4.easeInOut});
			} else {
				TweenLite.to(window, 1.5, {scrollTo:heroheight, ease:Power4.easeInOut});
			}
		});
		
		$('#backtotop').click(function(){
			if ($("body").hasClass("smooth-scroll")) {
				TweenLite.to(scrollbar, 1.5, {scrollTop:0, ease:Power4.easeInOut});
			} else {
				TweenLite.to(window, 1.5, {scrollTop:0, ease:Power4.easeInOut});
			}
		});
		
		if ($("body").hasClass("smooth-scroll")) {
			scrollbar.addListener((status) => {
				if (scrollbar.scrollTop > 200) {
				   $('#backtotop').addClass('active');
				} else {
				   $('#backtotop').removeClass('active');
				}
			});
		} else {
			$(window).scroll(function(){
				if ($(this).scrollTop() > $(window).height() * 0.7 ) {
					$('#backtotop').addClass('active');
				} else {
					$('#backtotop').removeClass('active');
				}
			});
		}
		
		// Post center on click
		$('.post-title').on('click', function() {
				
				var $window = $(window),
						$element = $('article.active'),
						elementTop = $element.offset().top,
						elementHeight = $element.height(),
						viewportHeight = $window.height(),
						scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);								
						
				if ($("body").hasClass("smooth-scroll")) {
					
					var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height/2);
                    
                    TweenLite.to(scrollbar, 1, {scrollTo:scrollOffset + elementHeight/2, ease:Power4.easeInOut});
                    
                }
                else{
                    
                    $("html, body").animate({ scrollTop: scrollIt }, 350);                
                }
				
		});
		
		
		// Slider Center on click
		$('.slider').on('click', function() {
				
				var $window = $(window),
						$element = $(this),
						elementTop = $element.offset().top,
						elementHeight = $element.height(),
						viewportHeight = $window.height(),
						scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);								
						
				if ($("body").hasClass("smooth-scroll")) {
					
					var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height/2);
                    
                    TweenLite.to(scrollbar, 0.8, {scrollTo:scrollOffset + elementHeight/2, ease:Power4.easeInOut});
                    
                }
                else{
                    
                    $("html, body").animate({ scrollTop: scrollIt }, 350);                
                }
				
		});
		
		
		// Slider Center on click
		$('.video-wrapper').on('click', function() {
				
				var $window = $(window),
						$element = $(this),
						elementTop = $element.offset().top,
						elementHeight = $element.height(),
						viewportHeight = $window.height(),
						scrollIt = elementTop - ((viewportHeight - elementHeight) / 2);								
						
				if ($("body").hasClass("smooth-scroll")) {
					
					var scrollOffset = scrollbar.offset.y + (elementTop - scrollbar.getSize().container.height/2);
                    
                    TweenLite.to(scrollbar, 0.8, {scrollTo:scrollOffset + elementHeight/2, ease:Power4.easeInOut});
                    
                }
                else{
                    
                    $("html, body").animate({ scrollTop: scrollIt }, 350);                
                }
				
		});
		
		
		// Next Projecr
		$('a.next-ajax-link-project').on('click', function() {				
			var pageheight = $(".scroll-content").height()
			if ($("body").hasClass("smooth-scroll")) {					
				TweenMax.to(scrollbar, 0.5, {scrollTop :pageheight, ease:Power4.easeIn});                    
			}
			else{                    
				 $("html, body").animate({ scrollTop: $(document).height() }, 500);            
			}
		});
		
		
		$("html,body").animate({scrollTop: 0}, 1);
		
		if ($("#page-content").hasClass("light-content")) {
			$("main, nav").css('background-color', '#0f1010');
			$('#magic-cursor').addClass('light-content');
			if( $('#hero').length > 0 ){						
				if( $('#hero').hasClass("has-image")) {	
					$("header").css('background-color', 'transparent');
				} else {
					$("header").css('background-color', '#0f1010');
				}
			}
		} else {
			$("main").css('background-color', '#fff');
			$("nav").css('background-color', '#0f1010');
			$('#magic-cursor').removeClass('light-content');
			if( $('#hero').hasClass("has-image")) {	
				$("header").css('background-color', 'transparent');
			} else {
				$("header").css('background-color', '#fff');
			}
		}
		
		$('.slider-img').each(function() {
			var image = $(this).data('src');	
			$(this).css({'background-image': 'url(' + image + ')'});
		});
		
		$('.video-cover').each(function() {
			var image = $(this).data('src');	
			$(this).css({'background-image': 'url(' + image + ')'});
		});
		
		//Load Default Page
		$('a.ajax-link').on('click', function() {
			$("body").addClass("show-loader");	
			$(".flexnav").removeClass("flexnav-show");
			$('#menu-burger').removeClass("open");
			var tlMenu = new TimelineLite();
			$(".fullscreen-menu .menu-timeline").each(function(index, element) {
				tlMenu.to(element, 0.25, {y:-80, opacity:0, ease:Power2.easeIn}, index * 0.05)
			});
			TweenMax.to($("nav"),0.4, {force3D:true, delay:0.2, opacity:0,  ease:Linear.easeNone });
			if (!$('#page-content').hasClass("light-content")) {	
				setTimeout( function(){
					$('#magic-cursor').removeClass('light-content');
					$('#header-container').removeClass('light-content');
				} , 300 );
			}
			$("#ball .image-tooltip").remove();		
			TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
			if( $('#showcase-holder').length > 0 ){
				TweenMax.to($(".split-slider .image-slider-wrapper"),0.4, {force3D:true, xPercent: -10, delay:0.2, opacity:0, ease:Power2.easeIn });
				TweenMax.to($(".split-slider .swiper-slide-active"), 0.4, {force3D:true, x:-250, opacity:0, delay:0, ease:Power2.easeIn  });
				TweenMax.to($(".split-slider .swiper-slide-active").next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.05, ease:Power2.easeIn  });
				TweenMax.to($(".split-slider .swiper-slide-active").next().next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.1, ease:Power2.easeIn  });
				TweenMax.to($(".split-slider .swiper-slide-active").next().next().next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.15, ease:Power2.easeIn  });
				TweenMax.to($(".split-slider .swiper-slide-active").next().next().next().next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.2, ease:Power2.easeIn  });
				
				TweenMax.to($(".centered-slider #image-slider"), 0.4, {force3D:true, opacity:0, x:0, scale:0.3, delay:0.2, ease:Power2.easeIn});
				TweenMax.to($(".centered-slider .swiper-slide-active"), 0.4, {force3D:true, scale:0.7, opacity:0, delay:0.3, ease:Power2.easeIn  });
				TweenMax.to($(".centered-slider .swiper-slide-active").prev(), 0.4, {force3D:true, scale:0.7, opacity:0, delay:0.35, ease:Power2.easeIn  });
				TweenMax.to($(".centered-slider .swiper-slide-active").next(), 0.4, {force3D:true, scale:0.7, opacity:0, delay:0.35, ease:Power2.easeIn  });
				TweenMax.to($(".centered-slider .swiper-slide-active").prev().prev(), 0.4, {force3D:true, scale:0.7, opacity:0, delay:0.4, ease:Power2.easeIn  });
				TweenMax.to($(".centered-slider .swiper-slide-active").next().next(), 0.4, {force3D:true, scale:0.7, opacity:0, delay:0.4, ease:Power2.easeIn  });
				TweenMax.to($("#main"), 0.3, {opacity:0, delay:0.4, ease:Power0.ease});
			} else {
				TweenMax.to($("#main"), 0.3, {opacity:0, delay:0.1, ease:Power0.ease});
			}		
			TweenMax.to($("#footer-container,#external-caption, #sidebar"), 0.3, {opacity:0, ease:Power0.ease});	
		});
		
		
		//Load Project Page from Split Slider
		$('.split-slider a.ajax-link-project').on('click', function() {
			$("body").addClass("show-loader");
			
			TweenMax.to($(".swiper-slide-active"), 0.4, {force3D:true, x:-250, opacity:0, delay:0, ease:Power2.easeIn  });
			TweenMax.to($(".swiper-slide-active").next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.05, ease:Power2.easeIn  });
			TweenMax.to($(".swiper-slide-active").next().next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.1, ease:Power2.easeIn  });
			TweenMax.to($(".swiper-slide-active").next().next().next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.15, ease:Power2.easeIn  });
			TweenMax.to($(".swiper-slide-active").next().next().next().next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.2, ease:Power2.easeIn  });			
			TweenMax.to($("#image-slider"), 0.7, {left:0, ease:Power2.easeInOut});
			TweenMax.to($("#image-slider .image-slider-wrapper"), 0.7, {x:0, ease:Power2.easeInOut});		
			setTimeout( function(){
				$("body").addClass("load-project-page");
			} , 100 );	
			TweenMax.to($("#footer-container, #external-caption"), 0.2, {opacity:0, ease:Power0.easeNone});									
		});
		
		//Load Project Page from Centered Slider
		$('.centered-slider a.ajax-link-project').on('click', function() {
			$("body").addClass("show-loader");
			
			TweenMax.to($(".centered-slider .swiper-slide-active"), 0.4, {force3D:true, scale:1.2, opacity:0, delay:0, ease:Power2.easeIn  });
			TweenMax.to($(".centered-slider .swiper-slide-active").prev(), 0.4, {force3D:true, scale:1.1, opacity:0, delay:0.05, ease:Power2.easeIn  });
			TweenMax.to($(".centered-slider .swiper-slide-active").next(), 0.4, {force3D:true, scale:1.1, opacity:0, delay:0.05, ease:Power2.easeIn  });
			TweenMax.to($(".centered-slider .swiper-slide-active").prev().prev(), 0.4, {force3D:true, scale:1, opacity:0, delay:0.1, ease:Power2.easeIn  });
			TweenMax.to($(".centered-slider .swiper-slide-active").next().next(), 0.4, {force3D:true, scale:1, opacity:0, delay:0.1, ease:Power2.easeIn  });			
			TweenMax.to($("#image-slider"), 0.7, {scale:1, ease:Power2.easeInOut});		
			setTimeout( function(){
				$("body").addClass("load-project-page");
			} , 100 );	
			TweenMax.to($("#footer-container, #external-caption"), 0.2, {opacity:0, ease:Power0.easeNone});									
		});
		
		//Load Post Page
		$('a.post-title').on('click', function() {
			$("body").addClass("load-post-page").addClass("show-loader");
			$("#ball .image-tooltip").remove();
			TweenMax.to($("#hero"), 0.2, {opacity:0, ease:Power0.easeNone});
			TweenMax.to($("#footer-container, #blog-navigation, #sidebar"), 0.2, {opacity:0, ease:Power0.easeNone});									
		});
		
		$('#burger-wrapper').on('click', function() {
			$('#menu-burger, nav').toggleClass('open');			
			setTimeout( function(){			
				if ($('#menu-burger').hasClass("open")) {
					$('header').addClass('over-sidebar');
					if (!$('#page-content').hasClass("light-content")) {	
						$('#magic-cursor').addClass('light-content');
						$('#header-container').addClass('light-content');
					}
					//Fade In Navigation Lists
					var tlMenu = new TimelineLite();
					tlMenu.set($(".menu-timeline"), {y: 80, opacity:0});
					$(".menu-timeline").each(function(index, element) {
						tlMenu.to(element, 0.5, {y:0, opacity:1, delay:0.4, ease:Power2.easeOut}, index * 0.1)
					});
						
				} else {	
					//Fade Out Navigation Lists					
					var tlMenu = new TimelineLite();
					$(".menu-timeline").each(function(index, element) {
						tlMenu.to(element, 0.25, {y:-80, opacity:0, ease:Power2.easeIn}, index * 0.05)
					});
					if (!$('#page-content').hasClass("light-content")) {	
						setTimeout( function(){
							$('#magic-cursor').removeClass('light-content');
							$('#header-container').removeClass('light-content');
						} , 500 );
					}
					setTimeout( function(){
						$(".touch-button.active").trigger("click");
						$('header').removeClass('over-sidebar');
					} , 500 );
				}							
			} , 20 );
		});
		
		if( $('.copyright-wrap').length > 0 ){
			$('footer').addClass('centered');			
		}
		
		// add a label element to CF7 input elements for the underline highlight effect
		$( '.wpcf7-form-control-wrap' ).each( function() {
			
			if( $( this ).has('label').length <= 0 ){
				$( this ).append( '<label class="input_label"></label>' );
			}
		});
		
		
		var viewportWidth = $(window).width();
		if (viewportWidth < 1024) {				
			$('.hero-video-wrapper').remove();							 
		}
		
	}// End First Load
	
	
/*--------------------------------------------------
Function Lazy Load
---------------------------------------------------*/

	function LazyLoad() {	
		
		$('body').waitForImages({
			finished: function() {
				$('body').removeClass('loading')
				setTimeout( function(){	
					$('body').removeClass('hidden').removeClass('scale-up').removeClass('scale-none');
				} , 1500 );
			},
			waitForAll: true
		});	
		
		$('body').waitForImages({
			finished: function() {
				TweenMax.to($(".split-slider #image-slider"), 1.2, {force3D:true, opacity:0.8, x:0, scale:1, delay:0.3, ease:Power2.easeOut});
				TweenMax.to($(".centered-slider #image-slider"), 1, {force3D:true, opacity:0.8, x:0, scale:0.6, delay:0.3, ease:Power2.easeOut});
				TweenMax.to($("#header-container, #footer-container, #sidebar"), 1, {force3D:true, opacity:1, ease:Power2.easeOut});
				var tlThumbs = new TimelineLite();
				$(".split-slider .swiper-slide").each(function(index, element) {
					tlThumbs.to(element, 1, {x:0, opacity:1, delay:0.3,  ease:Power2.easeOut}, index * 0.03)
				});
				TweenMax.to($("#external-caption"), 0.7, {force3D:true, opacity:1, delay:0.7, x:0, ease:Power2.easeOut});
				TweenMax.to($(".centered-slider .swiper-slide-active"), 1, {force3D:true, scale:1, opacity:1, delay:0.6, ease:Power2.easeOut  });
				TweenMax.to($(".centered-slider .swiper-slide-active").prev(), 1, {force3D:true, scale:1, opacity:1, delay:0.65, ease:Power2.easeOut  });
				TweenMax.to($(".centered-slider .swiper-slide-active").next(), 1, {force3D:true, scale:1, opacity:1, delay:0.65, ease:Power2.easeOut  });
				TweenMax.to($(".centered-slider .swiper-slide-active").prev().prev(), 1, {force3D:true, scale:1, opacity:1, delay:0.7, ease:Power2.easeOut  });
				TweenMax.to($(".centered-slider .swiper-slide-active").next().next(), 1, {force3D:true, scale:1, opacity:1, delay:0.7, ease:Power2.easeOut  });
				TweenMax.to($(".centered-slider .swiper-slide"), 1, {force3D:true, scale:1, opacity:1, delay:0.8, ease:Power2.easeOut  });	
			},
			waitForAll: true
		});
		
		
		TweenMax.to($("#main"), 0.2, {force3D:true, opacity:1, delay:0.1, ease:Power2.easeOut});
		if( $('#hero').hasClass("has-image")) {	
			if( $('body').hasClass("load-project-thumb")) {
				TweenMax.to($("#hero-bg-image"), 0, {force3D:true, scale:1.05 , opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hero-title"), 0.4, {force3D:true, y:0, opacity:1, delay:0.65, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y:50, opacity:1, delay:0.75, ease:Power2.easeOut});
				TweenMax.to($(".scroll-down-wrap"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.95, ease:Power2.easeOut});
				TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:0.95, ease:Power2.easeOut});
			} else {
				TweenMax.to($("#hero-bg-image"), 0.7, {force3D:true, scale:1.05 , opacity:0.8, delay:0.6, ease:Power2.easeOut});
				TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.7, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y: 50, opacity:1, delay:0.75, ease:Power2.easeOut});
				TweenMax.to($(".scroll-down-wrap"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.85, ease:Power2.easeOut});
				TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:0.95, ease:Power2.easeOut});
			}
		} else {
			TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.7, ease:Power2.easeOut});
			TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y: 50, opacity:1, delay:0.75, ease:Power2.easeOut});
			TweenMax.to($(".post-article-wrap"), 0.4, {force3D:true, y: 0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:0.85, ease:Power2.easeOut});
			TweenMax.to($("#post-content, .post-meta-data, .post-navigation, .post-comments, .post-form"), 0.4, {force3D:true, opacity:1, y:0, delay:0.1, ease:Power2.easeOut});
			var blogarticles = new TimelineLite();
			$("article").each(function(index, element) {
				blogarticles.to(element, 0.4, {y:0, opacity:1, delay:0.9,  ease:Power2.easeOut}, index * 0.1)
			});
		}
		TweenMax.to($("#footer-container, #blog-navigation, #sidebar"), 1, {force3D:true, opacity:1, ease:Power2.easeOut});
		
		if ($('#hero-bg-image').hasClass("light-content")) {
			$('#hero-caption').addClass('light-content');
			setTimeout(function(){
				$('#magic-cursor').addClass('light-content');
			} , 700 );			
			setTimeout(function(){
				$('#header-container').addClass('light-content');
			} , 600 );
		}
		
		if( $('.load-project-thumb').length > 0 ){
			setTimeout( function(){
				$('#hero-bg-wrapper').find('video').each(function() {
					$(this).get(0).play();
				});
				$('.thumb-container').remove();				
			} , 200 );
		} else {
			$('#hero-bg-wrapper').find('video').each(function() {
				$(this).get(0).play();
			});			
		}		
			
		setTimeout( function(){						
			$('body').removeClass("load-post-page");
		} , 400 );
		
		setTimeout( function(){	
			$('body').removeClass("load-project-page");
		} , 600 );
		
		setTimeout( function(){	
			$('body').removeClass("load-next-project");
			$('#showcase-holder').removeClass("disabled");
		} , 1900 );
		
		setTimeout( function(){	
			$('body').removeClass("show-loader");
			$('body').removeClass("load-project-thumb");	
		} , 800 );
		
	
	}// End Lazy Load		



/*--------------------------------------------------
Function Hero Section
---------------------------------------------------*/
	
	function HeroSection() {
		
		if( $('#hero').length > 0 ){
						
			if( $('#hero').hasClass("has-image")) {	
			
				// Hero Caption Options			
				var HeroCaption = document.querySelector('#hero-caption');
				var HeroImage = document.querySelector('#hero-image-parallax');
				var windowScrolled;
				function HeroParallaxScroll() {	
					windowScrolled = window.pageYOffset || document.documentElement.scrollTop;				
					if ($('#hero-styles').hasClass("parallax-onscroll")) {		
						TweenMax.to(HeroCaption, 0.1, {y: windowScrolled / 4});	
						TweenMax.to(HeroImage, 0.1, {y: windowScrolled / 5});						
					}
					if ($('#hero-styles').hasClass("opacity-onscroll")) {
						HeroCaption.style.opacity =  (1 - (windowScrolled/15) / 40);
					}				
				}
				
				$(window).on('scroll', HeroParallaxScroll);
					
				$('a.ajax-link, a.ajax-link-menu').on('click', function() {
					$(window).off('scroll', HeroParallaxScroll);
				});
			
			}
			
			
			// Hero Image Parallax
			if( $('#hero').hasClass("has-image")) {				
				var timeout;
				$(window).resize(changePersective);				
				changePersective();				
				function changePersective(){
					TweenMax.set('#hero-bg-wrapper', {perspective: $('body').width()});
				}
				$('#hero').mousemove(function(e){
					if(timeout) clearTimeout(timeout);
					setTimeout(callParallaxHero.bind(null, e));			
				});				
				function callParallaxHero(e){
					parallaxItHero(e, '#hero-bg-image', 0); //5
					moveItHero(e, '#hero-bg-image', - 30); //80
				}				
				function parallaxItHero(e, target, movement){
					var $this = $('#hero-bg-wrapper');
					var relX = e.pageX - $this.offset().left;
					var relY = e.pageY - $this.offset().top;					
					TweenMax.to(target, 1, {
						rotationY: (relX - $this.width()/1.5) / $this.width() * movement,
						rotationX: (relY - $this.height()/2) / $this.height() * movement,
					})
				}				
				function moveItHero(e, target, movement){
					var $this = $('#hero-bg-wrapper');
					var relX = e.pageX - $this.offset().left;
					var relY = e.pageY - $this.offset().top;					
					TweenMax.to(target, 1, {
						x: (relX - $this.width()/2) / $this.width() * movement,
						y: (relY - $this.height()/2) / $this.height() * movement,
					})
				}
				
				function HeroChangeHeaderColor() {	
				
					var scroll = $(window).scrollTop();
					
					if (!$('#page-content').hasClass("light-content")) {					
						if ($('#hero-bg-image').hasClass("light-content")) {
							
							if (scroll >= $("#hero").height() - 80) {					
								$('#magic-cursor, #header-container').removeClass('light-content');
							} else { 
								$('#magic-cursor, #header-container').addClass('light-content');
							}						
						}
					
					}
					
					if (scroll >= $("#hero").height()) {					
						$('#hero-bg-wrapper').find('video').each(function() {
							$(this).get(0).pause();
						});
					} else { 
						$('#hero-bg-wrapper').find('video').each(function() {
							$(this).get(0).play();
						});
					}
						
				}
				
				$(window).on('scroll', HeroChangeHeaderColor);
				
				$('a.ajax-link, a.ajax-link-menu').on('click', function() {
					$(window).off('scroll', HeroChangeHeaderColor);
				});
			}
			
		
		}
		
	}//End Hero Section
	




/*--------------------------------------------------
Function Portfolio
---------------------------------------------------*/
	
	function Portfolio() {
		
		
		// Split and Full Slider
		if( $('.split-slider').length > 0 ){
			
			// Create Fixed Caption
			if ($("#main-content").hasClass("split-slider")) {
                $("#main-content").append('<div id="external-caption"></div>');
                $("#showcase-slider").find(".swiper-slide .slide-caption").each(function() {
                    $("#external-caption").append($(this))
                })
            }

			var swiperOptions = {
				slidesPerView: 'auto',
				direction: "horizontal",
				loop: true,
				grabCursor: true,
				resistance : true,
				resistanceRatio : 0,
				speed:800,
				autoplay: false,
				effect: "slide",
				mousewheel: true,				
				on: {					
					init: function () {
						
						//Load Project Page
						$('.split-slider a.ajax-link-project').on('click', function() {
							$("body").addClass("show-loader");
							
							TweenMax.to($(".swiper-slide-active"), 0.4, {force3D:true, x:-250, opacity:0, delay:0, ease:Power2.easeIn  });
							TweenMax.to($(".swiper-slide-active").next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.05, ease:Power2.easeIn  });
							TweenMax.to($(".swiper-slide-active").next().next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.1, ease:Power2.easeIn  });
							TweenMax.to($(".swiper-slide-active").next().next().next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.15, ease:Power2.easeIn  });
							TweenMax.to($(".swiper-slide-active").next().next().next().next(), 0.4, {force3D:true, x:-250, opacity:0, delay:0.2, ease:Power2.easeIn  });			
							TweenMax.to($("#image-slider"), 0.7, {left:0, ease:Power2.easeInOut});
							TweenMax.to($("#image-slider .image-slider-wrapper"), 0.7, {x:0, ease:Power2.easeInOut});		
							setTimeout( function(){
								$("body").addClass("load-project-page");
							} , 100 );	
							TweenMax.to($("#footer-container, #external-caption"), 0.2, {opacity:0, ease:Power0.easeNone});									
						});
						
						//Load Image Changer
						$('.slider-img:nth-child(1)').addClass('active');
						$('.slider-img:nth-child(1)').find('video').each(function() {
							$(this).get(0).play();
						});
						$('.swiper-slide').on('mouseenter touchstart', function() {
							if (!$(this).hasClass("active")) {
								$('.slider-img').find('video').each(function() {
									$(this).get(0).pause();
								});
								$('.swiper-slide').removeClass('active');
								$(this).addClass('active');	
								var slide = $(this).data('slide'),
								preview = $('.slider-img[data-slide="' + slide + '"]');	
								$('#image-slider').find('.slider-img').removeClass('active');
								preview.addClass('active');
								preview.find('video').each(function() {
									$(this).get(0).play();
								});						
								counter = $('#counter-wrap span[data-slide-count="' + slide + '"]');	
								TweenLite.to($('#counter-wrap').find('span'), 0.3, {force3D:true, opacity:0, delay:0, y: 10, ease:Power2.easeIn, onComplete:function(){
									TweenMax.set(counter, {opacity:0, y:-10, delay:0});
									TweenMax.to(counter, 0.3, {force3D:true, opacity:1, y:0, delay:0, ease:Power2.easeOut});
								}});
								
								caption = $('#external-caption .slide-caption[data-slide-caption="' + slide + '"]');	
								TweenLite.to($('#external-caption').find('.slide-caption'), 0.3, {force3D:true, opacity:0, delay:0, y: 0, ease:Power2.easeIn, onComplete:function(){
									TweenMax.set(caption, {opacity:0, y:0, delay:0});
									TweenMax.to(caption, 0.3, {force3D:true, opacity:1, y:0, delay:0, ease:Power2.easeOut});
								}});								
							}
							
						}).on('mouseleave touchend', function() {
							
						});
						
					},
				}
			};
				
			var swiper = new Swiper(".swiper-container", swiperOptions);
			
		}
		
		// Centered Slider
		if( $('.centered-slider').length > 0 ){

			var swiperOptions = {
				centeredSlides: true,
				slidesPerView: 'auto',
				direction: "horizontal",
				loop: true,
				grabCursor: true,
				resistance : true,
				resistanceRatio : 0,
				speed:800,
				autoplay: false,
				effect: "slide",
				mousewheel: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on: {					
					init: function () {
						
						//Load Project Page
						$('.centered-slider a.ajax-link-project').on('click', function() {
							$("body").addClass("show-loader");
							
							TweenMax.to($(".centered-slider .swiper-slide-active"), 0.4, {force3D:true, scale:1.2, opacity:0, delay:0, ease:Power2.easeIn  });
							TweenMax.to($(".centered-slider .swiper-slide-active").prev(), 0.4, {force3D:true, scale:1.1, opacity:0, delay:0.05, ease:Power2.easeIn  });
							TweenMax.to($(".centered-slider .swiper-slide-active").next(), 0.4, {force3D:true, scale:1.1, opacity:0, delay:0.05, ease:Power2.easeIn  });
							TweenMax.to($(".centered-slider .swiper-slide-active").prev().prev(), 0.4, {force3D:true, scale:1, opacity:0, delay:0.1, ease:Power2.easeIn  });
							TweenMax.to($(".centered-slider .swiper-slide-active").next().next(), 0.4, {force3D:true, scale:1, opacity:0, delay:0.1, ease:Power2.easeIn  });			
							TweenMax.to($("#image-slider"), 0.7, {scale:1, ease:Power2.easeInOut});		
							setTimeout( function(){
								$("body").addClass("load-project-page");
							} , 100 );	
							TweenMax.to($("#footer-container, #external-caption"), 0.2, {opacity:0, ease:Power0.easeNone});									
						});
						
						//Load Image Changer
						$('.slider-img:nth-child(1)').addClass('active');
						$('.slider-img:nth-child(1)').find('video').each(function() {
							$(this).get(0).play();
						});
						$('.swiper-slide').on('mouseenter touchstart', function() {
							if (!$(this).hasClass("active")) {
								$('.slider-img').find('video').each(function() {
									$(this).get(0).pause();
								});
								$('.swiper-slide').removeClass('active');
								$(this).addClass('active');	
								var slide = $(this).data('slide'),
								preview = $('.slider-img[data-slide="' + slide + '"]');	
								$('#image-slider').find('.slider-img').removeClass('active');
								preview.addClass('active');
								preview.find('video').each(function() {
									$(this).get(0).play();
								});							
								counter = $('#counter-wrap span[data-slide-count="' + slide + '"]');	
								TweenLite.to($('#counter-wrap').find('span'), 0.3, {force3D:true, opacity:0, delay:0, y: 10, ease:Power2.easeIn, onComplete:function(){
									TweenMax.set(counter, {opacity:0, y:-10, delay:0});
									TweenMax.to(counter, 0.3, {force3D:true, opacity:1, y:0, delay:0, ease:Power2.easeOut});
								}});								
							}
							
						}).on('mouseleave touchend', function() {
							
						});
						
					},
				}
			};
				
			var swiper = new Swiper(".swiper-container", swiperOptions);
			
		}
		
		// Drag Circle on Slider
		$('#showcase-slider').on('mousedown touchstart', function(event) {				
			$('body').addClass('scale-up');
			TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
		});
		$('#showcase-slider a').on('mousedown touchstart', function(event) {				
			$('body').addClass('scale-none');
		});				
		$('#showcase-slider').on('mouseup touchend', function(event) {				
			$('body').removeClass('scale-up');
			TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
		});
		
		
		// Project Navigation Events
		$('a.next-ajax-link-project').on('click', function() {
			$("body").addClass("load-next-project");
			$("body").addClass("show-loader");
			TweenMax.to('#ball', 0.3,{borderWidth:"2px",scale:1,backgroundColor:"rgba(0, 0, 0, 0)",opacity:1});
			if ($('#project-nav').hasClass("light-content")) {				
				setTimeout(function(){
					$('body').addClass('light-content');								
				} , 300 );
			}						
		});	
		
		$('.next-project-title').on('click', function() {					
			TweenMax.set($(".main-title"), {y:0});
			TweenMax.set($(".main-subtitle"), {y:40, opacity:0});
			TweenMax.to($("#main-page-content"), 0.3, {opacity:0});			
			setTimeout(function(){
				TweenMax.to($("#project-nav"), 0.6, {height:"100vh", ease:Power2.easeInOut});
				TweenMax.to($(".next-project-image"), 0.6, {top:"0", y: 0, ease:Power2.easeInOut});
				TweenMax.to($("footer"), 0.3, {opacity:0, ease:Power2.easeInOut});
			} , 50 );	
		});
		
		if( $('#project-nav').length > 0 ){
			$('#main-page-content').addClass('project-page');			
		}
			
			
	}//End Portfolio
	
	
/*--------------------------------------------------
Function Portfolio
---------------------------------------------------*/	
		
	function PortfolioPackery() {	
			
		if( $('#portfolio-wrap').length > 0 ){			
			
			$('#main-page-content').addClass('portfolio-page');		
			
			$("header").addClass("transparent")
			
			$('.thumb-page').each(function() {
				var image = $(this).data('src');	
				$(this).css({'background-image': 'url(' + image + ')'});
			});
			
			if ($("body").hasClass("smooth-scroll")) {
				var elem = document.querySelector("#content-scroll");
				var scrollbar = Scrollbar.init(elem,
				{
					renderByPixels: true,
					damping:0.05
				});
			}
			
			var $container = $('#portfolio').packery({
				itemSelector: '.item',
				gutter:0,				
				transitionDuration: "0.5s"
			});
			
			$('#filters a').on('click', function() {
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				$('.item').addClass('item-margins');
				var selector = $(this).attr('data-filter');
				$container.isotope({ filter: selector }, function( $changedItems, instance ) {
				  instance.$allAtoms.filter('.isotope-hidden').removeClass('is-filtered');
				  instance.$filteredAtoms.addClass('is-filtered');
				});		
				return false;
			});
			
			$("#all").trigger('click');
				
			$('.item').each(function() {
				var image = $(this).find('.item-image').data('src');	
				$(this).find('.item-image').css({'background-image': 'url(' + image + ')'});
			});
			
			
			$(".item-image").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 1.8});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
				$(this).find('video').each(function() {
					$(this).get(0).play();
				});
			});
			
			$('.item-image').on('mousedown', function(event) {
				return false;
			});
				
			$(".item-image").mouseleave(function(e) {
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale:1, x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
				$(this).find('video').each(function() {
					$(this).get(0).pause();
				});
			});
			
			
			
			
			
			
			//Overlay Menu
			$('#show-filters, #close-filters').on('click', function() {			
				$('#show-filters').toggleClass('active');
				$('#filters-overlay').toggleClass('active');
				var navtitleheight = $(".hero-title").height()
				var navsubtitleheight = $(".hero-subtitle").height()
				
				setTimeout( function(){			
					if ($('#filters-overlay').hasClass("active")) {	
						var heroheight = $("#hero").height() 
						if ($("body").hasClass("smooth-scroll")) {
							TweenLite.to(scrollbar, 1.5, {scrollTo:heroheight, ease:Power4.easeInOut});
						} else {
							TweenLite.to(window, 1.5, {scrollTo:heroheight, ease:Power4.easeInOut});
						}
						
						TweenMax.to($("#show-filters"), 0.3, {force3D:true, scale: 1, opacity:0, ease:Power2.easeInOut});
						TweenMax.to($("#main"), 0.6, {force3D:true, scale: 1, opacity:0.3, delay:0, ease:Power2.easeInOut});					
						
						//Fade In Navigation Lists
						var tlMenu = new TimelineLite();
						tlMenu.set($(".filters-timeline"), {y:60, opacity:0});
						$(".filters-timeline").each(function(index, element) {
							tlMenu.to(element, 0.5, {y:0, opacity:1, delay:0.3, ease:Power3.easeOut}, index * 0.1)
						});
							
					} else {					
						
						TweenMax.to($("#show-filters"), 0.6, {force3D:true, scale: 1, opacity:1, delay:0.3, ease:Power2.easeInOut});
						TweenMax.to($("#main"), 0.6, {force3D:true, scale: 1, opacity:1, delay:0.3, ease:Power2.easeInOut});					
						
						
						//Fade Out Navigation Lists					
						var tlMenu = new TimelineLite();
						$(".filters-timeline").each(function(index, element) {
							tlMenu.to(element, 0.25, {opacity:0, y:-60, ease:Power1.easeIn }, index * 0.1)
						});							
						TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
						$("#ball").removeClass("close-icon");
						$('#ball i').remove();
						
					}							
				} , 20 );
			});
			
			
			$("#close-filters").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 1.8});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("close-icon").append( '<i class="fa fa-times"></i>' );
			});
				
			$("#close-filters").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("close-icon");
				$('#ball i').remove();
			});
			
			$(".item-image").on('click', function() {
				var hidedots = new TimelineLite();				
				$("#show-filters span").each(function(index, element) {
					hidedots.to(element, 0.3, {scale:0, ease:Power3.easeOut}, index * 0.05)
				});
			});
			
			FitThumbScreen();
			
		}
	
	}//End Portfolio Packery	
	
	
/*--------------------------------------------------
Function Blog
---------------------------------------------------*/
	
	function Blog() {
		
		$('article:nth-child(1)').addClass('active');
		$('article').on('mouseenter', function() {
			if (!$(this).hasClass("active")) {
				$('article').removeClass('active');
				$(this).addClass('active');					
			}
		});
		
		$('#open-sidebar, #open-sidebar-nav, #black-fade').on('click', function() {
			$('#open-sidebar').toggleClass('open');
			$('#sidebar').toggleClass('open');
			$('#black-fade').toggleClass('fade-in');
		});
		
		$("#black-fade").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
			$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-times"></i>' );
		});
					
		$("#black-fade").mouseleave(function(e) {
			TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});
		
		$("#black-fade").on('click', function() {	
			TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});
		
		$( "select" ).wrap( "<div class='select hide-ball'></div>" );
		
		
		//Blog Post Floating Image
		
		//if( $('.floating-image').length > 0 ){
			
			$("#ball").append('<div class="image-tooltip"></div>');
			$("#blog").find("article .article-img").each(function() {
				$(".image-tooltip").append($(this))
			}), $("#blog").find("article a.post-title").on("mouseenter", function(e) {
				$(".image-tooltip").children().eq($(this).parent().parent().parent().index()).addClass("hover")
			}).on("mouseleave", function(e) {
				$(".image-tooltip").children().eq($(this).parent().parent().parent().index()).removeClass("hover")
			}).on("click", function() {
				$(".image-tooltip").children().eq($(this).parent().parent().parent().index()).removeClass("hover")				
				TweenMax.to('#ball', 0.2,{borderWidth: "2px",scale: 1});
			});
			
			$(".has-post-thumbnail a.post-title").mouseenter(function(e) {TweenMax.to('#ball', 0.2,{borderWidth: "0px",scale: 5});});				
			$(".has-post-thumbnail a.post-title").mouseleave(function(e) {TweenMax.to('#ball', 0.2,{borderWidth: "2px",scale: 1});});
				
		//}		
		
	
	}//End Blog
	

/*--------------------------------------------------
Function Back To Top
---------------------------------------------------*/
	
	function BackToTop() {
		
		$(window).scroll(function(){
			if ($(this).scrollTop() > $(window).height() * 0.7 ) {
				$('#backtotop').addClass('active');
			} else {
				$('#backtotop').removeClass('active');
			}
		});
			
		
		$(".flexnav").flexNav({ 'animationSpeed' : 250 });
	
	}//End Back To Top
	
	
/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/
	
	function Sliders() {
		
		$('.slider').owlCarousel({
			loop:true,
			margin:500,
			center: true,
			autoHeight:false,
			nav:true,
			navSpeed: 500,
			items:1,			
		});
		
		$( ".slider .owl-prev" ).removeClass( "parallax-wrap" );
		$( ".slider .owl-next" ).removeClass( "parallax-wrap" );
		
		$('.carousel').owlCarousel({
			loop:true,
			margin:20,
			autoHeight:false,
			navSpeed: 600,
			nav:true,
			responsive:{
				0:{
					items:1
				},
				479:{
					items:2
				},
				1024:{
					items:3
				},
				1466:{
					items:3
				}
			}
		});
		
		$( ".carousel .owl-prev" ).removeClass( "parallax-wrap" );
		$( ".carousel .owl-next" ).removeClass( "parallax-wrap" );	
			
		$(".owl-prev").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
			$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-left"></i>' );
		});
			
		$(".owl-prev").mouseleave(function(e) {
			TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});
		
		$(".owl-next").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
			$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-right"></i>' );
		});
			
		$(".owl-next").mouseleave(function(e) {
			TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});
		
		
		
		if( $('.text-carousel').length > 0 ){		
			$(".text-carousel").owlCarousel({	
				loop:true,
				dots:false,
				items:1,
				autoplay:true,
				smartSpeed: 750,
				autoHeight:true,
				autoplayHoverPause:true,
				nav:true,
				navText: ["<div class='prev-testimonial parallax-element'><i class='fa fa-chevron-left' aria-hidden='true'></i></div>","<div class='next-testimonial parallax-element'><i class='fa fa-chevron-right' aria-hidden='true'></i></div>"],
			});			
			
		}
		
	}//End Sliders	
	
	
/*--------------------------------------------------
Function Justified Grid
---------------------------------------------------*/	
	
	function JustifiedGrid() {
		
		if( $('#justified-grid').length > 0 ){
		
			$('#justified-grid').justifiedGallery({
				rowHeight : 300,
				lastRow : 'nojustify',
				margins : 10
			});
		
		}
		
	}//End Justified Grid	
	
	
/*--------------------------------------------------
Function Lightbox
---------------------------------------------------*/
	
	function Lightbox() {
		
		$('.image-link').magnificPopup({
		  	type: 'image',
			mainClass: 'mfp-with-zoom',	
			gallery: {
			  enabled:true
			},		
			zoom: {
				enabled: true, 			
				duration: 300, 
				easing: 'ease-in-out', 
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}			
		});
		
		$(".image-link").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 1.8});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
			$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
		});
			
		$(".image-link").mouseleave(function(e) {
			TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1,  x: -15, y: -15});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});
			
	}//End Lightbox	 		
	


/*--------------------------------------------------
Function AppearIteam
---------------------------------------------------*/	
		
	function AppearIteam() {		
		
		setTimeout(function(){
			$('.has-animation').each(function() {	
				$(this).appear(function() {				
					$(this).delay($(this).attr('data-delay')).queue(function(next){
						TweenMax.to($(this), 0.5, {force3D:true, opacity:1, y:0, delay:0.2, ease:Power2.easeOut});
						next();
					});				 		
				});		
			});
		} , 250 );		
	
	}//End AppearIteam


	
/*--------------------------------------------------
Function Page PlayVideo
---------------------------------------------------*/	


	function PlayVideo() {
	
		if( $('.video-wrapper').length > 0 ){	
			
			
			$(".video-wrapper").mouseenter(function(e) {
				if ($(this).hasClass("play")) {
					$( "#ball" ).addClass("pause-movie")		
				}
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
				$( "#ball" ).addClass("over-movie").append( '<i class="fa fa-play"></i><i class="fa fa-pause"></i>' );
			});
			
			$(".video-wrapper").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
				$("#ball").removeClass("over-movie").removeClass("pause-movie");
				$('#ball i').remove();
			});
			
			$(".video-wrapper .control").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{borderWidth: '20px', scale: 0});
			});
			
			$(".video-wrapper .control").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{transformOrigin: '15px 15px', borderWidth: '1px', scale: 2});
			});
			
			var videocenter = ($(window).height() - $('.video-cover').height()) / 2
					
			////////////////////////////////////////////////////// REFACTOR //////////////////////////////////////////////////////
			// plays or pause the video function of its current state
			var playpause = function( videoObj ) {
				
				if( videoObj[0] != null ){
					if(videoObj[0].paused || videoObj[0].ended) {
						
						videoObj.parent().addClass('play');
						videoObj[0].play();
					}
					else {
						
						videoObj.parent().removeClass('play');
						videoObj[0].pause();
					}
				}
			};
			
			//Time format converter - 00:00
			var timeFormat = function(seconds){
				var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
				var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
				return m+":"+s;
			};
			
			// Events
			// click to video cover - will start the video
			$('.video-wrapper').on('click', function() {
				
				$('html,body').animate({scrollTop: $(this).offset().top - videocenter},390);		
				// hide the video cover in order to start playing
				$(this).find('.video-cover').addClass('hidden');
				
				$( "#ball" ).toggleClass("pause-movie");
				
				// pause first the other videos
				var current_wrapper = $(this);
				$('#main-page-content').find('.video-wrapper').each(function() {
					
					if( !current_wrapper.is( $(this) ) ){
						
						$(this).removeClass('play');
						$(this).find('video').each(function() {
							
							if( !$(this).get(0).paused && !$(this).get(0).ended ) {
								
								$(this).get(0).pause();
							}
						});
					}
					
				});
				
				// trigger the click for the inner video
				$(this).find('video').each(function() {

					playpause( $(this) );
				});

			});
			
			//fullscreen button clicked
			$('.btnFS').on('click', function( e ) {
					
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
					
				if($.isFunction(video_object[0].webkitEnterFullscreen)) {
					video_object[0].webkitEnterFullscreen();
				}	
				else if ($.isFunction(video_object[0].mozRequestFullScreen)) {
					video_object[0].mozRequestFullScreen();
				}
				else {
					alert('Your browsers doesn\'t support fullscreen');
				}
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
				
			});
				
			//sound button clicked
			$('.sound').on('click', function( e ) {
					
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
					
				video_object[0].muted = !video_object[0].muted;
				$(this).toggleClass('muted');
				if(video_object[0].muted) {
					parent_wrapper.find('.volumeBar').css('width',0);
				}
				else{
					parent_wrapper.find('.volumeBar').css('width', video_object[0].volume*100+'%');
				}
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
			});
			
			//progress bar (video timebar) clicked
			$('.progress').on('click', function( e ) {
				
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
									
				// calculate click position
				// and update video current time
				// as well as progress bar
				var maxduration 	= video_object[0].duration;
				var position 			= e.pageX - $(this).offset().left;
				var percentage 	= 100 * position / $(this).width();
				if(percentage > 100) {
					
					percentage = 100;
				}
				if(percentage < 0) {
					
					percentage = 0;
				}
				$('.timeBar').css('width', percentage+'%');	
				video_object[0].currentTime = maxduration * percentage / 100;
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
			});
			
			$('#main-page-content').find('video').each(function() {
			
				var video = $(this);
				var video_wrapper = $(this).parent();
				
				//remove default control when JS loaded
				video[0].removeAttribute("controls");
				video_wrapper.find('.control').fadeIn(500);
				video_wrapper.find('.caption').fadeIn(500);
			 
				//before everything get started and we have the info about the video such as duration
				video.on('loadedmetadata', function() {
					
					var video_object = $(this);
					var parent_wrapper = $(this).parent();
					//set video properties
					parent_wrapper.find('.current').text(timeFormat(0));
					parent_wrapper.find('.duration').text(timeFormat(video[0].duration));
					
				});
				
				//display current video buffered progress
				video.on('progress', function() {
					
					var video_object 		= $(this);
					var parent_wrapper 	= $(this).parent();
					var maxduration 		= video_object [0].duration;
					
					if (maxduration > 0) {
					  for (var i = 0; i < video_object [0].buffered.length; i++) {
							if (video_object [0].buffered.start(video_object [0].buffered.length - 1 - i) <video_object [0].currentTime) {
								var perc = (video_object [0].buffered.end(video_object [0].buffered.length - 1 - i) / maxduration) * 100 + "%";
								parent_wrapper.find('.bufferBar').css('width',perc+'%');
								break;
							}
						}
					}
					
				});
				
				//display current video play time
				video.on('timeupdate', function() {
					
					var parent_wrapper 	= $(this).parent();
					var currentPos 			= $(this).get(0).currentTime;
					var maxduration 		= $(this).get(0).duration;
					var perc 					= 100 * currentPos / maxduration;
					parent_wrapper.find('.timeBar').css('width',perc+'%');	
					parent_wrapper.find('.current').text(timeFormat(currentPos));	
				});
				
				//video screen and play button clicked
				video.on('click', function() { 
					
					playpause( $(this) ); 
				});
				
				//video canplay event
				video.on('canplay', function() {
					
					var parent_wrapper = $(this).parent();
					parent_wrapper.find('.loading').fadeOut(100); //?
				});
				
				//video canplaythrough event
				//solve Chrome cache issue
				var completeloaded = false;
				video.on('canplaythrough', function() {
					
					completeloaded = true;
				});
				
				//video ended event
				video.on('ended', function() {		
					
					$(this).get(0).pause();
					$(this).parent().removeClass("play");
					$( "#ball" ).toggleClass("pause-movie");
				});
			
				//video seeking event
				video.on('seeking', function() {
					
					//if video fully loaded, ignore loading screen
					if(!completeloaded) { 
						var parent_wrapper = $(this).parent();
						parent_wrapper.find('.loading').fadeIn(200); //?
					}	
				});
				
				//video seeked event
				video.on('seeked', function() { });
				
				//video waiting for more data event
				video.on('waiting', function() {
					
					var parent_wrapper = $(this).parent();
					parent_wrapper.find('.loading').fadeIn(200); //?
				});
				
			});
			
		}
		
	}// End PlayVideo				
	
	
	
/*--------------------------------------------------
Function Load Via Ajax
---------------------------------------------------*/	
		
	function LoadViaAjax() {		
		
		FirstLoad();		
		LazyLoad();		
		HeroSection();
		Portfolio();
		PortfolioPackery();
		Blog();		
		BackToTop();
		Sliders();
		JustifiedGrid();
		Lightbox();
		AppearIteam();
		InitContactMap();
		PlayVideo();		
	
	}//End Load Via Ajax		
	

/*--------------------------------------------------
Function AjaxLoad
---------------------------------------------------*/	
	function AjaxLoad() {
		var e = {
				x: 0,
				y: 0
			},
			t = {
				x: 0,
				y: 0
			},
			n = .25,
			o = !1,
			a = document.getElementById("ball"),
			i = document.getElementById("ball-loader");
		TweenLite.set(a, {
			xPercent: -50,
			yPercent: -50
		}), document.addEventListener("mousemove", function(t) {
			var n = window.pageYOffset || document.documentElement.scrollTop;
			e.x = t.pageX, e.y = t.pageY - n
		}), TweenLite.ticker.addEventListener("tick", function() {
			o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n, TweenLite.set(a, {
				x: t.x,
				y: t.y
			}))
		}), $(".parallax-wrap").mouseenter(function(e) {
			TweenMax.to(this, .3, {
				scale: 2
			}), TweenMax.to(a, .3, {
				scale: 2,
				borderWidth: "1px",
				opacity: .2
			}), TweenMax.to(i, .3, {
				scale: 2,
				borderWidth: "1px",
				top: 1,
				left: 1
			}), TweenMax.to($(this).children(), .3, {
				scale: .5
			}), o = !0
		}), $(".parallax-wrap").mouseleave(function(e) {
			TweenMax.to(this, .3, {
				scale: 1
			}), TweenMax.to(a, .3, {
				scale: 1,
				borderWidth: "2px",
				opacity: 1
			}), TweenMax.to(i, .3, {
				scale: 1,
				borderWidth: "2px",
				top: 0,
				left: 0
			}), TweenMax.to($(this).children(), .3, {
				scale: 1,
				x: 0,
				y: 0
			}), o = !1
		}), $(".parallax-wrap").mousemove(function(e) {
			var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
			n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
				x: t.x,
				y: t.y
			}), s = e, p = c = this, h = c.querySelector(".parallax-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
				x: (w - u.width / 2) / u.width * x,
				y: (f - u.height / 2 - m) / u.height * x,
				ease: Power2.easeOut
			})
		}), $(".hide-ball").mouseenter(function(e) {
			TweenMax.to("#ball", .2, {
				borderWidth: "1px",
				scale: 2,
				opacity: 0
			})
		}), $(".hide-ball").mouseleave(function(e) {
			TweenMax.to("#ball", .3, {
				borderWidth: "2px",
				scale: 1,
				opacity: 1
			})
		}), $(".link").mouseenter(function(e) {
			TweenMax.to("#ball", .2, {
				borderWidth: "0px",
				scale: 3,
				backgroundColor: "rgba(127, 127, 127, 1)",
				opacity: .15
			})
		}), $(".link").mouseleave(function(e) {
			TweenMax.to("#ball", .3, {
				borderWidth: "2px",
				scale: 1,
				backgroundColor: "rgba(127, 127, 127, 0)",
				opacity: 1
			})
		}), $("p a, .widget a, .cancel-reply").mouseenter(function(e) {
			TweenMax.to("#ball", .2, {
				borderWidth: "0px",
				scale: 3,
				backgroundColor: "rgba(127, 127, 127, 1)",
				opacity: .15
			})
		}), $("p a, .widget a, .cancel-reply").mouseleave(function(e) {
			TweenMax.to("#ball", .3, {
				borderWidth: "2px",
				scale: 1,
				backgroundColor: "rgba(127, 127, 127, 0)",
				opacity: 1
			})
		}), jQuery(document).ready(function() {
			var e = !1,
				n = "";
	
			function l(t, o) {
				e = !0, $("body").addClass("page-is-changing"), $(".cd-cover-layer").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
					r(t, o), n = t, $(".cd-cover-layer").off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend")
				}), d() || (r(t, o), n = t)
			}
	
			function r(n, l) {
				n = "" == n ? "index.html" : n;
				var r = $('<div class="cd-main-content "></div>');
				r.load(n + " .cd-main-content > *", function(c) {
					$("main").html(r);
					var s = c.match(/<title[^>]*>([^<]+)<\/title>/)[1];
					$("head title").html(s), $("html, body").scrollTop(0);
					var p = d() ? 30 : 0;
					setTimeout(function() {
						$("body").removeClass("page-is-changing"), $(".cd-cover-layer").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function() {
							e = !1, $(".cd-cover-layer").off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend")
						}), LoadViaAjax(), $(".parallax-wrap").mouseleave(function(e) {
							TweenMax.to(this, .3, {
								scale: 1
							}), TweenMax.to(a, .3, {
								scale: 1,
								borderWidth: "2px",
								opacity: 1
							}), TweenMax.to(i, .3, {
								scale: 1,
								borderWidth: "2px",
								top: 0,
								left: 0
							}), TweenMax.to($(this).children(), .3, {
								scale: 1,
								x: 0,
								y: 0
							}), o = !1
						}), $(".parallax-wrap").mouseenter(function(e) {
							TweenMax.to(this, .3, {
								scale: 2
							}), TweenMax.to(a, .3, {
								scale: 2,
								borderWidth: "1px",
								opacity: .2
							}), TweenMax.to(i, .3, {
								scale: 2,
								borderWidth: "1px",
								top: 1,
								left: 1
							}), TweenMax.to($(this).children(), .3, {
								scale: .5
							}), o = !0
						}), $(".parallax-wrap").mousemove(function(e) {
							var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
							n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
								x: t.x,
								y: t.y
							}), s = e, p = c = this, h = c.querySelector(".parallax-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
								x: (w - u.width / 2) / u.width * x,
								y: (f - u.height / 2 - m) / u.height * x,
								ease: Power2.easeOut
							})
						}), TweenMax.to("#ball", .3, {
							borderWidth: "2px",
							scale: 1,
							opacity: 1
						}), $(".hide-ball").mouseenter(function(e) {
							TweenMax.to("#ball", .2, {
								borderWidth: "1px",
								scale: 2,
								opacity: 0
							})
						}), $(".hide-ball").mouseleave(function(e) {
							TweenMax.to("#ball", .3, {
								borderWidth: "2px",
								scale: 1,
								opacity: 1
							})
						}), $(".link").mouseenter(function(e) {
							TweenMax.to("#ball", .2, {
								borderWidth: "0px",
								scale: 3,
								backgroundColor: "rgba(127, 127, 127, 1)",
								opacity: .15
							})
						}), $(".link").mouseleave(function(e) {
							TweenMax.to("#ball", .3, {
								borderWidth: "2px",
								scale: 1,
								backgroundColor: "rgba(127, 127, 127, 0)",
								opacity: 1
							})
						}),$("p a, .widget a, .cancel-reply").mouseenter(function(e) {
							TweenMax.to("#ball", .2, {
								borderWidth: "0px",
								scale: 3,
								backgroundColor: "rgba(127, 127, 127, 1)",
								opacity: .15
							})
						}), $("p a, .widget a, .cancel-reply").mouseleave(function(e) {
							TweenMax.to("#ball", .3, {
								borderWidth: "2px",
								scale: 1,
								backgroundColor: "rgba(127, 127, 127, 0)",
								opacity: 1
							})
						}), d() || (e = !1)
					}, p), n != window.location && l && window.history.pushState({
						path: n
					}, "", n)
				})
			}
	
			function d() {
				return $("html").hasClass("csstransitions")
			}
			firstLoad = !1, $("body").on("click", '[data-type="page-transition"]', function(t) {
				t.preventDefault();
				var n = $(this).attr("href");
				e || l(n, !0), firstLoad = !0
			}), $(window).on("popstate", function() {
				if (firstLoad) {
					var o = location.href;
					e || n == o || l(o, !1)
				}
				firstLoad = !0
			})
		})
	}
		



/*--------------------------------------------------
Function Page Load No Ajax
---------------------------------------------------*/

	function PageLoadNoAjax() {
		var e = {
				x: 0,
				y: 0
			},
			t = {
				x: 0,
				y: 0
			},
			a = .25,
			o = !1,
			n = document.getElementById("ball"),
			l = document.getElementById("ball-loader");
		TweenLite.set(n, {
			xPercent: -50,
			yPercent: -50
		}), document.addEventListener("mousemove", function(t) {
			var a = window.pageYOffset || document.documentElement.scrollTop;
			e.x = t.pageX, e.y = t.pageY - a
		}), TweenLite.ticker.addEventListener("tick", function() {
			o || (t.x += (e.x - t.x) * a, t.y += (e.y - t.y) * a, TweenLite.set(n, {
				x: t.x,
				y: t.y
			}))
		}), $(".parallax-wrap").mouseleave(function(e) {
			TweenMax.to(this, .3, {
				scale: 1
			}), TweenMax.to(n, .3, {
				scale: 1,
				borderWidth: "2px",
				opacity: 1
			}), TweenMax.to(l, .3, {
				scale: 1,
				borderWidth: "2px",
				top: 0,
				left: 0
			}), TweenMax.to($(this).children(), .3, {
				scale: 1,
				x: 0,
				y: 0
			}), o = !1
		}), $(".parallax-wrap.bigger").mouseleave(function(e) {
			TweenMax.to(n, .3, {
				scale: 1,
				borderWidth: "2px"
			})
		}), $(".parallax-wrap").mouseenter(function(e) {
			TweenMax.to(this, .3, {
				scale: 2
			}), TweenMax.to(n, .3, {
				scale: 2,
				borderWidth: "1px",
				opacity: .2
			}), TweenMax.to(l, .3, {
				scale: 2,
				borderWidth: "1px",
				top: 1,
				left: 1
			}), TweenMax.to($(this).children(), .3, {
				scale: .5
			}), o = !0
		}), $(".parallax-wrap.bigger").mouseenter(function(e) {
			TweenMax.to(n, .3, {
				scale: 2.5,
				borderWidth: "1px"
			})
		}), $(".parallax-wrap").mousemove(function(e) {
			var a, o, l, i, r, c, d, p, x, s, u, w, h, g, m;
			a = e, o = 2, l = this.getBoundingClientRect(), i = a.pageX - l.left, r = a.pageY - l.top, c = window.pageYOffset || document.documentElement.scrollTop, t.x = l.left + l.width / 2 + (i - l.width / 2) / o, t.y = l.top + l.height / 2 + (r - l.height / 2 - c) / o, TweenMax.to(n, .3, {
				x: t.x,
				y: t.y
			}), p = e, x = d = this, s = d.querySelector(".parallax-element"), u = 20, w = x.getBoundingClientRect(), h = p.pageX - w.left, g = p.pageY - w.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(s, .3, {
				x: (h - w.width / 2) / w.width * u,
				y: (g - w.height / 2 - m) / w.height * u,
				ease: Power2.easeOut
			})
		}), $(".hide-ball").mouseenter(function(e) {
			TweenMax.to("#ball", .2, {
				borderWidth: "1px",
				scale: 2,
				opacity: 0
			})
		}), $(".hide-ball").mouseleave(function(e) {
			TweenMax.to("#ball", .3, {
				borderWidth: "2px",
				scale: 1,
				opacity: 1
			})
		}), $(".link, p a, .widget a, .cancel-reply").mouseenter(function(e) {
			TweenMax.to("#ball", .2, {
				borderWidth: "0px",
				scale: 3,
				backgroundColor: "rgba(127, 127, 127, 1)",
				opacity: .15
			})
		}), $(".link, p a, .widget a, .cancel-reply").mouseleave(function(e) {
			TweenMax.to("#ball", .3, {
				borderWidth: "2px",
				scale: 1,
				backgroundColor: "rgba(127, 127, 127, 0)",
				opacity: 1
			})
		})
	}// End Page Load No Ajax	


});
	
/*--------------------------------------------------
	Function Contact Map & Init Contact Map
---------------------------------------------------*/

	function ContactMap() {

		if( jQuery('#map_canvas').length > 0 ){

			var map_marker_image 	= 'images/marker.html';
			var map_address 		= 'New York City'
			var map_zoom			= 16;
			var marker_title 		= 'Hello Friend!';
			var marker_text			= 'Here we are. Come to drink a coffee!';
			var map_type			= google.maps.MapTypeId.SATELLITE;

			if( typeof ClapatMapOptions != 'undefined' ){

				map_marker_image 	= ClapatMapOptions.map_marker_image;
				map_address 		= ClapatMapOptions.map_address;
				map_zoom			= Number(ClapatMapOptions.map_zoom);
				marker_title 		= ClapatMapOptions.marker_title;
				marker_text			= ClapatMapOptions.marker_text;
				if( ClapatMapOptions.map_type == 0 ){

					map_type = google.maps.MapTypeId.SATELLITE;
				}
				else{

					map_type = google.maps.MapTypeId.ROADMAP;
				}

			}

			var newstyle = [{
							featureType: "all",
							elementType: "labels.text.fill",
							stylers: [{
								saturation: 36
							}, {
								color: "#333333"
							}, {
								lightness: 40
							}]
						}, {
							featureType: "all",
							elementType: "labels.text.stroke",
							stylers: [{
								visibility: "on"
							}, {
								color: "#ffffff"
							}, {
								lightness: 16
							}]
						}, {
							featureType: "all",
							elementType: "labels.icon",
							stylers: [{
								visibility: "off"
							}]
						}, {
							featureType: "administrative",
							elementType: "geometry.fill",
							stylers: [{
								color: "#fefefe"
							}, {
								lightness: 20
							}]
						}, {
							featureType: "administrative",
							elementType: "geometry.stroke",
							stylers: [{
								color: "#fefefe"
							}, {
								lightness: 17
							}, {
								weight: 1.2
							}]
						}, {
							featureType: "administrative.locality",
							elementType: "labels.text",
							stylers: [{
								color: "#8d8d8d"
							}, {
								weight: "0.35"
							}]
						}, {
							featureType: "landscape",
							elementType: "geometry",
							stylers: [{
								color: "#f5f5f5"
							}, {
								lightness: 20
							}]
						}, {
							featureType: "poi",
							elementType: "geometry",
							stylers: [{
								color: "#f5f5f5"
							}, {
								lightness: 21
							}]
						}, {
							featureType: "poi.park",
							elementType: "geometry",
							stylers: [{
								color: "#dedede"
							}, {
								lightness: 21
							}]
						}, {
							featureType: "road.highway",
							elementType: "geometry.fill",
							stylers: [{
								color: "#ffffff"
							}, {
								lightness: 17
							}]
						}, {
							featureType: "road.highway",
							elementType: "geometry.stroke",
							stylers: [{
								color: "#ffffff"
							}, {
								lightness: 29
							}, {
								weight: .2
							}]
						}, {
							featureType: "road.arterial",
							elementType: "geometry",
							stylers: [{
								color: "#ffffff"
							}, {
								lightness: 18
							}]
						}, {
							featureType: "road.local",
							elementType: "geometry",
							stylers: [{
								color: "#ffffff"
							}, {
								lightness: 16
							}]
						}, {
							featureType: "transit",
							elementType: "geometry",
							stylers: [{
								color: "#f2f2f2"
							}, {
								lightness: 19
							}]
						}, {
							featureType: "water",
							elementType: "geometry",
							stylers: [{
								color: "#e9e9e9"
							}, {
								lightness: 17
							}]
					}];
						
			var settings = {
				zoom: map_zoom,
				center: new google.maps.LatLng(43.270441,6.640888),
				mapTypeControl: false,
				scrollwheel: false,
				draggable: true,
				panControl:false,
				scaleControl: false,
				zoomControl: false,
				streetViewControl:false,
				navigationControl: false,
				mapTypeId: map_type,
				styles: newstyle
			};


			var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center);
			});
			var contentString = '<div id="content-map-marker" style="text-align:center; padding-top:10px; padding-left:10px">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h4 id="firstHeading" class="firstHeading" style="color:#000; font-weight:600; margin-bottom:0px;"><strong>' + marker_title + '</strong></h4>'+
				'<div id="bodyContent">'+
				'<p color:#999; font-size:14px; margin-bottom:10px">' + marker_text + '</p>'+
				'</div>'+
				'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			var companyImage = new google.maps.MarkerImage(map_marker_image,
				new google.maps.Size(58,63),<!-- Width and height of the marker -->
				new google.maps.Point(0,0),
				new google.maps.Point(35,20)<!-- Position of the marker -->
			);

			var latitude = 43.270441;
			var longitude = 6.640888;
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode({'address':map_address}, function(results, status) {
				if(status == google.maps.GeocoderStatus.OK) {

					map.setCenter(results[0].geometry.location);

					latitude = results[0].geometry.location.lat();
					longitude = results[0].geometry.location.lng();

					var companyPos = new google.maps.LatLng(latitude, longitude);
					var companyMarker = new google.maps.Marker({
										position: companyPos,
										map: map,
										icon: companyImage,
										title:"Our Office",
										zIndex: 3});
									google.maps.event.addListener(companyMarker, 'click', function() {
										infowindow.open(map,companyMarker);
									});
				}
			});

		}

		return false

	} // End ContactMap

	function InitContactMap() {

		if( jQuery('#map_canvas').length > 0 ){

			if (typeof google != 'undefined' && typeof google.maps != 'undefined'){

				// google maps already loaded, call the function which draws the map
				ContactMap();

			} else {

				var map_api_key = '';
				if( typeof ClapatMapOptions != 'undefined' ){
					map_api_key = 'key=' + ClapatMapOptions.map_api_key;
				}
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = 'https://maps.googleapis.com/maps/api/js?' + map_api_key +
							'&callback=ContactMap';
				document.body.appendChild(script);
			}

		}
	} // End InitContactMap

