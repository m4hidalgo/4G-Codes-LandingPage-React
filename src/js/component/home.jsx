import React from "react";
import { NavBar } from "./NavBar.jsx";
import { Jumbo } from "./Jumbotron.jsx";
import {Card} from "./Card.jsx";
import { Footer } from "./Footer.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (<div className="container-fluid p-0">
		<NavBar />
		<div className="container p-3">
			<Jumbo />
			<div className="row">
				<Card />
				<Card />
				<Card />
				<Card />

			</div>

			<div className="row">
				<Card />
				<Card />
				<Card />
				<Card />

			</div>
			
		</div>
		<Footer />
	</div>
	);
};

export default Home;



