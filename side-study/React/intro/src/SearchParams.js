import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

// variables and methods that start with 'use' are called hooks. Stateful logics are done using React hooks.
//!IMPORTANT: Hooks should never be put in conditionals and loops to not mess with the React logic sequence
const SearchParams = () => {
	// useState is a method from the React library that has an array. the first being the variable used as storage for the current state
	// and the second being the function to use for updating the state. In the example below, useState('stringHere') is used to
	// set the default value of location. To change the value of the variable, setLocation has to be called and passed the replacement
	// value as can be seen down further.
	const [location, setLocation] = useState('Brisbane, QLD');

	// replaced with customHooks created named useDropdown
	// const [animal, setAnimal] = useState('dog');
	// const [breed, setBreed] = useState('husky');

	// from customHook useDropdown
	const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
	const [breed, BreedDropdown] = useDropdown('Breed', '', []);
	// const [breeds, setBreeds] = useState([]);

	// since class and for are a reserved keywords in JS, React has a work around it by calling them
	// className and htmlFor respectively, like so:
	return (
		<div className="search-params">
			<form>
				<label htmlFor="location">
					Location
					<input
						id="location"
						value={location}
						placeholder="Location"
						onChange={(e) => setLocation(e.target.value)}
					/>
				</label>

				{/* Replaced with customHooks */}
				{/* <label htmlFor="animal">
					Animal
					<select
						id="animal"
						vallue={animal}
						onChange={(e) => setAnimal(e.target.value)}
						onBlur={(e) => setAnimal(e.target.value)}
					>
						<option>All</option>
						{ANIMALS.map((animal) => {
							// Key is a unique attribute identifier to improve performance since React render rerenders every change but with keys,
							// if nothing change it would save a lot of time.
							return (
								<option key={animal} value={animal}>
									{animal}
								</option>
							);
						})}
					</select>
				</label> */}

				{/* <label htmlFor="breed">
					Breed
					<select
						id="breed"
						value={breed}
						onChange={(e) => setBreed(e.target.value)}
						onBlur={(e) => setBreed(e.target.value)}
						disabled={breeds.length === 0}
					>
						<option value="All">All</option>
						{breeds.map((b) => {
							return (
								<option value={b} key={b}>
									{b}
								</option>
							);
						})}
					</select>
				</label> */}

				{/* customHooks */}
				<AnimalDropdown />
				<BreedDropdown />

				<button>Submit</button>
			</form>
		</div>
	);
};

export default SearchParams;
