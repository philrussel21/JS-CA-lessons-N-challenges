import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import CookieGame from './CookieGame';
import { HappyMessage } from './HappyMessage';
import YellingGreeter from './YellingGreeter';

const App = () => {
	return (
		<div>
			<div>

				<HappyMessage />
			</div>
			<div>

				<Button />
			</div>
			<div>
				<YellingGreeter message="WHAT THE FFFF" />
			</div>
			<div>
				<CookieGame score="5" />
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
