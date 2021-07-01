import React from 'react'; 
import { NavLink } from 'react-router-dom';
import MasterImage from './MasterImage';
import Mobile from './Mobile';
import Footer from './Footer';

import '../scss/home.scss';
import '../scss/nav.scss';



export default function Home() {
	 
	return (
		<>	
			<MasterImage />
			<div className="master-brand">
				<p>Producer | Engineer | Composer</p>
			</div>
			<nav className="nav-home">
				{/* <NavLink to="/bio">
					<div className="navitem bio"></div>
					<span>Biography</span>					
				</NavLink> */}
				<NavLink to="/disc">
					<div className="navitem navitem--disc audio-trigger audio--disc"></div>
					<span>Selected Discography</span>					
				</NavLink>
				<NavLink to="/stills">
					<div className="navitem navitem--studio audio-trigger audio--studio"></div>
					<span>Stills<br/></span>	
				</NavLink>
				<NavLink to="/biography">
					<div className="navitem navitem--services audio-trigger audio--services"></div>
					<span>Biography<br/></span>	
				</NavLink>
			</nav>
			<Mobile />
			<Footer />
		</>
  );
};
