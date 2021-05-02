import React from 'react';
import Navbar from './Navbar';
import styles from './Jumbotron.module.css';
import TicketForm from './TicketForm';

const Jumbotron = () => {
	return (
		<div className={styles.landingJumbo}>
			<div className={styles.jumbotron}>
				<Navbar />
				<div className={`container ${styles.jumbotronText}`}>
					<h1 className={styles.jumbotronTitle}>
						Explore the world without worry about getting
						<span> lost</span>
					</h1>
					<p className={styles.jumbotronP}>
						Life is short, and the world is weird
					</p>
				</div>
			</div>
			<TicketForm />
		</div>
	);
};

export default Jumbotron;
