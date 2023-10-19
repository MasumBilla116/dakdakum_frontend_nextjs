import Image from 'next/image'
import Link from 'next/link'

export default function CardItem(){
	return(<>
		<div className="ml-2 mr-2">
			<div className="bg-gray-100 text-center p-2 w-full rounded-tl rounded-tr mb-1">
				<h1 className="text-center text-xl text-green-600 font-bold">Your Card Items<mark className="bg-transparent text-red-500">(1)</mark></h1>
			</div>
			<div className="lg:block md:hidden sm:hidden xs:hidden w-full max-w-full">
				<table className="table w-full border mx-auto">
					<thead>
						<tr className="bg-gray-50">
							<th>Product</th>
							<th>Price</th>
							<th>Quantity</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody className="">
						<tr className="border">
							<td>
								<div className="">
									<div className="mr-2 float-left ">
										<Image width="80" height="100" src="/images/product/img-12.webp"/>
										<input type="hidden" name="product" value="" onChange={e=>{}}/>
									</div>
									<div>
										<Link href="#">
											<a className="text-indigo-500 hover:underline hover:text-indigo-700">East Hampton Fleece Hoodie</a>
										</Link>
										<h1>Color : Green T-shirt</h1>
									</div>
								</div>
							</td>
							<td >
								<div className="flex justify-center items-center">
									<h1>1*580 Tk = 580 Tk</h1>
								</div>
							</td>
							<td>
								<div className="flex flex-wrap justify-center">
	                              <button type="button" className="focus:outline-none bg-gray-400 text-white text-center font-bold rounded-tl rounded-bl pr-2 pl-2 lg:pb-1 md:pb-2 sm:pb-2 lg:pt-1 md:pt-2 sm:pt-2 transition-all ease-in-out duration-500 hover:bg-gray-600 lg:text-xl md:text-md sm:text-md">&minus;</button>
	                              <span className="bg-gray-400 font-bold text-center text-white pr-2 pl-2 lg:pb-1 md:pb-2 sm:pb-2 lg:pt-1 md:pt-2 sm:pt-2 border-r border-l border-gray-600 lg:text-2xl md:text-md sm:text-md">1</span>
	                              <button type="button" className="focus:outline-none bg-gray-400 text-white text-center font-bold rounded-tr rounded-br pr-2 pl-2 lg:pb-1 md:pb-2 sm:pb-2 lg:pt-1 md:pt-2 sm:pt-2 transition-all ease-in-out duration-500 hover:bg-gray-600 lg:text-xl md:text-md sm:text-md">+</button>
	                          	</div>
	                          	<input type="hidden" name="quantity" value="" onChange={e=>{}}/>
							</td>
							<td className="text-center">
								<button type="button" className="focus:outline-none focus:ring-0 lg:text-xl md:text-md sm:text-sm xs:text-sm text-red-500">
									<i className="fa fa-trash"></i>
								</button>
							</td>
						</tr>

					</tbody>
				</table>
			</div>
			{/*responsive table*/}
			<div className="lg:hidden md:block sm:block xs:block w-full max-w-full">
				<table className="table w-full border mx-auto">
					<tbody>
						<tr className="border">
							<th className="bg-gray-50">Product</th>
							<td>
								<div className="">
									<div className="mr-2 float-left ">
										<Image width="80" height="100" src="/images/product/img-12.webp"/>
										<input type="hidden" name="product" value="" onChange={e=>{}}/>
									</div>
									<div>
										<Link href="#">
											<a className="text-indigo-500 hover:underline hover:text-indigo-700">East Hampton Fleece Hoodie</a>
										</Link>
										<h1>Color : Green T-shirt</h1>
									</div>
								</div>
							</td>
						</tr>
						<tr>
							<th className="bg-gray-50">Price</th>
							<td >
								<div className="flex justify-center items-center">
									<h1>1*580 Tk = 580 Tk</h1>
								</div>
							</td>
						</tr>
						<tr>
							<th className="bg-gray-50">Quantity</th>
							<td>
								<div className="flex flex-wrap justify-center">
	                              <button type="button" className="focus:outline-none bg-gray-400 text-white text-center font-bold rounded-tl rounded-bl pr-2 pl-2 lg:pb-1 md:pb-2 sm:pb-2 lg:pt-1 md:pt-2 sm:pt-2 transition-all ease-in-out duration-500 hover:bg-gray-600 lg:text-xl md:text-md sm:text-md">&minus;</button>
	                              <span className="bg-gray-400 font-bold text-center text-white pr-2 pl-2 lg:pb-1 md:pb-2 sm:pb-2 lg:pt-1 md:pt-2 sm:pt-2 border-r border-l border-gray-600 lg:text-2xl md:text-md sm:text-md">1</span>
	                              <button type="button" className="focus:outline-none bg-gray-400 text-white text-center font-bold rounded-tr rounded-br pr-2 pl-2 lg:pb-1 md:pb-2 sm:pb-2 lg:pt-1 md:pt-2 sm:pt-2 transition-all ease-in-out duration-500 hover:bg-gray-600 lg:text-xl md:text-md sm:text-md">+</button>
	                          	</div>
	                          	<input type="hidden" name="quantity" value="" onChange={e=>{}}/>
							</td>
						</tr>
						<tr className="mb-4">
							<th className="bg-gray-50">Delete</th>
							<td className="text-center">
								<button type="button" className="focus:outline-none focus:ring-0 lg:text-xl md:text-md sm:text-sm xs:text-sm text-red-500">
									<i className="fa fa-trash"></i>
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</>)
}