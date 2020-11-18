import React, { useContext, useState } from 'react';
import { ExerciseContext } from '../contexts/ExerciseContext';
import { ACTIONS } from '../reducers/exerciseReducer';

const ExerciseForm = () => {
	const [name, setName] = useState('');
	const [duration, setDuration] = useState('');
	const { dispatch } = useContext(ExerciseContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: ACTIONS.CREATE_EXERCISE,
			exercise: {
				name,
				duration,
			},
		});
		setDuration('');
		setName('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Exercise Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<input
				type="number"
				placeholder="Exercise Duration"
				value={duration}
				onChange={(e) => setDuration(e.target.value)}
				required
			/>
			<input type="submit" value="Add Exercise" />
		</form>
	);
};

export default ExerciseForm;
