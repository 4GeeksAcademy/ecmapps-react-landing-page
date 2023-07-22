import React from "react";
import Navbar from "./navbar";
import Carousel from "./carousel";
import Cards from "./cards";
import Footer from "./footer";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return <div>
				<Navbar />
				<div className="container-fluid">
					<Carousel />
					<Cards />
				</div>
				<Footer />
		</div>
};

export default Home;
