import React from 'react';

class CookieGame extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			score: +props.score,
		};
	}

	plusOne = () => {
		this.setState({ score: this.state.score + 1 });
	};

	minusOne = () => {
		this.setState({ score: this.state.score - 1 });
	};

	render() {
		const { score } = this.state;
		return (
			<div>
				<h2>Current Score: {score}</h2>
				<button onClick={this.plusOne}>Add</button>
				<button onClick={this.minusOne}>Minus</button>
			</div>
		);
	}
}

export default CookieGame;
