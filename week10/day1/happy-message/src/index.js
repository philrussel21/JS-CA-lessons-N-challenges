import React from 'react';
import ReactDOM from 'react-dom';

const msgs = ['Happy', 'Sad', 'Angry', 'Okay', 'Disappointed'];

function randomMsg(arr) {
	const randNum = Math.floor(Math.random() * arr.length);
	return arr[randNum];
}

const HappyMessage = () => {
	return (
		<div>
			<h1>I am {randomMsg(msgs)}</h1>
		</div>
	);
};

const App = () => {
	return <HappyMessage />;
};

ReactDOM.render(<App />, document.getElementById('root'));
