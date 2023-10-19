export default function untitle(){
	return(<>
		<div className="bg-white p-2 border rounded mb-2">
			<div>
				<h1 className="text-xl font-semibold">Price Range</h1>
				<hr className="mt-2 mb-2"/>
				<div className="relative mt-16 mb-8 lg:block md:hidden sm:hidden xs:hidden">
                    <div className="price-range">450</div>
                    <input type="range" min="450" max="50000" id="priceRange" className="custom-range custom-range-slider focus:outline-none focus:ring-0"/>
            	</div>
            	<div>
            		<form>
            			<div className="flex justify-between items-center mb-2">
            				<div className="flex justify-start items-center mb-2">
            					<label htmlFor="min" className="text-2xl mr-3 text-gray-500 font-semibold mr4">Min :</label>
            					<div className="flex">
            						<input type="text" name="min" onChange={e=>{}} id="min" className="focus:outline-none focus:ring-0 w-14 rounded-tl p-2 border-box rounded-bl border" placeholder="min" />
            						<div className="p-2 text-xl text-center bg-gray-200 rounded-tr rounded-br">Tk</div>
            					</div>
            				</div>
            				<div className="flex justify-start items-center mb-2">
            					<label htmlFor="max" className="text-2xl mr-2 text-gray-500 font-semibold mr4">Max :</label>
            					<div className="flex">
            						<input type="text" name="max" onChange={e=>{}} id="max" className="focus:outline-none focus:ring-0 w-14 rounded-tl p-2 border-box rounded-bl border" placeholder="max" />
            						<div className="p-2 text-xl text-center bg-gray-200 rounded-tr rounded-br">Tk</div>
            					</div>
            				</div>
            			</div>
            			<div className="w-full p-2 text-center">
            				<button type="submit" className="focus:outline-none focus:ring-0 p-2 text-center text-white rounded shadow-lg bg-indigo-600 transition-all duration-500 hover:bg-indigo-800 font-semibold">Find out</button>
            			</div>
            		</form>
            	</div>
			</div>
		</div>
	</>)
}