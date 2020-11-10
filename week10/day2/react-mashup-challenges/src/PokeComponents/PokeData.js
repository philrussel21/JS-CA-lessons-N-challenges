import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

function PokeData({ pokename }) {
	const [pokeName, setPokeName] = useState(null);
	const [pokeSprite, setPokeSprite] = useState(null);
	const [pokeTypes, setPokeTypes] = useState(null);
	const pokeApi = 'https://pokeapi.co/api/v2/pokemon/';

	useEffect(() => {
		fetch(pokeApi + pokename)
			.then((res) => res.json())
			.then(({ name, sprites, types }) => {
				setPokeName(name);
				setPokeSprite(sprites.front_default);
				if (types.length > 1) {
					const pokeTypes = types.map((t) => t.type.name);
					setPokeTypes(pokeTypes);
				} else {
					setPokeTypes(new Array(types[0].type.name));
				}
			})
			.catch((e) => e);
	}, [pokename]);

	const useStyles = makeStyles({
		root: {
			display: 'flex',
			width: 400,
			height: 150,
			margin: 'auto',
		},
		cover: {
			width: 151,
		},
		content: {
			flex: '1 0 auto',
		},
	});

	const classes = useStyles();

	const types =
		pokeTypes &&
		pokeTypes.map((t, i) => (
			<Typography variant="subtitle1" color="textSecondary" key={i}>
				{t}
			</Typography>
		));

	return (
		<div>
			{pokeName && pokeSprite ? (
				<div>
					<Typography> Pokemon Result </Typography>
					<Card className={classes.root}>
						<CardContent className={classes.content}>
							<Typography component="h5" variant="h5">
								{pokeName}
							</Typography>
							{pokeTypes && types}
						</CardContent>
						<CardMedia
							className={classes.cover}
							image={pokeSprite}
							title="Live from space album cover"
						/>
					</Card>
				</div>
			) : (
				<Typography>Invalid Pokemon Name</Typography>
			)}
		</div>
	);
}

export default PokeData;
