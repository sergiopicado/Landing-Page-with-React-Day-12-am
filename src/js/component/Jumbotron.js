import React from "react";
export function Jumbotron() {
	return (
		<div className="soloJumbo jumbotron">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, quis nostrud exercitation ullamco laboris
				nisi ut aliquip ex ea commodo consequat.
			</p>
			<a
				className="callToActionButton btn btn-primary btn-lg"
				href="#"
				role="button">
				Call to action!
			</a>
		</div>
	);
}
