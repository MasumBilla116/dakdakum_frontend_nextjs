import Title from '../../components/title'
import Link from 'next/link'
import Head from 'next/head'
export default function signin(){
	return(<>
		<Head>
			<link rel="stylesheet" href="./css/login.css"/>
		</Head>
		 <Title title="DakDakum | Login"/>
		 <div className="flex justify-center items-center">
		 	<div className="mx-auto lg:w-1/2 md:w-2/3 sm:w-2/3  p-2 rounded">
		 		<div className="bg-green-500 p-4 text-center text-white rounded-tl rounded-tr block">
		 			<div className="flex justify-center items-center">
	 					<h1 className="text-white text-3xl font-bold mr-4">DakDakum</h1>
	 					<h1 className="text-white text-3xl font-bold mr-4 ml-4">|</h1>
	 					<h1 className="text-white text-3xl font-bold ml-4">Login</h1>
		 			</div>
		 		</div>
		 		<div className="border border-green-500 rounded-bl rounded-br p-4">
		 			<div className="container mx-auto ">
		 				<form>
		 					<div className="grid grid-flow-rows grid-cols-1 gap-4">
		 						<div className="">
		 							<label className="text-green-500 font-semibold text-md mr-5 text-right">E-maill</label>
		 							<input id="email" type="email" name="email" placeholder="Enter your email" className="w-2/3 focus:outline-none focus:border-gray-200 focus:border-green-500 border rounded p-2 border-box ml-4"/>
		 						</div>
		 						<div className="">
		 							<label className="text-green-500 font-semibold text-md mr-4">Password</label>
		 							<input id="password" type="password" name="password" placeholder="Enter your password" className="w-2/3 focus:outline-none focus:border-gray-200 focus:border-green-500 border rounded p-2 border-box"/>
		 						</div>
		 						<div className="flex items-center justify-center">
		 							<div>
			 							<input id="remember" type="checkbox" name="remember" className="mr-2 focus:outline-none focus:border-gray-200 border  rounded p-2 border-box"/>
			 							<label for="remember" className="text-green-500 text-md mr-4">Remember me</label>
			 						</div>
			 						<div>
			 							<Link href="/register">
			 								<a className="text-green-500">Register now</a>
			 							</Link>
			 						</div>
		 						</div>
		 						<div>
		 							<button type="submit" className="bg-gradient-to-bl from-green-300 to-green-600 hover:from-green-600 hover:to-green-400 transition-all ease-linear duration-75 text-2xl w-full p-2 rounded text-center text-white font-semibold">
		 								Login
		 							</button>
		 						</div>
		 					</div>
		 				</form>
		 			</div>

		 		</div>
		 	</div>
		 </div>
	</>)
}