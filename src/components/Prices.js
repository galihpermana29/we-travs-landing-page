import React from 'react';
import styles from './Price.module.css';
import PriceType from './PriceType';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Prices = () => {
	return (
		<div className={styles.price}>
			<div className="container">
				<div className={styles.priceC}>
					<div className={styles.title}>
						<Fade left>
							<h1>Browse our price</h1>
							<p>
								We Travs serving more than 30 years and spread across 63
								countries. All transactions at We Travs are guaranteed
								safe
							</p>
						</Fade>
					</div>
					<div className={styles.type}>
						<Slide right>
							<PriceType type="Domestic" />
							<PriceType type="Local" />
							<PriceType type="Custom" />
						</Slide>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Prices;
