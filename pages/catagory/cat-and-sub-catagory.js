import Link from 'next/link'
import SubCatagory from './sub-catagory.js'
import FetureBrand from './feture-brand.js'
import PriceRange from './price-range.js'

export default function CatagoryAndSubCatagory(){
	return(<>
		<div id="minimize" className="col-span-1">
			<div className="mb-2">
				<div className="flex justify-center items-center">
					<h1 className="font-semibold text-gray-500 mr-2">
						Catagory
					</h1>
					<hr className="w-full bg-green-500"/>
					<button type="button" className="focus:outline-none text-xl focus:ring-0 p-1 text-center collapse-tabs text-gray-500" data-target="#cat">
						<i className="fa fa-angle-up"></i>
					</button>
					<button type="button" className="focus:outline-none focus:ring-0 p-1 text-center minimize-tabs text-gray-500" data-minimize="#minimize" data-maximize="#maximize" data-maxdata-toggle="#maxdata">
						<i className="fa fa-window-minimize"></i>
					</button>
					<button type="button" className="focus:outline-none focus:ring-0 p-1 text-center maximize-tabs text-gray-500" data-minimize="#minimize" data-maximize="#maximize" data-maxdata-toggle="#maxdata">
						<i className="fa fa-window-maximize"></i>
					</button>
				</div>
			</div>
			<div id="cat" className="bg-gray-100 lg:hidden md:hidden sm:block xs:block border rounded p-2">
				{/*department*/}
				<div className="bg-white p-2 border rounded mb-2">
					<div>
						<h1 className="text-xl font-semibold">Department</h1>
						<hr className="mt-2 mb-2"/>
						<div className="flex justify-center items-center">
							<Link href="/catagory/women">
								<a className="font-semibold text-green-500 text-xl flex justify-center items-center">
									<i className="fa fa-angle-double-left mr-1 text-red-400"></i>
									<span>Women</span>
								</a>
							</Link>
							<hr className="w-full bg-green-500"/>
							<i className="fa fa-angle-down ml-1 text-green-500"></i>
						</div>
						<div className="p-4 pt-0">
							<div className="flex justify-center items-center">
								<Link href="/">
									<a className="text-green-500 font-semibold">
										<span className="mr-2">T-shirt</span>
									</a>
								</Link>
								<hr className="w-full"/>
								<i className="fa fa-angle-down ml-1 text-green-500"></i>
							</div>
							<ul className="pl-4 strip-list">
								<li >
									<Link href="/">
										<a className="block p-1">T-shirt 1</a>
									</Link>
								</li>
								<li >
									<Link href="/">
										<a className="block p-1">T-shirt 2</a>
									</Link>
								</li>
								<li >
									<Link href="/">
										<a className="block p-1">T-shirt 3</a>
									</Link>
								</li>
								<li >
									<Link href="/">
										<a className="block p-1">T-shirt 4</a>
									</Link>
								</li>
							</ul>
						</div>
						{/*sub-catagory*/}
						<SubCatagory/>
					</div>
				</div>
				{/*feture brand*/}
				<FetureBrand/>
				{/*feture brand*/}
				<PriceRange/>
			</div>
		</div>
	</>)
}