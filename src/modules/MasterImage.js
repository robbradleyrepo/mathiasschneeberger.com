import React from 'react'; 
import DesktopImage from '../img/legusi_desktop_full.png';
import MobileImage from '../img/legusi_mobile_full.png';
import LazyLoad from 'react-lazy-load'; 
import '../scss/layout.scss';

import Drone from '../audio/drone_v4.mp3';
import Nav1 from '../audio/nav1.mp3';
import Nav2 from '../audio/nav2.mp3';
import Nav3 from '../audio/nav3.mp3';

import $ from 'jquery';
window['jQuery'] = window['$'] = $;
window.jQuery = $;
window.$ = $;
global.jQuery = $;
const mgGlitch = require('../vendor/mgGlitch');
console.log(mgGlitch);

 

export default class extends React.Component {
	
	render() {
 
 
		this.glitchEngage();;
		 
		
		return (
			<section className="black is-home">
				<LazyLoad>
					<img alt="Mountains"
					
					sizes="(min-width: 800px) 800w, (min-width: 320px) 730w" 

					srcSet={DesktopImage + " 5456w," + MobileImage + " 730w,"}
 
					src={DesktopImage}  

					className="feature-single glitch-event glitch-img-1" 
					
					/>
				</LazyLoad>
				<audio id="drone" loop preload="true" className="soundfx"><source src={Drone} type="audio/mpeg" /></audio>
				<audio id="nav1" preload="true" className="nav nav1"><source src={Nav1} type="audio/mpeg" /></audio>
				<audio id="nav2" preload="true" className="nav nav2"><source src={Nav2} type="audio/mpeg" /></audio>
				<audio id="nav3" preload="true" className="nav nav3"><source src={Nav3} type="audio/mpeg" /></audio>
			</section>
		)
	}
 
	glitchEngage() {

	$.getScript( "https://www.mathiasschneeberger.com/js/mgGlitch.js" )
		
		.done(function() {
			
			window.$('.is-home').find('.glitch-img-1').mgGlitch({
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
					glitch1TimeMax : 90,
					// set min time for glitch 2 elem
					glitch2TimeMin : 4220, 
					// set max time for glitch 2 elem
					glitch2TimeMax : 4830, 
					zIndexStart : -1,
			});
			
			console.log('glitch success');

				
			$('.enable-audio').mousedown(function() {
				console.log('audio trigger');

				$('.enable-audio').addClass('off'); 
				
				$('body').addClass('sound-on');

				$('.soundfx').get(0).play();
			
				$('.audio--disc').mouseenter(function() {
					$('.nav1').get(0).play();	
				});

				$('.audio--studio').mouseenter(function() {
					$('.nav2').get(0).play();	
				});

				$('.audio--services').mouseenter(function() {
					$('.nav3').get(0).play();	
				});

				var drone = document.getElementById("drone");
				drone.volume = 0.6;

				var nav1 = document.getElementById("nav1");
				nav1.volume = 0.2;

				var nav2 = document.getElementById("nav2");
				nav2.volume = 0.2;
				
				var nav3 = document.getElementById("nav3");
				nav3.volume = 0.2;
				
				
			});

				
				
			
			

			// if ( $('body').hasClass('sound-on') ) {
				
			// } 
	
			// setInterval(function() {
			// 	$( ".glitch-img-1" ).mgGlitch({
			// 	  destroy : true, 
			// 	});
			// 	clearInterval();
			// 	if ( $('body').hasClass('sound-on') ) {
			// 		$('.soundfx').get(0).pause();
			// 	}
			//  }, 1000);
	
			// setInterval(function() { 
			// 	clearInterval();
			// 	if ( $('body').hasClass('sound-on') ) {
			// 		$('.soundfx').get(0).play();
			// 	}
			//  }, 5000);
	
		
		
		})

		.fail(function( jqxhr, settings, exception ) {
			// console.log( jqxhr, settings, exception );
			console.log('glitch fail');
		});

		 

		$(window).resize(function () {

			// $('.soundfx').get(0).pause();

			$( ".glitch-event" ).mgGlitch({
				destroy: true,  
			});

			// $( "body" ).onClick(function() {
			// 	console.log('clicked');
			// 	$(this).mgGlitch({
		    //  		destroy: false,  
			// 	});
			// });

			// if ($('.feature-single').hasClass('glitch-img-1')) {

			// 	$(this).replaceWith("<img sizes=\"(min-width: 800px) 800w, (min-width: 320px) 730w\" srcset=\"images/2019/studio-desktop.jpg 5456w, images/2019/studio-mobile.jpg 730w,\" src=\"images/2019/studio-mobile.jpg\" alt=\"Endless working in studio\" class=\"feature-single glitch-event glitch-img-1\">");
			// }

			// var w = parseInt(window.innerWidth);

			// if(w <= 1024) {
			// 	window.location.replace("/mobile");
			// }

		});
		
	}

}
