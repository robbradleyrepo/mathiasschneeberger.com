import React from 'react';
import Brand from './Brand';
import Nav from './Nav'; 

import '../scss/layout.scss';

export default function Header() {
	 
	return (
		<header>
			<Brand />
			<Nav/> 
		</header>
  );
};