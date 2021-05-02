import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<div className={styles.navbarWrapper}>
			<h1 className={styles.logo}>We Travs</h1>
			<div className={styles.links}>
				<a href="#">Home</a>
				<a href="#">Services</a>
				<a href="#">Pricing</a>
				<a href="#">Reviews</a>
			</div>
			<a href="#" className={styles.button}>
				Book Now
			</a>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="30"
				height="30"
				fill="#EF7878"
				class={`bi bi-list ${styles.hamburger}`}
				viewBox="0 0 16 16"
			>
				<path
					fill-rule="evenodd"
					d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
				/>
			</svg>
		</div>
	);
};

export default Navbar;