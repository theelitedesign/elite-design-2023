/**
 * Sticky Header
 * Adds a class to header on scroll
 */

jQuery( document ).on( 'scroll', function() {
	if ( jQuery( document ).scrollTop() > 0 ) {
		jQuery( 'header, body' ).addClass( 'shrink' );
	} else {
		jQuery( 'header, body' ).removeClass( 'shrink' );
	}
} );

jQuery( function() {
	let lastScrollTop = 0,
		delta = 15;
	jQuery( window ).scroll( function( event ) {
		const st = jQuery( this ).scrollTop();

		if ( Math.abs( lastScrollTop - st ) <= delta ) {
			return;
		}
		if ( ( st > lastScrollTop ) && ( lastScrollTop > 0 ) ) {
			// downscroll code
			jQuery( 'header' ).css( 'top', '-100px' );
			jQuery( '.logged-in.admin-bar header' ).css( 'top', '-130px' );
			jQuery( '.logged-in.admin-bar header' ).css( 'top', '-130px' );
		} else {
			// upscroll code
			jQuery( 'header' ).css( 'top', '0px' );
			jQuery( '.logged-in.admin-bar header' ).css( 'top', '32px' );
		}
		lastScrollTop = st;
	} );
} );

/**
 * Document Ready Function
 * Triggered when document get's ready
 */
jQuery( document ).ready( function( jQuery ) {
	/**
	 * Toggle menu for mobile
	 */
	jQuery( '.menu-btn' ).click( function() {
		jQuery( this ).toggleClass( 'active' );
		jQuery( '.nav-overlay' ).toggleClass( 'open' );
		jQuery( 'html, body' ).toggleClass( 'no-overflow' );
		jQuery( '.header-nav ul li.active' ).removeClass( 'active' );
		jQuery( '.header-nav ul.sub-menu' ).slideUp();
	} );

	/**
	 * Add span tag to multi-level accordion menu for mobile menus
	 */
	jQuery( 'li' ).each( function() {
		if ( jQuery( this ).hasClass( 'menu-item-has-children' ) ) {
			jQuery( this ).prepend( '<span class="submenu-icon"></span>' );
		}
	} );

	/**
	 * Slide Up/Down internal sub-menu when mobile menu arrow clicked
	 */
	jQuery( '.header-nav .submenu-icon' ).click( function() {
		const link = jQuery( this );
		const closestUl = link.closest( 'ul' );
		const parallelActiveLinks = closestUl.find( '.active' );
		const closestLi = link.closest( 'li' );
		const linkStatus = closestLi.hasClass( 'active' );
		let count = 0;

		closestUl.find( 'ul' ).slideUp( function() {
			if ( ++count === closestUl.find( 'ul' ).length ) {
				parallelActiveLinks.removeClass( 'active' );
			}
		} );

		if ( ! linkStatus ) {
			closestLi.children( 'ul' ).slideDown();
			closestLi.addClass( 'active' );
		}
	} );

	/**
	 *
	 * Lead paragraph large
	 *
	 */

	const leadParagraphCTN = document.querySelectorAll( '.lead-para-ctn' );

	leadParagraphCTN.forEach( function( item, index ) {
		if ( jQuery( ' span.span-1' ).length > 0 ) {
			gsap.to( ' span.span-1', {
				scrollTrigger: {
					trigger: item,
					start: 'top center',
					endTrigger: item,
					end: '33% center',
					scrub: true,

					pin: false,
					 onEnter: () => jQuery( ' span.span-1' ).addClass( 'active' ),
					onLeaveBack: () => jQuery( ' span.span-1' ).removeClass( 'active' ),
				},
				duration: 1,
			} );
		}
		if ( jQuery( ' span.span-2' ).length > 0 ) {
			gsap.to( ' span.span-2', {
				scrollTrigger: {
					trigger: item,
					start: '33.01% center',
					endTrigger: item,
					end: '66% center',
					scrub: true,
					pin: false,
					 onEnter: () => jQuery( ' span.span-2' ).addClass( 'active' ),
					onLeaveBack: () => jQuery( ' span.span-2' ).removeClass( 'active' ),
				},
				duration: 1,
			} );
		}
		if ( jQuery( ' span.span-3' ).length > 0 ) {
			gsap.to( ' span.span-3', {
				scrollTrigger: {
					trigger: item,
					start: '66.01% center',
					endTrigger: item,
					end: '100% center',
					scrub: true,
					pin: false,
					 onEnter: () => jQuery( ' span.span-3' ).addClass( 'active' ),
					onLeaveBack: () => jQuery( ' span.span-3' ).removeClass( 'active' ),
				},
				duration: 1,
			} );
		}
	} );

	/**
	 *
	 * Video
	 *
	 */

	jQuery( 'a.video-btn' ).magnificPopup( {
		type: 'iframe',
	} );

	/**
	 *
	 * Images Slider
	 *
	 */

	 jQuery( '.images-slider-ctn' ).owlCarousel( {
		loop: true,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	} );

	/**
	 *
	 * Testimonial Slider
	 *
	 */

	 jQuery( '.testi-ctn' ).owlCarousel( {
		loop: false,
		nav: true,
		dots: false,
		margin: 0,
		autoHeight: true,
		responsive: {
			0: {
				items: 1,
			},
		},
	} );

	/**
	 *
	 * Large Text Slider
	 *
	 */

	 jQuery( '.cta-bottom-text' ).owlCarousel( {
		loop: true,
		nav: false,
		dots: false,
		autoWidth: true,
		autoplay: true,
		slideTransition: 'linear',
		autoplayTimeout: 10000,
		autoplaySpeed: 10000,
		margin: 0,
		responsive: {
			0: {
				items: 1,
			},
		},
	} );

	/**
	 *
	 *
	 *	Stat counter
	 *
	 *
	 */

	 if ( jQuery( '.stats-inner-area' ).length > 0 ) {
		let a = 0;
		jQuery( window ).scroll( function() {
			const oTop = jQuery( '.stats-ctn' ).offset().top - window.innerHeight;
			if ( a == 0 && jQuery( window ).scrollTop() > oTop ) {
				jQuery( '.fig-number' ).each( function() {
					const $this = jQuery( this ),
						countTo = $this.attr( 'data-number' );
					jQuery( {
						countNum: $this.text(),
					} ).animate(
						{
							countNum: countTo,
						},

						{
							duration: 1000,
							easing: 'swing',
							step() {
								//$this.text(Math.ceil(this.countNum));
								$this.text( Math.ceil( this.countNum ).toLocaleString( 'en' ) );
							},
							complete() {
								$this.text( Math.ceil( this.countNum ).toLocaleString( 'en' ) );
							},
						},
					);
				} );
				a = 1;
			}
		} );
	}
	jQuery.noConflict();

	/**
	 *
	 *    Scroll Magic For Slider
	 *
	 */

	if ( jQuery( window ).width() >= 748 ) {
		// //Create new scrollmagic controller
		if ( jQuery( '.horizontal-scroll-container' ).length ) {
			const controller = new ScrollMagic.Controller();

			//Create horizontal scroll slide gsap function
			const horizontalSlide = new TimelineMax()
				.to( '.horizontal-scroll', 3, { x: '-30%' } ); //Depends on the final width you want to scroll.

			// Create scrollmagic scene to pin and link horzontal scroll animation
			new ScrollMagic.Scene( {
				triggerElement: '.horizontal-scroll-container', //Div that will trigger the animation.
				triggerHook: 'onLeave', //The animation will start on leaving the .horizontal-scroll-container section.
				duration: '200%', //Scroll Duration, the amount of pixels you want to scroll to see the entire animation.
			} )
				.setPin( '.horizontal-scroll-container' )
				.setTween( horizontalSlide )
				.addTo( controller );
		}
	}
	if ( jQuery( '.hero-home-ctn' ).length ) {
		window.onload = function() {
			const tl = new TimelineLite( { delay: 1 } ),
				firstBg = document.querySelectorAll( '.text__first-bg' ),
				secBg = document.querySelectorAll( '.text__second-bg' ),
				word = document.querySelectorAll( '.text__word' );

			tl
				.to( firstBg, 0.2, { scaleX: 1 } )
				.to( secBg, 0.2, { scaleX: 1 } )
				.to( word, 0.1, { opacity: 1 }, '-=0.1' )
				.to( firstBg, 0.2, { scaleX: 0 } )
				.to( secBg, 0.2, { scaleX: '0' } );
		};
	}
	if ( jQuery( '.blog-teaser-ctn' ).length ) {
		gsap.to( '.white-ctn', {
			scrollTrigger: {
				trigger: '.js-white-ctn',
				scrub: true,
				start: 'top 60%',
				end: 'bottom 38%',
				onEnter: () => jQuery( 'body' ).addClass( 'white-body-active' ),
				onLeaveBack: () => jQuery( 'body' ).removeClass( 'white-body-active' ),
				// markers: true,
			},
			duration: 1,
			ease: 'none',
		} );

		gsap.to( '.black-ctn', {
			scrollTrigger: {
				trigger: '.js-black-ctn',
				scrub: true,
				start: 'top 0',
				end: 'bottom 38%',
				onEnter: () => jQuery( 'body' ).removeClass( 'white-body-active' ),
				onLeaveBack: () => jQuery( 'body' ).addClass( 'white-body-active' ),
				// markers: true,
			},
			duration: 1,
			ease: 'none',
		} );
	}
} );
