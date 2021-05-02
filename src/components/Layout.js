import React from 'react';
import Jumbotron from './Jumbotron';
import Services from './Services';
import Prices from './Prices';
import Review from './Review';
import About from './About';
import Footer from './Footer';

const Layout = () => {
	return (
		<div>
			<div id="home">
				<Jumbotron />
			</div>
			<div id="services">
				<Services />
			</div>
			<div id="prices">
				<Prices id="prices" />
			</div>
			<div id="reviews">
				<Review id="reviews" />
			</div>
			<About />
			<Footer />
		</div>
	);
};

export default Layout;
