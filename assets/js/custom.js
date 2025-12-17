(function($) {
	"use strict";
	/*----------------------------------------------------
	* Theme Loader
	* Sidebar Popup
	* Mobile Menu
	* Background
	* Active Hover
	* Responsive Menu
	* Features
	* CounterUp
	* FAQ
	* Video Popup
	* Brand Slider
	* Skill Bar
	* Skill Bar Two
	* Testimonial
	* Portfolio Filter
	* Active Hover
	* Active Hover
	* Scroll To Top
	* Register GSAP
	* Smooth Scroller
	* One Page Menu
	* Item Bounce Animation
	* FadeIn Up Left Right Animation
	* Skew Smoother
	* Split Title
	* Button Bounce
	* Image Zoom
	/*==========  Theme Loader  ==========*/
	$(document).ready(function () {
		$('.theme-loader').hide();
	});
	/*==========  Sidebar Popup  ==========*/
	$('.header__area-box-sidebar-popup-icon i').on("click", function() {
		$('.header__area-box-sidebar-popup').addClass('active');
	});
	$('.header__area-box-sidebar-popup .sidebar-close-btn').on("click", function() {
		$('.header__area-box-sidebar-popup').removeClass('active');
	});
	$('.header__area-box-sidebar-popup-icon i').on("click", function() {
		$('.sidebar-overlay').addClass('show');
	});
	$('.header__area-box-sidebar-popup .sidebar-close-btn').on("click", function() {
		$('.sidebar-overlay').removeClass('show');
	});
	/*==========  Mobile Menu  ==========*/
	function handleMenuCloning() {
		var mobileMenu = document.getElementById("mobilemenu");
		var mainMenu = document.querySelector(".vertical_menu");
		if (mainMenu) {
			var clonedMenu = mainMenu.querySelector("#mobilemenu");
			if (clonedMenu) {
				mainMenu.removeChild(clonedMenu);
			}
			if (window.innerWidth <= 992 && mobileMenu) {
				var newClonedMenu = mobileMenu.cloneNode(true);
				mainMenu.appendChild(newClonedMenu);
			}
		}
	}
	document.addEventListener("DOMContentLoaded", handleMenuCloning);
	window.addEventListener("resize", handleMenuCloning);	
	/*==========  Background  ==========*/
	$("[data-background]").each(function() {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	})
	/*========== Active Hover  ==========*/
	$(".features__area-two-item").hover(function() {
		$(".features__area-two-item").removeClass("features__area-two-item-hover");
		$(this).addClass("features__area-two-item-hover");
	});
	// /*========== Responsive Menu  ==========*/
	$('.meanmenu-responsive').meanmenu({
		meanMenuContainer: '.responsive-menu',
		meanScreenWidth: '991',
		meanMenuOpen: '<span></span><span></span><span></span>',
		meanMenuClose: '<i class="fal fa-times"></i>'
	});
	// /*==========  Features  ==========*/
	var swiper = new Swiper(".features-slider", {
		slidesPerView: 4,
		loop: true,
		speed: 1500,
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			640: {
				slidesPerView: 2
			},
			991: {
				slidesPerView: 3
			},
			1400: {
				slidesPerView: 4
			},
		}
	});
	/*==========  CounterUp  ==========*/
	var counter = $('.counter');
	counter.counterUp({
		time: 2500,
		delay: 100
	});
	$('.toggle-menu ul').hide();
	$(".toggle-menu a").click(function() {
		$(this).parent(".toggle-menu").children("ul").slideToggle("100");
		$(this).find(".change").toggleClass("fal fa-angle-up fal fa-angle-down");
	});
	/*========== FAQ  ==========*/
	$(".faq-item-card-header").click(function() {
		if($(this).next(".faq-item-card-header-content").hasClass("active")) {
			$(this).next(".faq-item-card-header-content").removeClass("active").slideUp()
			$(this).children("i").removeClass("fal fa-angle-up").addClass("fal fa-angle-down")
		} else {
			$(".faq-item-card-header-content").removeClass("active").slideUp()
			$(".faq-item-card .faq-item-card-header i").removeClass("fal fa-angle-up").addClass("fal fa-angle-down");
			$(this).next(".faq-item-card-header-content").addClass("active").slideDown()
			$(this).children("i").removeClass("fal fa-angle-down").addClass("fal fa-angle-up")
		}
	});
	/*==========  Video Popup  ==========*/
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	// /*==========  Brand Slider  ==========*/
	var swiper = new Swiper(".sponsors-slider", {
		slidesPerView: 3,
		loop: true,
		speed: 1500,
		spaceBetween: 120,
		breakpoints: {
			0: {
				spaceBetween: 50,
				slidesPerView: 2
			},
			575: {
				spaceBetween: 80,
				slidesPerView: 3
			},
			992: {
				slidesPerView: 4
			},
			1200: {
				slidesPerView: 3
			},
		}
	});
	/*==========  Skill Bar  ==========*/
	if($('.skill__area-right-skill-item-bar').length) {
		$('.skill__area-right-skill-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	/*==========  Skill Bar Two  ==========*/
	if($('.skill__area-two-right-skill-item-bar').length) {
		$('.skill__area-two-right-skill-item-bar').appear(function() {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	// /*==========  Testimonial  ==========*/
	var swiper = new Swiper(".reviews", {
		slidesPerView: 1,
		loop: true,
		speed: 1000,
		spaceBetween: 30,
		pagination: {
			el: ".reviews-pagination",
			clickable: true,
		},
	});
	/*==========  Portfolio Filter  ==========*/
	$(window).on('load', function() {
		var $grid = $('.portfolio__area-two-active').isotope({});
		$('.portfolio__area-two-btn').on('click', 'li', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
		$('.portfolio__area-two-btn').on('click', 'li', function() {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
		});
	});
	/*========== Active Hover  ==========*/
	$(".portfolio__area-item").hover(function() {
		$(".portfolio__area-item").removeClass("portfolio__area-item-hover");
		$(this).addClass("portfolio__area-item-hover");
	});
	/*========== Active Hover  ==========*/
	$(".features__area-item").hover(function() {
		$(".features__area-item").removeClass("features__area-item-hover");
		$(this).addClass("features__area-item-hover");
	});
	/*========== Scroll To Top  ==========*/
	var scrollPath = document.querySelector('.scroll-up path');
	var pathLength = scrollPath.getTotalLength();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'none';
	scrollPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	scrollPath.style.strokeDashoffset = pathLength;
	scrollPath.getBoundingClientRect();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
	var updatescroll = function() {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var scroll = pathLength - (scroll * pathLength / height);
		scrollPath.style.strokeDashoffset = scroll;
	}
	updatescroll();
	$(window).scroll(updatescroll);
	var offset = 50;
	var duration = 950;
	jQuery(window).on('scroll', function() {
		if(jQuery(this).scrollTop() > offset) {
			jQuery('.scroll-up').addClass('active-scroll');
		} else {
			jQuery('.scroll-up').removeClass('active-scroll');
		}
	});
	jQuery('.scroll-up').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, duration);
		return false;
	});
	/*========== Register GSAP  ==========*/
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

	gsap.config({
		nullTargetWarn: false,
	});
	/*========== Smooth Scroller  ==========*/
	const smoother = ScrollSmoother.create({
		smooth: 2,
		effects: true,
		smoothTouch: 0.2,
		normalizeScroll: false,
		ignoreMobileResize: true,
	});
	/*========== One Page Menu  ==========*/
	document.querySelectorAll('.nav-link').forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			gsap.to(window, {duration: 1, scrollTo: this.getAttribute('href')});
			document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
			this.classList.add('active');
		});
	});
	const sections = document.querySelectorAll('.section');
	sections.forEach(section => {
		gsap.to(section, {
			scrollTrigger: {
				trigger: section,
				start: "top 40%",
				delay: 1,
				duration: 2,
				onEnter: () => {
					document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
					const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
					activeLink.classList.add('active');
				},
				onLeaveBack: () => {
					document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
					const previousSection = section.previousElementSibling;
					if (previousSection && previousSection.classList.contains('section')) {
						const previousLink = document.querySelector(`.nav-link[href="#${previousSection.id}"]`);
						previousLink.classList.add('active');
					}
				}
			}
		});
	});
	/*==========  Item Bounce Animation  ==========*/
	gsap.set(".item_bounce", { opacity: 0, y: -100 });
	ScrollTrigger.batch(".item_bounce", {
		onEnter: (batch) => gsap.to(batch, {
			opacity: 1,
			y: 0,
			stagger: 0.4,
			duration: 1.5,
			ease: "bounce",
		}),
		start: 'top 90%',
	});
	/*==========  FadeIn Up Left Right Animation  ==========*/
	gsap.set(".fade_in_up", { opacity: 0, y: 30 });
	ScrollTrigger.batch(".fade_in_up", {
		onEnter: (batch) => gsap.to(batch, {
			opacity: 1,
			y: 0,
			stagger: 0.5,
			duration: 1.2,
			delay: 0.8,
		}),
		start: 'top 90%',
	});
	gsap.set(".fadeInRight", { opacity: 0, x: -30 });
	ScrollTrigger.batch(".fadeInRight", {
		onEnter: (batch) => gsap.to(batch, {
			opacity: 1,
			x: 0,
			stagger: 0.5,
			duration: 1.2,
			delay: 0.8,
		}),
		start: 'top 90%',
	});
	gsap.set(".fadeInLeft", { opacity: 0, x: 30 });
	ScrollTrigger.batch(".fadeInLeft", {
		onEnter: (batch) => gsap.to(batch, {
			opacity: 1,
			x: 0,
			stagger: -0.5,
			duration: 1.2,
			delay: 0.8,
		}),
		start: 'top 90%',
	});
	gsap.set(".fade_in_left", { x: 30, opacity: 0 });
	const fadeInLeft = gsap.utils.toArray(".fade_in_left")
	fadeInLeft.forEach((item, i) => {
		let fadeTl = gsap.timeline({
			scrollTrigger: {
			trigger: item,
			start: 'top 90%',
			end: 'bottom 60%',
			}
		})
		fadeTl.to(item, {
			x: 0,
			opacity: 1,
			ease: "power2.out",
			delay: 1,
			duration: 1.5,
		})
	})
	gsap.set(".fade_in_right", { x: -30, opacity: 0 });
	const fadeInRight = gsap.utils.toArray(".fade_in_right")
	fadeInRight.forEach((item, i) => {
		let fadeTl = gsap.timeline({
			scrollTrigger: {
			trigger: item,
			start: 'top 90%',
			end: 'bottom 60%',
			}
		})
		fadeTl.to(item, {
			x: 0,
			opacity: 1,
			ease: "power2.out",
			delay: 1,
			duration: 1.5,
		})
	})
	/*==========  Skew Smoother  ==========*/
	let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skew_smoother", "skewY", "deg"),
    clamp = gsap.utils.clamp(-20, 20);
	ScrollTrigger.create({
		onUpdate: (self) => {
			let skew = clamp(self.getVelocity() / -120);  
			if (Math.abs(skew) > Math.abs(proxy.skew)) {
				proxy.skew = skew;
				gsap.to(proxy, {skew: 0, duration: 1, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
			}
		}
	});
	gsap.set(".skew_smoother", {transformOrigin: "center", force3D: true});
	/*==========  Split Title  ==========*/
	if ($('.split_title').length > 0) {
		let char_come = gsap.utils.toArray(".split_title");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});
			const itemSplitted = new SplitText(splitTextLine, {
				type: "chars, words"
			});
			tl.from(itemSplitted.chars, {
				duration: 1,
				delay: 0.5,
				x: 100,
				autoAlpha: 0,
				stagger: 0.05
			});
		});
	}
	if ($('.split_des').length > 0) {
		let char_come = gsap.utils.toArray(".split_des");
		char_come.forEach(splitTextLine => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: 'top 90%',
					end: 'bottom 60%',
					scrub: false,
					markers: false,
					toggleActions: 'play none none none'
				}
			});
			const itemSplitted = new SplitText(splitTextLine, {
				type: "words"
			});
			tl.from(itemSplitted.words, {
				duration: 1,
				x: 50,
				stagger: 0.05
			});
		});
	}	
	/*==========  Button Bounce  ==========*/
	let btn1 = gsap.utils.toArray("#btn_bounce")
	let btn2 = gsap.utils.toArray(".btn_bounce")
	const all_buttons = btn1.concat(btn2);
	all_buttons.forEach((btn) => {
		gsap.from(btn, {
			scrollTrigger: {
				trigger: btn,
				start: 'top 90%',
				end: 'bottom 60%',
				markers: false,
			},
			opacity: 0,
			y: -70,
			ease: "bounce",
			delay: 0,
			duration: 3,
		})
	})
	/*==========  Image Zoom  ==========*/
	let imageTl = gsap.timeline({
		scrollTrigger: {
		  trigger: ".scroll_zoom",
		  start: "top bottom",
		  markers: false,
		  scrub: 1,
		  end: "bottom center"
		}
	})
	imageTl.to(".scroll_zoom", {
		scale: 1.2,
		duration: 1,
	})
})(jQuery);
