import React from 'react';
import Header from './Header';
import Mobile from './Mobile';
// import { NavLink } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
 
import DesktopImage from '../img/legusi_desktop_full.png';
import MobileImage from '../img/legusi_desktop_full.png';

import '../scss/layout.scss';
import '../scss/services.scss';

export default function Services() {
	
	return (
		// <main className="services-master" style={{ backgroundImage: `url(${require("../img/legusi_desktop_full.png")})` }}>
		<main className="services-master">
			<LazyLoad>
				<img alt="Mountains"
				
				sizes="(min-width: 800px) 800w, (min-width: 320px) 730w" 

				srcset={DesktopImage + " 5456w," + MobileImage + " 730w,"}

				src={DesktopImage}  

				class="mountain" 
				
				/>
			</LazyLoad>
			<Header />
			<section className="services">
		 

				<div className="services-panel">
					<div className="inner">

						<h3>Contact</h3>

						{/* <p><b>Donner &amp; Blitzen Studios</b> is a full suite recording, mixing and mastering facility located in the San Berdandino, CA, mountains, easily accessible from all surrounding highway routes, with acommodation on or off site.</p> */}

						<p className="bold"><b>Mathias Schneeberger</b> is a Los Angeles based music producer, mixing engineer, film/tv composer and a classically trained multi-instrumentalist who has worked on critically acclaimed and commercially successful records with artists such as Mark Lanegan, Foo Fighters, Joseph Arthur, Greg Dulli/The Afghan Whigs, Earth, Sun 000) and Masters of Reality. </p>

						<p>For further information, or to discuss your requirements, get in touch <a href="mailto:doblitz1@gmail.com" className="textlink">via email</a>. </p>

	

					</div>
				</div>

				<div className="bio-panel">
					<div className="inner">
						<h3>Biography</h3>

						<div className="bio-scroll">
						{/* <p className="bold"><b>Mathias Schneeberger</b> is a Los Angeles based music producer, mixing engineer, film/tv composer and a classically trained multi-instrumentalist who has worked on critically acclaimed and commercially successful records with artists such as Mark Lanegan, Joseph Arthur, Greg Dulli (The Afghan Whigs, The Twilight Singers, The Gutter Twins), Earth, Sun 000) and Masters of Reality. </p> */}

						<p>Schneeberger developed his engineering and mixing skills in Berlin as in house producer/engineer at Vieklang Studios working with a burgeoning selection of artists including Joe Jackson and at the world famous Hansa Studios, recording the punk inflected breakthrough cover of "Mrs Robinson" for The Lemonheads. </p>
						<p>Moving on to join Urge Overkill in support of Nirvana on their European leg of the Nevermind tour in 1992 as Front of House mixing engineer, his career as a producer emerged in the 1990s producing "The Church Within" for Colombia Records' new signees The Obsessed in the US. </p>

						<p>Thereafter, Schneeberger founds Donner & Blitzen studios in Los Angeles before relocating the studio to present day San Bernadino Mountains, CA where his work as a key collaborator has been instrumental on an array of critically acclaimed records spanning over two decades, technically and stylistically elevating each of their genres.</p> 
						<p>Engineering and producing the Mark Lanegan and Greg Dulli collaboration "The Gutter Twins", Schneeberger effectively acted as the band's unofficial "secret" third member. </p>
						<p>In 2011, Schneeberger took helm as musical director and co-composer for Canadian alternative rock collective Bran Van 3000's peformance at the Osheaga festival in Montreal, to a capacity of 50,000 people. Recent work includes the celebrated return of The Afghan Whigs' critically acclaimed "Do To The Beast" and producing a third album for Fatso Jeston on their 2016 euro tour with Schneeberger on bass duties.</p>
						<p>As a composer for film, Schneeberger has scored the 2009 Canadian comedy horror musical "SUCK", featuring appearances from Iggy Pop, Alice Cooper, Henry Rollins and Moby. He has also scored the comedy feature "Phil the Alien" and is actively composing for brand advertising.</p>
						<p>Schneeberger operates out of Donner &amp; Blitzen Studios, a full suite recording and mixing facility located in the San Bernardino Mountains, CA, Rancho de la luna, Joshua Tree, CA and Dave Grohl's Studio 606 in the San Fernando Valley, CA.</p></div>

						{/* <p className="button-wrapper"><a href="/bio" class="button">READ MORE</a></p> */}
					</div>
					{/* <div className="fade-text"></div> */}
				</div>

			</section>
			<Mobile />
		</main>
  );
};
 