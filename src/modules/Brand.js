import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Brand() {
	 
	return (
		<div className="header-brand">
			<h1 className="brand">
				<NavLink to="/">Mathias Schneeberger</NavLink>
			</h1>
			<h2>Producer | Engineer | Composer</h2>
		</div>
  );
};
