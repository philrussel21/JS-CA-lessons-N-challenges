import React, { useState } from 'react';
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
import Login from './Login';

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

			<Router>
				<Home path="/index" />
				<HappyMessage path="/happymessage" />
				<BuzzButton path="/button" />
				<YellingGreeter message="WHAT THE FFFF" path="/yell" />
				<CookieGame score="5" path="/cookie/:id" />
				<Login path="/login" eventHandler={handleSubmit} />
			</Router>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
