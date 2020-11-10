import React from 'react';

class DynamicForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { inputs: 1 };
	}

	handleChange = (e) => {
		this.setState({
			p1: e.target.value,
		});
	};

	handleAdd = () => { };

	render() {
		const { inputs } = this.state;
		for (let i = 0; i < inputs; i++) { }
		return (
			<div>
				<h1>Dynamic Form</h1>
				<button onClick={this.handleAdd}>Add another field</button>
				<div>
					<input
						type="text"
						onChange={this.handleChange}
						placeholder="type here"
					/>
					<input type="text" value={this.state.p1} name="p1" />
				</div>
			</div>
		);
	}
}

export default DynamicForm;
