import React from "react";

export default function EmailTemplate({ image }) {
	return (
		<div>
			<h1>
				You are now registered to the Mini Hackathon awareness session 2022!
			</h1>
			<div>
				<img src={image} alt="Your Ticket"></img>
			</div>
			<div>
				Click <a href={image}>here</a> to checkout your ticket
			</div>
		</div>
	);
}
