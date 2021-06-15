import React from 'react';
import { data } from '../serviceData';
import ServiceSection from './ServiceSection';
import styles from './ServicesSection.module.css';


const Services = () => {
	return (
		<div className={`container ${styles.services}`}>
			{data.services.map(({ id, title, desc, img }) => {
				return (
					<ServiceSection key={id} id={id} title={title} desc={desc} img={img} />
				);
			})}
		</div>
	);
};

export default Services;
