import React from "react";

const NavBar = () => {
	return (<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark bg-gradient">
  		<div className="container-fluid">
			<a className="navbar-brand text-light" href="#">Start Bootstrap</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-link active text-light" aria-current="page" href="#">Home</a>
					<a className="nav-link text-white-50" href="#">About</a>
					<a className="nav-link text-white-50" href="#">Services</a>
					<a className="nav-link text-white-50" href="#" tabindex="-1" aria-disabled="true">Contact</a>
				</div>
			</div>
 		 </div>
	</nav>);
};

export {NavBar};