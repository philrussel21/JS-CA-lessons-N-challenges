import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { navigate } from '@reach/router';

function PokeHome() {
	const handlePokeQ = (e) => {
		e.preventDefault();
		const input = e.target.elements['pokename'];
		const pokeQ = input.value;
		navigate(`/pokemon/${pokeQ}`);
	};

	return (
		<div>
			<h1>Pokemon Viewer</h1>
			<form action="#" onSubmit={handlePokeQ}>
				<TextField
					id="filled-basic"
					label="Find Pokemon"
					name="pokename"
					variant="filled"
				/>
				<br />
				<Button variant="contained" color="secondary" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
}

export default PokeHome;
