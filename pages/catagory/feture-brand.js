export default function untitle(){
	return(<>
		<div className="bg-white p-2 border rounded mb-2">
			<div>
				<h1 className="text-xl font-semibold">Featured Brand</h1>
				<hr className="mt-2 mb-2"/>
				<div className="p-4">
					<div className="mb-2">
						<input type="checkbox" name="neuro" onChange={e=>{}} id="neuro" className="focus:outline-none focus:ring-0 mr-2"/>
						<label htmlFor="neuro" className="font-semibold text-xl text-gray-500">Nero</label>
					</div>
					<div className="mb-2">
						<input type="checkbox" name="dorzi-bari" onChange={e=>{}} id="dorzi-bari" className="focus:outline-none focus:ring-0 mr-2"/>
						<label htmlFor="dorzi-bari" className="font-semibold text-xl text-gray-500">Dorzi bari</label>
					</div>
					<div className="mb-2">
						<input type="checkbox" name="selai-ghor" onChange={e=>{}} id="selai-ghor" className="focus:outline-none focus:ring-0 mr-2"/>
						<label htmlFor="selai-ghor" className="font-semibold text-xl text-gray-500">Selai ghor</label>
					</div>
				</div>
			</div>
		</div>

	</>)
}