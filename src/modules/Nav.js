import React from 'react';  
import { NavLink } from 'react-router-dom';
import '../scss/nav.scss';

export default function Nav() {
	 
	return (
		<nav className="global">
			<NavLink to="/disc">
				<div className="navitem navitem--disc"></div>
				<span>Selected Discography</span>	
			</NavLink>
			{/* <NavLink to="/bio">Biography </NavLink> */}
			<NavLink to="/stills">
				<div className="navitem navitem--studio"></div>
				<span>Stills<br/></span>
			</NavLink> 
			<NavLink to="/biography">
				<div className="navitem navitem--services"></div>
				<span>Biography<br/></span>	
			</NavLink>
		</nav>
  );
};