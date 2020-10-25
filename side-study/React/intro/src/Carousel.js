import React from 'react';

class Carousel extends React.Component {
	state = {
		photos: [],
		active: 0,
	};

	// getDerivedStateFromProps is a React method that has to be static. Takes a set of props, does some filtering on them
	// then passes them on to the component
	static getDerivedStateFromProps({ media }) {
		let photos = ['http://placecorgi.com/600/600'];

		if (media.length) {
			photos = media.map(({ large }) => large);
		}

		return { photos };
	}

	// when passing a function to an event listerner, use an arrow function to guarantee that 'this' keyword is referring to the component
	handleIndexClick = (e) => {
		this.setState({
			active: +e.target.dataset.index,
		});
	};
	render() {
		const { photos, active } = this.state;

		return (
			<div className="carousel">
				<img src={photos[active]} alt="animal" />
				<div className="carousel-smaller">
					{photos.map((photo, index) => (
						<img
							key={photo}
							onClick={this.handleIndexClick}
							data-index={index}
							src={photo}
							className={index === active ? 'active' : ''}
							alt="animal thumbnail"
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Carousel;
