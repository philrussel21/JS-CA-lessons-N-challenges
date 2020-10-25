import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';

// old way of creating Components in React - using class constructor. In this way, Hooks (useState, useEffect) is not accessible.
class Details extends React.Component {
	// before babel configuration
	// constructor(props) {
	// 	super(props);
	state = { loading: true, name: '' };

	// 	// setting the default state, like useState('something') with hooks
	// 	this.state = {
	// 		loading: true,
	// 	};
	// }

	// componentDidMount is like useEffect but only ran once.
	componentDidMount() {
		// this.props are parameters that are coming from the parent class passed to it children classes.
		// They are coming in via parameters.
		pet.animal(this.props.id).then(({ animal }) => {
			// updating the state of the class
			this.setState({
				name: animal.name,
				animal: animal.type,
				location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
				description: animal.description,
				media: animal.photos,
				breed: animal.breeds.primary,
				loading: false,
			});
		}, console.error);
	}
	render() {
		if (this.state.loading) {
			return <h1>Loading ...</h1>;
		}

		const { animal, breed, location, description, name, media } = this.state;

		return (
			<div className="details">
				<Carousel media={media} />
				<div>
					<h1>{name}</h1>
					<h2>{`${animal} - ${breed} - ${location}`}</h2>
					<button>Adopt {name}</button>
					<p>{description}</p>
				</div>
			</div>
		);
	}
}

export default Details;
