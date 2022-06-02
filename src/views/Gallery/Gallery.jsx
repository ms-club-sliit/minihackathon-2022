import React from "react";
import Carousel from "react-elastic-carousel";
import IMG1 from "../../asserts/img1.webp";
import IMG2 from "../../asserts/img2.webp";
import IMG3 from "../../asserts/img3.webp";
import IMG4 from "../../asserts/img4.webp";
import IMG5 from "../../asserts/img5.webp";
import IMG6 from "../../asserts/img6.webp";
import IMG7 from "../../asserts/img7.webp";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
]
function Gallery() {
	return (
		<div>
			<h1 className="text-3xl text-center mb-5 font-bold">Gallery</h1>
			<div className="w-screen h-full px-10 flex justify-center items-center">
				<Carousel breakPoints={breakPoints}>
					<img src={IMG1} alt="" className="mr-10" />
					<img src={IMG2} alt="" className="mr-10"/>
					<img src={IMG3} alt="" className="mr-10"/>
					<img src={IMG4} alt="" className="mr-10"/>
					<img src={IMG5} alt="" className="mr-10"/>
					<img src={IMG6} alt="" className="mr-10"/>
					<img src={IMG7} alt="" className="mr-10"/>
				</Carousel>
			</div>
		</div>
	);
}

export default Gallery;
