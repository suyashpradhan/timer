/** @format */

import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
	const [timeLeft, setTimeLeft] = useState('');

	useEffect(() => {
		// Update the countdown timer every second
		const interval = setInterval(() => {
			const targetDate = new Date('2023-11-27T02:00:00');
			const currentDate = new Date();
			const difference = targetDate - currentDate;

			if (difference > 0) {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24));
				const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
				const minutes = Math.floor((difference / 1000 / 60) % 60);
				const seconds = Math.floor((difference / 1000) % 60);

				setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
			} else {
				clearInterval(interval);
				setTimeLeft('Time is up!');
			}
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<div className='heart'></div>
			<div className='heart'></div>
			<div className='heart'></div>
			<div className='heart'></div>
			<div className='heart'></div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					height: '100vh',
					padding: ' 0 16px',
				}}>
				<h1 style={{ fontSize: '200px', marginBottom: '10px' }}>{timeLeft}...</h1>
				<h1 style={{ fontSize: '44px', color: 'red' }}>
					"Every second brings us closer together. Can't wait to be with you!"
				</h1>
			</div>
		</>
	);
};

export default CountdownTimer;
