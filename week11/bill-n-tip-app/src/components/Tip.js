import React from 'react';

export default function Tip({ handleChange, tip }) {
	return (
		<div>
			<label htmlFor="tip">
				Tip Rate:
				<input
					type="number"
					id="tip"
					value={tip}
					min="1"
					onChange={handleChange}
				/>
			</label>
		</div>
	);
}
