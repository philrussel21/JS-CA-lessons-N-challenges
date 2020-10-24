import React from 'react';

// the props are destructured for easier access
export default function Pet({ name, animal, breed }) {
	// create Element accepts three params,
	// first being the html tag accepted as a string, or another component
	// second is the tag's attributes (id, class, style)
	// third is the child. could be another component or just plain string.
	// in this example, the div is created and three children can be made passed as an array,
	// they don't necessarily needed to be passed as an array since every arg passed after the second would be treated
	// as a child element.

	// return React.createElement("div", {}, [
	//   React.createElement('h1', {}, name),
	//   React.createElement('h2', {}, animal),
	//   React.createElement('h2', {}, breed)
	// ]);

	// to enable emmet while using JSX, change the language type down the bottom from Javascript to Javascript React
	// JSX Way with the help of Parcel and Babel which under the hood is completely the same as above

	// JS variables and expressions has to be wrapped in {} to let JSX know
	return (
		<div>
			<h1>Name: {name.toUpperCase()}</h1>
			<h2>Animal: {animal}</h2>
			<h2>Breed: {breed + animal}</h2>
		</div>
	);
}
