/*
*   Description: MATHIAS SCHNEEBERGER
*   Date: Jan 2021
*   Version 1.0
*/

/*eslint-disable */

'use strict';

////////////////////////////////////////////
// DOC READY
////////////////////////////////////////////

$(document).ready(function () {

	$('.countdown').countdown({
        date: "May 11, 2021 00:00:00"
    });

	if ($('.feature-single').hasClass('glitch-img-1')) {

		function glitch_1() {
			$('.glitch-img-1').mgGlitch({
		      // set 'true' to stop the plugin
			  destroy : false, 
		      // set 'false' to stop glitching
		      glitch: true, 
		      // set 'false' to stop scaling
		      scale: false, 
		      // set 'false' to stop glitch blending
		      blend : true, 
		      // select blend mode type
		      blendModeType : 'hard-light',
		      // set min time for glitch 1 elem
		      glitch1TimeMin : 10, 
		      // set max time for glitch 1 elem
		      glitch1TimeMax : 80,
		      // set min time for glitch 2 elem
		      glitch2TimeMin : 3020, 
		      // set max time for glitch 2 elem
		      glitch2TimeMax : 3330, 
		       zIndexStart : -1,
			});
		}
		// if ( $('body').hasClass('sound-on') ) {
		// 	$('.soundfx').get(0).play();
		// }
		glitch_1();

		// setInterval(function() {
	 //        $( ".glitch-img-1" ).mgGlitch({
		//       destroy : true, 
		// 	});
		// 	clearInterval();
		// 	if ( $('body').hasClass('sound-on') ) {
		// 		$('.soundfx').get(0).pause();
		// 	}
	 //     }, 1000);

		// setInterval(function() {
	 //       	glitch_1();
		// 	clearInterval();
		// 	if ( $('body').hasClass('sound-on') ) {
		// 		$('.soundfx').get(0).play();
		// 	}
	 //     }, 5000);

	}


});
// end doc ready

$(window).resize(function () {

	

	$( ".glitch-event" ).mgGlitch({
      destroy: true,  
	});

	// $( ".glitch-event" ).click(function() {
	// 	console.log('clicked');
	// 	$(this).mgGlitch({
 //      		destroy: false,  
	// 	});
	// });

	// if ($('.feature-single').hasClass('glitch-img-1')) {

	// 	$(this).replaceWith("<img sizes=\"(min-width: 800px) 800w, (min-width: 320px) 730w\" srcset=\"images/2019/studio-desktop.jpg 5456w, images/2019/studio-mobile.jpg 730w,\" src=\"images/2019/studio-mobile.jpg\" alt=\"Endless working in studio\" class=\"feature-single glitch-event glitch-img-1\">");
	// }

});