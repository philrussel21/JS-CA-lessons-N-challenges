import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DeleteIcon from '@material-ui/icons/Delete';

function ToDoList({ user }) {
	const [todos, setTodos] = useState(['Do the dishes']);

	function handleSubmit(e) {
		e.preventDefault();
		const input = e.target.elements['todo'];
		const newTodo = input.value;
		setTodos((state) => [...state, newTodo]);
	}

	function handleDelete(e) {
		const target = e.target.name;
		const updatedTodos = todos.filter((todo) => todo !== target);
		setTodos(updatedTodos);
	}

	return (
		<div>
			<div>
				<Typography>TODO List</Typography>
				<Typography>{user ? user.email : 'Hello, User!'}</Typography>
			</div>
			<div>
				<form action="#" id="todo" onSubmit={handleSubmit}>
					<TextField name="todo" label="ToDo" />
					<Button variant="contained" color="primary" type="submit">
						<AddCircleIcon />
					</Button>
				</form>
				<List>
					<ListSubheader>TODOS</ListSubheader>
					{todos.map((todo, i) => (
						<ListItem key={i}>
							<ListItemText>{todo}</ListItemText>
							<Button
								variant="contained"
								name={todo}
								color="secondary"
								onClick={handleDelete}
							>
								<DeleteIcon name={todo} onClick={handleDelete} />
							</Button>
						</ListItem>
					))}
				</List>
			</div>
		</div>
	);
}

export default ToDoList;
