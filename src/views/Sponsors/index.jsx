import React from "react";
import CompanyLogo1 from "../../assets/sponsors/company_logo.webp";

const Sponsers = () => {
	return (
		<div id="sponsers" className="lg:px-20">
			<h1 className="text-4xl md:text-5xl text-center my-10 font-bold">
				Official Sponsers
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
				<div className="flex justify-center">
					<a href="https://msclubsliit.org/" className="mb-4 sm:mb-0">
						<img src={CompanyLogo1} className="h-40" alt="MS Club Of SLIIT" />
					</a>
				</div>

				<div className="flex justify-center">
					<a href="https://msclubsliit.org/" className="mb-4 sm:mb-0">
						<img src={CompanyLogo1} className="h-40" alt="MS Club Of SLIIT" />
					</a>
				</div>

				<div className="flex justify-center">
					<a href="https://msclubsliit.org/" className="mb-4 sm:mb-0">
						<img src={CompanyLogo1} className="h-40" alt="MS Club Of SLIIT" />
					</a>
				</div>

				<div className="flex justify-center">
					<a href="https://msclubsliit.org/" className="mb-4 sm:mb-0">
						<img src={CompanyLogo1} className="h-40" alt="MS Club Of SLIIT" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Sponsers;
