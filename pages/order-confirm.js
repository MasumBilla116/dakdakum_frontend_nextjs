import Image from 'next/image'

export default function OrderConfirm(){
	return(<>
		<div className="container border border-green-500  mx-auto mb-8">
			<div className="p-2 text-center bg-green-500  mb-4">
				<h1 className="text-white text-3xl font-semibold">THANK YOU FOR YOUR CONFIRMATION</h1>
			</div>
			<div className="p-4">
				<h1 className="text-2xl font-semibold text-gray-600">DEAR CUSTOMERS <small className="text-gray-400">Masum billa</small></h1>
				<article className="text-justify">
					<p>STAY WITH US and get more offers. You buying our any products containuously in the year You get a buyet lavel and if your buying position will topper you get BUYEAR AWARD . We give a special price for buyer award . </p>
				</article>
			</div>
		</div>
	</>);
}