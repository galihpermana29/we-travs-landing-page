import React from 'react';
import styles from './About.module.css';
const About = () => {
	return (
		<div className="container">
			<div className={styles.about}>
				<h1 className={styles.by}>-We Travs</h1>
				<h1 className={styles.quote}>Life is either a daring adventure or nothing at all</h1>
			</div>
		</div>
	);
};

export default About;
