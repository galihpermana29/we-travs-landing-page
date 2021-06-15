import React from 'react';
import Navbar from './Navbar';
import styles from './Jumbotron.module.css';
import TicketForm from './TicketForm';
import Fade from 'react-reveal/Fade';

const Jumbotron = () => {
	return (
		<div className={styles.landingJumbo}>
			<div className={styles.jumbotron}>
				<Navbar />
				<div className={`container ${styles.jumbotronText}`}>
					<Fade left>
						<h1 className={styles.jumbotronTitle}>
							Explore the world without worry about getting
							<span> lost</span>
						</h1>
					</Fade>
					<Fade right>
						<p className={styles.jumbotronP}>
							Life is short, and the world is weird
						</p>
					</Fade>
				</div>
			</div>
			<TicketForm />
		</div>
	);
};

export default Jumbotron;
