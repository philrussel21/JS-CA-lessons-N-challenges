import React from 'react';
import NavBar from './TwetterComponents/NavBar';

const Tweetter = (props) => {
	return (
		<div>
			<h1>Tweetter</h1>
			<NavBar />
			<div>{props.children}</div>
		</div>
	);
};

export default Tweetter;
