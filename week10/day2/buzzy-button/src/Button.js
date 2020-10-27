import React, { Component } from 'react';

class Button extends Component {
	// constructor(props) {
	// 	super(props);
	// }

	handleClick() {
		window.navigator.vibrate(200);
		console.log(typeof window.navigator.vibrate);
	}

	render() {
		return <button onClick={this.handleClick}>Buzz!</button>;
		// return <button onClick={() => navigator.vibrate(1000)}>Buzz!</button>;
	}
}

export default Button;
