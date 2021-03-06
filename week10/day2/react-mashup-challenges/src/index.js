import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, navigate } from '@reach/router';
import Home from './Home';
import BuzzButton from './BuzzButton';
import CookieGame from './CookieGame';
import { HappyMessage } from './HappyMessage';
import YellingGreeter from './YellingGreeter';
import Auth from './Auth';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LaptopChromebook from '@material-ui/icons/LaptopChromebook';
import Paper from '@material-ui/core/Paper';
import Login from './Login';
import MovieList from './MovieList';
import DynamicForm from './DynamicForm';
import ToDoList from './components/ToDoList';
import Example from './components/Example';
import PokeHome from './PokeComponents/PokeHome';
import PokeData from './PokeComponents/PokeData';
import DarkModeToggle from './components/DarkModeToggle';
import './index.css';
import jokes from './data/jokes.json';
import Tweetter from './components/Tweetter';
import Twoots from './components/TwetterComponents/Twoots';
import Twoot from './components/TwetterComponents/Twoot';
import AddTwoot from './components/TwetterComponents/AddTwoot';
import EditTwoot from './components/TwetterComponents/EditTwoot';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));



const App = () => {
	const [user, setUser] = useState(null);
	const [isLoggedIn, setLogIn] = useState(false);
	const [allJokes, setJokes] = useState(null);


	const classes = useStyles();

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;
		setUser({
			email: email,
			password: password
		});
		setLogIn(true);
		navigate('/index');

	};

	const handleLogout = () => {
		setUser({
			email: null,
			password: null
		});
		setLogIn(false);
		navigate('/index');
	};


	const getJokefromId = (id) => {
		return allJokes.find((j) => j.id === +id);
	};

	useEffect(() => {
		setJokes(jokes);
	}, []);

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<Link to="/index">

							<LaptopChromebook />
						</Link>

					</IconButton>
					<Typography variant="h6" className={classes.title}>

						Mashup

					</Typography>
					{isLoggedIn &&
						<Button color="inherit">
							{user.email}
						</Button>
					}
					<Auth isLoggedIn={isLoggedIn} logoutCB={handleLogout} user={user} />
					<DarkModeToggle />
				</Toolbar>
			</AppBar>

			<Link to="/happymessage">
				<Button variant="contained" >Happy Message</Button>

			</Link>
			<Link to="/button">
				<Button variant="contained">Buzzy Button</Button>

			</Link>

			<Link to="/yell">
				<Button variant="contained">Yelling Greeter</Button>

			</Link>

			<Link to="/cookie/UserIdNumbahOne">
				<Button variant="contained">Cookie Game</Button>
			</Link>

			<Link to="/movies">
				<Button variant="contained">Movie List</Button>
			</Link>

			<Link to="/dynamic-form">
				<Button variant="contained">Dynamic Form</Button>
			</Link>

			<Link to="/todo-list">
				<Button variant="contained">Todo-List</Button>
			</Link>

			<Link to="/example">
				<Button variant="contained">Example</Button>
			</Link>
			<Link to="/pokemon">
				<Button variant="contained" color="secondary">Pokemon</Button>
			</Link>
			<Link to="/tweetter">
				<Button variant="contained" color="primary">Tweetter</Button>
			</Link>

			<Paper elevation={3}>

				<Router>
					<Home path="/index" />
					<HappyMessage path="/happymessage" />
					<BuzzButton path="/button" />
					<YellingGreeter message="WHAT THE FFFF" path="/yell" />
					<CookieGame score="5" path="/cookie/:id" />
					<Login path="/login" eventHandler={handleSubmit} />
					<MovieList path="/movies" />
					<DynamicForm path="/dynamic-form" />
					<ToDoList path="/todo-list" user={user} />
					<Example path="/example" />
					<PokeHome path="/pokemon" />
					<PokeData path="/pokemon/:pokename" />
					<Tweetter path="/tweetter" getJokefromId={getJokefromId}>
						<Twoots path="/" allJokes={allJokes} getJokefromId={getJokefromId} />
						<Twoot path="/:id" singJoke={null} allJokes={allJokes} getJokefromId={getJokefromId} />
						<AddTwoot path="/new" />
						<EditTwoot path="/edit/:id" />
					</Tweetter>
				</Router>
			</Paper>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
