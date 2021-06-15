import React from 'react';
import styles from './ServicesSection.module.css';
import Fade from 'react-reveal/Fade';

const ServiceSection = ({ id, title, desc, img }) => {
	return (
		<div>
			<div className={id === '02' ? styles.section2 : styles.section}>
				<Fade>
					<img
						src={`${process.env.PUBLIC_URL}/assets/${img}.png`}
						alt={img}
					/>
				</Fade>
				<div>
					{id === '01' ? (
						<Fade right>
							<h1 className={styles.id}>{id}</h1>
							<h1 className={styles.title}>{title}</h1>
							<p className={styles.desc}>{desc}</p>
						</Fade>
					) : (
						<Fade left>
							<h1 className={styles.id}>{id}</h1>
							<h1 className={styles.title}>{title}</h1>
							<p className={styles.desc}>{desc}</p>
						</Fade>
					)}
				</div>
			</div>
		</div>
	);
};

export default ServiceSection;
