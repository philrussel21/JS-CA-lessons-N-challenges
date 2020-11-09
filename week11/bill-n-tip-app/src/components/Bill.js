import React from 'react';

export default function Bill({ bill, handleChange }) {
	return (
		<div>
			<label htmlFor="bill">
				Bill:
				<input
					type="number"
					id="bill"
					onChange={handleChange}
					value={bill}
					min="0"
				/>
			</label>
		</div>
	);
}
