import React from 'react';

class CookieGame extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			score: +props.score,
			id: props.id,
		};
	}

	plusOne = () => {
		this.setState({ score: this.state.score + 1 });
	};

	minusOne = () => {
		this.setState({ score: this.state.score - 1 });
	};

	render() {
		const { score, id } = this.state;
		return (
			<div>
				<h2>Current Score: {score}</h2>
				<h3>ID: {id}</h3>
				<button onClick={this.plusOne}>Add</button>
				<button onClick={this.minusOne}>Minus</button>
			</div>
		);
	}
}

export default CookieGame;
