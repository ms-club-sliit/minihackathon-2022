import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assets/logo/mini_hackathon_logo.png";

const solutions = [
	{
		name: "Home",
		href: "#",
	},
	{
		name: "Eligibility",
		href: "#",
	},
	{ name: "Timeline", href: "#" },
	{
		name: "Teams",
		href: "#",
	},
	{
		name: "Gallery",
		href: "#",
	},
	{
		name: "Rules",
		href: "#",
	},
	{
		name: "Contact",
		href: "#",
	},
];

const Header = () => {
	return (
		<Popover className="relative bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<img src={logo} alt="mini hackathon logo" className="w-20" />
					</div>
					<div className="-mr-2 -my-2 md:hidden">
						<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
							<span className="sr-only">Open menu</span>
							<MenuIcon className="h-6 w-6" aria-hidden="true" />
						</Popover.Button>
					</div>
					<Popover.Group as="nav" className="hidden md:flex space-x-7">
						<span className="text-base cursor-pointer text-black hover:text-gray-900 mt-1">
							Home
						</span>
						<span className="text-base cursor-pointer text-gray-500 hover:text-gray-900 mt-1">
							Eligibility
						</span>
						<span className="text-base cursor-pointer text-gray-500 hover:text-gray-900 mt-1">
							Timeline
						</span>
						<span className="text-base cursor-pointer text-gray-500 hover:text-gray-900 mt-1">
							Teams
						</span>
						<span className="text-base cursor-pointer text-gray-500 hover:text-gray-900 mt-1">
							Gallery
						</span>
						<span className="text-base cursor-pointer text-gray-500 hover:text-gray-900 mt-1">
							Rules
						</span>
						<span className="text-base cursor-pointer text-gray-500 hover:text-gray-900 mt-1">
							Contact
						</span>
						<span className="ml-8 whitespace-nowrap cursor-pointer inline-flex items-center justify-center px-4 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:text-black bg-black hover:bg-gray-300">
							Join Teams
						</span>
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
										<a
											key={item.name}
											href={item.href}
											className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
										>
											<span className="ml-3 text-base font-medium text-gray-700">
												{item.name}
											</span>
										</a>
									))}
								</nav>
							</div>
						</div>
						<div className="py-6 px-5 space-y-6">
							<div>
								<a
									href="/"
									className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:text-black bg-black hover:bg-gray-200"
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
