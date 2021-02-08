import React from "react";
export function Card2() {
	return (
		<div className="card singleCard">
			<img
				src="data:image/jpeg;base64,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"
				className="card-img-top"
				alt="..."></img>
			<div className="card-body">
				<h5 className="card-title">Climbing</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
}