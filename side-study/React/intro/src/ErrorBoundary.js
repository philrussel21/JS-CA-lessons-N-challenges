// mostly code from reactjs.org/docs/error-boundaries.html
// used to catch error happening in components to avoid the whole crashing of the app

import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
	state = { hasError: false, redirect: false };
	static getDerivedStateFromError() {
		return {
			hasError: true,
		};
	}
	componentDidCatch(error, info) {
		console.error('ErrorBoundary caught an error', error, info);
	}
	componentDidUpdate() {
		if (this.state.hasError) {
			setTimeout(() => this.setState({ redirect: true }), 5000);
		}
	}
	render() {
		if (this.state.redirect) {
			// Redirect is a component from reach/router that handles redirects
			return <Redirect to="/" />;
		}
		if (this.state.hasError) {
			return (
				<h1>
					There was an error with this listing.
					<Link to="/">Click Here</Link> to go back to the home page or wait
					five seconds.
				</h1>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
