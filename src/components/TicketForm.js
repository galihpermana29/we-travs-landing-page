import React from 'react';
import { Select } from '@chakra-ui/react';
import styles from './Ticket.module.css';
import { Input } from "@chakra-ui/react"

const TicketForm = () => {
	return (
		<div className="container">
			<div className={styles.ticketForm}>
				<div className={styles.formCard}>
					<div className={styles.header}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="#EF7878"
							class="bi bi-geo-alt-fill"
							viewBox="0 0 16 16"
						>
							<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
						</svg>
						<p>PLACE</p>
					</div>
					<div className="section">
						<form action="">
							<Select placeholder="Country" variant="unstyled">
								<option value="option1">Indonesia</option>
								<option value="option2">USA</option>
								<option value="option3">England</option>
							</Select>
						</form>
					</div>
				</div>
				<div className={styles.formCard}>
					<div className={styles.header}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="#EF7878"
							class="bi bi-geo-alt-fill"
							viewBox="0 0 16 16"
						>
							<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
						</svg>
						<p>ARRIVAL</p>
					</div>
					<div className="section">
						<form action="">
                  <Input variant="unstyled" placeholder="Unstyled" type="date"/>
						</form>
					</div>
				</div>
				<div className={styles.formCard}>
					<div className={styles.header}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="#EF7878"
							class="bi bi-geo-alt-fill"
							viewBox="0 0 16 16"
						>
							<path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
						</svg>
						<p>DEPARTURE</p>
					</div>
					<div className="section">
						<form action="">
                  <Input variant="unstyled" placeholder="Unstyled" type="date"/>
						</form>
					</div>
				</div>
            <a href="#" className={styles.button}>Check It!</a>
			</div>
		</div>
	);
};

export default TicketForm;
