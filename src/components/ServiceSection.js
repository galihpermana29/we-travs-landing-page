import React from 'react';
import styles from './ServicesSection.module.css';


const ServiceSection = ({ id, title, desc, img }) => {
	return (
		<div>
			<div className={ id === '02'? styles.section2 : styles.section}>
				<img
					src={`${process.env.PUBLIC_URL}/assets/${img}.png`}
					alt={img}
				/>
				<div>
					<h1 className={styles.id}>{id}</h1>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.desc}>{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default ServiceSection;
