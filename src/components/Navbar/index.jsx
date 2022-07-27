import { Fragment } from "react";
import { Link } from "react-scroll";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const solutions = [
	{
		name: "Home",
		to: "home",
		duration: "400",
	},
	{
		name: "Eligibility",
		to: "eligibility",
		duration: "500",
	},
	{ name: "Timeline", to: "timeline", duration: "600" },
	{
		name: "Teams",
		to: "teams",
		duration: "700",
	},
	{
		name: "Gallery",
		to: "gallery",
		duration: "800",
	},
	{
		name: "Rules",
		to: "rules",
		duration: "900",
	},
	{
		name: "Contact",
		to: "contact",
		duration: "1000",
	},
];

const Header = () => {
	return (
		<Popover className="relative bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
				<div className="flex justify-between items-center border-0 py-3 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<div className="text-xl font-medium text-black hover:text-gray-900 list-none">
							MiNi HACKATHON 2022
						</div>
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
							<span className="sr-only">Open menu</span>
							<MenuIcon className="h-6 w-6" aria-hidden="true" />
						</Popover.Button>
					</div>
					<Popover.Group
						as="nav"
						className="hidden md:flex md:flex-row md:justify-end md:items-center space-x-7 md:space-x-3 "
					>
						<li className="lg:text-lg md:text-sm text-base font-medium text-black hover:text-gray-900 mt-1 list-none cursor-pointer">
							Home
						</li>
						<li className="lg:text-lg md:text-sm text-base md:ml-3 font-normal text-gray-500 hover:text-gray-900 mt-1 list-none cursor-pointer">
							<Link
								to="eligibility"
								spy={true}
								smooth={true}
								offset={10}
								duration={500}
								delay={100}
							>
								Eligibility
							</Link>
						</li>
						<li className="lg:text-lg md:text-sm text-base md:ml-3 font-normal text-gray-500 hover:text-gray-900 mt-1 list-none cursor-pointer">
							<Link
								to="timeline"
								spy={true}
								smooth={true}
								offset={-10}
								duration={600}
								delay={100}
							>
								Timeline
							</Link>
						</li>
						<li className="lg:text-lg md:text-sm text-base md:ml-3 font-normal text-gray-500 hover:text-gray-900 mt-1 list-none cursor-pointer">
							<Link
								to="teams"
								spy={true}
								smooth={true}
								offset={-10}
								duration={600}
								delay={100}
							>
								Teams
							</Link>
						</li>
						<li className="lg:text-lg md:text-sm text-base md:ml-3 font-normal text-gray-500 hover:text-gray-900 mt-1 list-none cursor-pointer">
							<Link
								to="gallery"
								spy={true}
								smooth={true}
								offset={30}
								duration={800}
								delay={100}
							>
								Gallery
							</Link>
						</li>
						<li className="lg:text-lg md:text-sm text-base md:ml-3 font-normal text-gray-500 hover:text-gray-900 mt-1 list-none cursor-pointer">
							<a
								href="https://bit.ly/minihack22Guideline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Rules
							</a>
						</li>
						<li className="lg:text-lg md:text-sm text-base md:ml-3 font-normal text-gray-500 hover:text-gray-900 mt-1 list-none cursor-pointer">
							<a
								href="https://www.facebook.com/msclubsliit"
								target="_blank"
								rel="noopener noreferrer"
							>
								Contact
							</a>
						</li>
						<li className="lg:text-lg md:text-sm ml-8 md:ml-3 cursor-pointer inline-flex items-center justify-center px-4 md:px-2 md:w-fit py-1 border-0 rounded font-normal text-white hover:text-black bg-black hover:bg-gray-200 transition duration-0 hover:duration-500">
							<a
								href="https://teams.microsoft.com/l/team/19%3asKeZlvZa7jFdXBP_ZmYQnyc-w70KXbrRugHyDumm2To1%40thread.tacv2/conversations?groupId=b6390614-7075-4334-afe7-ef873eeb4550&tenantId=44e3cf94-19c9-4e32-96c3-14f5bf01391a"
								target="_blank"
								rel="noopener noreferrer"
							>
								Join Teams
							</a>
						</li>
					</Popover.Group>
				</div>
			</div>

			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
				>
					<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
						<div className="pt-5 pb-6 px-5">
							<div className="flex items-center justify-between">
								<div className="-mr-2">
									<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
										<span className="sr-only">Close menu</span>
										<XIcon className="h-6 w-6" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-8">
									{solutions.map((item) => (
										<li
											key={item.name}
											to={item.to}
											duration={500}
											className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
										>
											<span className="ml-3 text-base font-medium text-gray-700 cursor-pointer">
												<Link
													to={item.to}
													spy={true}
													smooth={true}
													offset={50}
													duration={500}
													delay={100}
												>
													{item.name}
												</Link>
											</span>
										</li>
									))}
								</nav>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							<div>
								<a
									href="/"
									className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:text-black bg-black hover:bg-gray-200 transition duration-0 hover:duration-500"
								>
									Join Teams
								</a>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export default Header;
