import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import { HappyMessage } from './HappyMessage';

const App = () => {
	return (
		<div>
			<HappyMessage />
			<Button />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
