import React, { useState } from 'react';
import styles from './Review.module.css';
import Fade from 'react-reveal/Fade';

const Review = () => {
	let initial = {
		comment:
			'We Travens helps me organize all my writing projects. And that makes it an indispensable tool both in business and in life.',
		img: 'Tourist',
		active: true,
	};
	const [data, setData] = useState(initial);

	return (
		<div className={styles.review}>
			<div className="container">
				<Fade>
					<h1 className={styles.sectionTitle}>What they said</h1>
				</Fade>
				<div className={styles.cardC}>
					<Fade left>
						<div className={styles.cardReview}>{data.comment}</div>
					</Fade>

					<Fade right>
						<img
							src={`${process.env.PUBLIC_URL}/assets/${data.img}.png`}
							alt="Reviewer"
							className={styles.imgReviewer}
						/>
					</Fade>
				</div>
				<div className={styles.reviewChanger}>
					<p
						onClick={(e) => {
							setData({
								comment:
									'We Travens helps me organize all my writing projects. And that makes it an indispensable tool both in business and in life.',
								img: 'Tourist',
								active: true,
							});
						}}
					>
						Tourist
					</p>
					<p
						onClick={(e) => {
							setData({
								comment:
									'We Travens has revolutionized the way we run our small business by helping us simplify projects and coordinate tons of details.',
								img: 'Local',
							});
						}}
					>
						Local
					</p>
					<p
						onClick={(e) => {
							setData({
								comment:
									'We Travens has revolutionized the way we run our small.',
								img: 'Student',
							});
						}}
					>
						Student
					</p>
					<p
						onClick={(e) => {
							setData({
								comment:
									'We Travens has revolutionized the way we run our small business by helping us tons of details.',
								img: 'General',
							});
						}}
					>
						General
					</p>
				</div>
			</div>
		</div>
	);
};

export default Review;
