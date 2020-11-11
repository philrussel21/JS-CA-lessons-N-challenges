import React from 'react';
import { Router } from '@reach/router';
import NavBar from './TwetterComponents/NavBar';
import Twoots from './TwetterComponents/Twoots';
import Twoot from './TwetterComponents/Twoot';
import AddTwoot from './TwetterComponents/AddTwoot';
import EditTwoot from './TwetterComponents/EditTwoot';

const Tweetter = () => {
	return (
		<div>
			<h1>Tweetter</h1>
			<NavBar />
			<Router primary={false}>
				<Twoots path="/" />
				<Twoot path="/:id" />
				<AddTwoot path="/new" />
				<EditTwoot path="/edit/:id" />
			</Router>
		</div>
	);
};

export default Tweetter;
