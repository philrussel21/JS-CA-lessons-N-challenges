import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router } from '@reach/router';
import Button from './Button';
import CookieGame from './CookieGame';
import { HappyMessage } from './HappyMessage';
import YellingGreeter from './YellingGreeter';

const App = () => {
	return (
		<div>
			<h1> MASHUP</h1>
			<Link to="/happymessage">
				Happy Message
			</Link>
			<br />
			<Link to="/button">
				Buzzy Button
			</Link>
			<br />

			<Link to="/yell">
				Yelling Greeter
			</Link>
			<br />

			<Link to="/cookie/UserIdNumbahOne">
				Cookie Game
			</Link>
			<br />

			<Router>
				<HappyMessage path="/happymessage" />
				<Button path="/button" />
				<YellingGreeter message="WHAT THE FFFF" path="/yell" />
				<CookieGame score="5" path="/cookie/:id" />
			</Router>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
