import Head from 'next/head'
export default function pageNotFindOut(){
	return(<>
		<Head>
			<title>Sorry !!! This page is not availabel</title>
		</Head>
		<div className="absolute fixed z-20 top-0 left-0 right-0 bottom-0 bg-white">
			<div className="flex shadow-2xl justify-center items-center mx-auto mt-10 bg-white w-4/5 lg:h-5/6 md:h-2/3 sm:h-1/3 xs:h-1/3 border-t border-t-8 rounded  border-red-500">
				<div>
					<h1 className="text-red-600 lg:text-3xl md:text-2xl sm:text-md xs:text-md ">Opps.....!!! <small>Soryy this page is not find out</small></h1>
				</div>
			</div>
		</div>
	</>)
}
