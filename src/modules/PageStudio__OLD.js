import React, { useState } from 'react';
import Header from './Header';
import { useTransition, animated } from 'react-spring';

import '../scss/layout.scss';
import '../scss/services.scss';

const cards = [ 
	'https://www.mathiasschneeberger.com/dev/images/1.jpg',
	'https://www.mathiasschneeberger.com/dev/images/2.jpg',
	'https://www.mathiasschneeberger.com/dev/images/3.jpg',
	'https://www.mathiasschneeberger.com/dev/images/4.jpg',
	'https://www.mathiasschneeberger.com/dev/images/5.jpg',
	'https://www.mathiasschneeberger.com/dev/images/6.jpg',
	'https://www.mathiasschneeberger.com/dev/images/7.jpg',
  ];
   
  export default function Studio() {
	const [count, setCount] = useState(0);
	const [reverse, setReverse] = useState(false);
  
	const transitions = useTransition([count], item => item, {
	  from: {
		opacity: 0,
		marginRight: reverse ? 50 : 0,
		position: 'absolute', 
	  },
	  enter: { opacity: 1, marginRight: 0 },
	  leave: { opacity: 0, marginRight: reverse ? 50 : 0 }
	});
  
	const prevSlide = () => {
	  let prevSlide = count - 1 < 0 ? cards.length - 1 : count - 1;
	  setCount(prevSlide);
	  setReverse(true);
	};
  
	const nextSlide = () => {
	  let nextSlide = count + 1 < cards.length ? count + 1 : 0;
	  setCount(nextSlide);
	  setReverse(false);
	};
  
	return (
		<main>
			<Header />
			<section class="services">
				<div className="control carousel__prev" onClick={prevSlide}>
				◀︎
				</div>
				<div class="image">
				{transitions.map(({ item, props, key }) => (
					<animated.div key={key} style={props}>
					<img src={cards[item]} alt="carousel-img" />
					</animated.div>
				))}
				</div>
				<div className="control carousel__next" onClick={nextSlide}>
				▶︎
				</div>
			</section>
		</main>
	);
  }