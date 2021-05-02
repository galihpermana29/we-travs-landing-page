import React from 'react';
import styles from './Footer.module.css';
const Footer = () => {
	return (
		<>
			<div className={styles.footer}>
				<div className={`${styles.footerC} container`}>
					<div className={styles.footerCard}>
						<h1 className={styles.title}>We Trav</h1>
						<p className={styles.content}>
							We Travens helps me organize all my writing projects. And
							that makes it an indispensable tool both in business and in
							life.
						</p>
					</div>
					<div className={styles.footerCard}>
						<h1 className={styles.title}>Legal</h1>
						<p className={styles.content}>Terms & Conditions</p>
					</div>
					<div className={styles.footerCard}>
						<h1 className={styles.title}>Resource</h1>
						<a href="#">Contact</a>
						<a href="#">Credits</a>
					</div>
					<div className={styles.footerCard}>
						<h1 className={styles.title}>Newsletter</h1>
						<p className={styles.content}>
							Looking forward to subscribe our email!
						</p>
					</div>
				</div>
			</div>
			<div className={styles.copyRight}>Copyright all reserved</div>
		</>
	);
};

export default Footer;
