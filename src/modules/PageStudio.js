import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Header from './Header';
import Mobile from './Mobile';
import LazyLoad from 'react-lazy-load';
 
import DesktopImage from '../img/alt_desktop_full.png';
// import MobileImage from '../img/alt_desktop_full.png';

import '../scss/layout.scss';
import '../scss/studio.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  }, [slider1, slider2]);


  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    centerMode: true,
    swipeToSlide: false,
    focusOnSelect: true, 
	autoplay: true,
	speed: 1500,
	autoplaySpeed: 3000,
	cssEase: "ease-in-out",
	variableWidth: false,
	adaptiveHeight: false,
	infinite: true,
	className: "center"

  };

  const settingsThumbs = {
	arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true, 
	autoplay: true,
	speed: 1500,
	autoplaySpeed: 3000,
	cssEase: "ease-in-out",
	variableWidth: false,
	adaptiveHeight: false,
	infinite: true,
  };

  const slidesData = [
    {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}, {id: 12}, {id: 13}, {id: 14}, {id: 15}, {id: 16}
  ];

  return (
	<main>
		
		<LazyLoad>
			<img alt="Mountains - Alternate"
			
			sizes="(min-width: 800px) 800w, (min-width: 320px) 730w" 

			// srcset={DesktopImage + " 5456w," + MobileImage + " 730w,"}

			srcSet={DesktopImage}
			src={DesktopImage}  

			class="mountain" 
			
			/>
		</LazyLoad>

		<Header />

		<div className="master-panel">

			<div className="spikes"></div>

			<section className="master-slider">

				<div className="slider-wrapper">

				<Slider
				{...settingsMain}
				asNavFor={nav2}
				ref={slider => (setSlider1(slider))}
				>

				{slidesData.map((slide) =>

					<div className="slick-slide" key={slide.id}>
						<LazyLoad>
							<img alt="studio" className="slick-slide-image" src={`${process.env.PUBLIC_URL}/images/studio/${slide.id}.jpg`} />
						</LazyLoad>
					</div>
				)}

				</Slider>

				<div className="thumbnail-slider-wrap">
					<Slider
						{...settingsThumbs}
						asNavFor={nav1}
						ref={slider => (setSlider2(slider))}>

						{slidesData.map((slide) =>

						<div className="slick-slide" key={slide.id}>
							
								<img alt="studio" className="slick-slide-image" src={`${process.env.PUBLIC_URL}/images/studio/${slide.id}.jpg`} />
							
						</div>

						)}

				</Slider>
				</div>
			</div>
				

				
			</section>
		</div>
		<Mobile />
	</main>
  );
}

export default App;