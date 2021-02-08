//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import { Navbar } from "./component/Navbar.js";
import { Jumbotron } from "./component/Jumbotron.js";
import { Card1 } from "./component/Card1.js";
import { Card2 } from "./component/Card2.js";
import { Card3 } from "./component/Card3.js";
import { Card4 } from "./component/Card4.js";
import { Footer } from "./component/Footer.js";

//render your react application
ReactDOM.render(
	<div id="navbarJumboCardsAndFooter">
		<div>
			<Navbar />
		</div>
		<div id="jumboAndCards">
			<div>
				<Jumbotron />
			</div>
			<div id="cardContainer">
				<div>
					<Card1 />
				</div>
				<div>
					<Card2 />
				</div>
				<div>
					<Card3 />
				</div>
				<div>
					<Card4 />
				</div>
			</div>
		</div>
		<div>
			<Footer />
		</div>
	</div>,
	document.querySelector("#app")
);
