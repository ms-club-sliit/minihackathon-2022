import React from "react";

export default function EmailTemplate({ image }) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				flexDirection: "column",
				width: "100%",
				textAlign: "center",
			}}
		>
			<h1>You are now registered to the Mini Hackathon 2022!</h1>
			<div>
				<img src={image} alt="Your Ticket"></img>
			</div>
			<div>
				Click here to checkout your ticket <a href={image}>here</a>
			</div>
		</div>
	);
}
