
export default function untitled(){
	return(<>
		<input type="hidden" name="customer"  value="" onChange={e=>{}}/>
		<div className="rounded border p-4">
			<h1 className="text-xl">ESTIMATE SHIPPING</h1>
			<p className="text-sm">Correction your destination to get a shipping estimate</p>
			<hr className="w-full mt-1 mb-4"/>
			<table className="w-full text-left table-strip">
				<tbody>
					<tr>
						<td><h1 className="font-bold">Name</h1></td>
						<td>Masum billa</td>
					</tr>
					<tr>
						<td><h1 className="font-bold">Address</h1></td>
						<td>Koyeagola Hat,Sayedpur,Nilphamary</td>
					</tr>
					<tr>
						<td><h1 className="font-bold">Phone</h1></td>
						<td>+8801700000098</td>
					</tr>
				</tbody>
			</table>
		</div>

	</>)
}
