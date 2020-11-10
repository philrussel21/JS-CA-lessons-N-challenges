import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Example() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<Typography>You clicked {count} times</Typography>
			<Button
				variant="contained"
				color="primary"
				onClick={() => setCount(count + 1)}
			>
				Click Me!
			</Button>
		</div>
	);
}

export default Example;
