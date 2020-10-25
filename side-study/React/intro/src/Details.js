import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import ThemeContext from './ThemeContext';
import { navigate } from '@reach/router';
import Modal from './Modal';

// old way of creating Components in React - using class constructor. In this way, Hooks (useState, useEffect) is not accessible.
// Error boundaries are only allowed using the class components.
class Details extends React.Component {
	// before babel configuration
	// constructor(props) {
	// 	super(props);
	state = { loading: true, showModal: false };

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
				url: animal.url,
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
	// new with Modal Portal
	toggleModal = () => this.setState({ showModal: !this.state.showModal });
	adopt = () => navigate(this.state.url);

	render() {
		if (this.state.loading) {
			return <h1>Loading ...</h1>;
		}

		const {
			animal,
			breed,
			location,
			description,
			name,
			media,
			showModal,
		} = this.state;

		return (
			<div className="details">
				<Carousel media={media} />
				<div>
					<h1>{name}</h1>
					<h2>{`${animal} - ${breed} - ${location}`}</h2>
					{/* using context on class components */}
					<ThemeContext.Consumer>
						{([theme]) => (
							<button
								onClick={this.toggleModal}
								style={{ backgroundColor: theme }}
							>
								Adopt {name}
							</button>
						)}
					</ThemeContext.Consumer>
					<p>{description}</p>
					{showModal ? (
						<Modal>
							<div>
								<h1>Would you like to adopt {name}?</h1>
								<div className="buttons">
									<button onClick={this.adopt}>Yes</button>
									<button onClick={this.toggleModal}>No</button>
								</div>
							</div>
						</Modal>
					) : null}
				</div>
			</div>
		);
	}
}

export default function DetailsWithErrorBoundary(props) {
	return (
		<ErrorBoundary>
			{/* {...props} would spread the props to Details component */}
			<Details {...props} />
		</ErrorBoundary>
	);
}
