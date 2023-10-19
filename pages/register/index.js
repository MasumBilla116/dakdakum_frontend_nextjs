import Title from '../../components/title'
import Link from 'next/link'
import Head from 'next/head'
import {useState} from 'react'
export default function register(){
	const [fname,setFname] 			= useState("")
	const [lname,setLname] 			= useState("")
	const [gender,setGender] 		= useState("")
	const [email,setEmail] 			= useState("")
	const [password,setPassword] 	= useState("")
	const [cpassword,setCpassword] 	= useState("")
	const [remember,setRemember] 	= useState("")
	function setValue(e){
		var val = e.target.value
		var name = e.target.name
		if( name === 'fname'){
			setFname(val)
		}else if( name === 'lname'){
			setLname(val)
		}else if( name === 'gender'){
			setGender(val)
		}else if( name === 'email'){
			setEmail(val)
		}else if( name === 'password'){
			setPassword(val)
		}else if( name === 'cpassword'){
			setCpassword(val)
		}else if( name === 'remember'){
			setRemember(val)
		}
	}
	return(<>
		<Head>
			<link rel="stylesheet" href="./css/login.css"/>
		</Head>
		 <Title title="DakDakum | register"/>
		 <h1>{fname}</h1>
		 <h1>{lname}</h1>
		 <h1>{gender}</h1>
		 <h1>{email}</h1>
		 <h1>{password}</h1>
		 <h1>{cpassword}</h1>
		 <h1>{remember}</h1>

		 <div className="flex justify-center items-center">
		 	<div className="mx-auto lg:w-1/2 md:w-2/3 sm:w-2/3  p-2 rounded">
		 		<div className="bg-green-500 p-4 text-center text-white rounded-tl rounded-tr block">
		 			<div className="flex justify-center items-center">
	 					<h1 className="text-white text-3xl font-bold mr-4">DakDakum</h1>
	 					<h1 className="text-white text-3xl font-bold mr-4 ml-4">|</h1>
	 					<h1 className="text-white text-3xl font-bold ml-4">Register</h1>
		 			</div>
		 		</div>
		 		<div className="border border-green-500 rounded-bl rounded-br p-4">
		 			<div className="container mx-auto text-center">
		 				<form>
		 					<div className="grid grid-flow-rows grid-cols-1 gap-4">
		 						<div className="">
		 							<label for="fname" className="text-green-500 font-semibold text-md mr-4">First name :</label>
		 							<input id="fname" onChange={e=>{setValue(e)}} type="text" name="fname" value={fname} placeholder="Enter your first name" className="w-2/3 focus:outline-none focus:border-gray-200 focus:border-green-500 border rounded p-2 border-box ml-4"/>
		 						</div>
		 						<div className="">
		 							<label for="lname" className="text-green-500 font-semibold text-md mr-4">Last name :</label>
		 							<input id="lname" onChange={e=>{setValue(e)}} type="text" name="lname" value={lname} placeholder="Enter your last name" className="w-2/3 focus:outline-none focus:border-gray-200 focus:border-green-500 border rounded p-2 border-box ml-4"/>
		 						</div>
		 						<div className="">
		 							<label for="gender" className="text-green-500 font-semibold text-md mr-8">Gender :</label>
		 							<select name="gender" onChange={e=>{setValue(e)}} id="gender" className="w-2/3 focus:outline-none focus:border-gray-200 focus:border-green-500 border rounded p-2 border-box ml-4 text-gray-400">
		 								<option value="">Select your gender</option>
		 								<option value="female">Female</option>
		 								<option value="male">Male</option>
		 								<option value="other">Others</option>
		 							</select>
		 						</div>
		 						<div className="">
		 							<label for="email" className="text-green-500 font-semibold text-md mr-8">E-maill : </label>
		 							<input id="email" onChange={e=>{setValue(e)}} type="email" name="email" value={email} placeholder="Enter your email" className="w-2/3 focus:outline-none focus:border-gray-200 focus:border-green-500 border rounded p-2 border-box ml-4"/>
		 						</div>
		 						<div className="">
		 							<label for="password" className="text-green-500 font-semibold text-md mr-8">Password :</label>
		 							<input id="password" onChange={e=>{setValue(e)}} type="password" name="password" value={password} placeholder="Enter your password" className="w-2/3 focus:outline-none focus:border-gray-200 focus:border-green-500 border rounded p-2 border-box"/>
		 						</div>
		 						<div className="">
		 							<label for="cpassword" className="text-green-500 font-semibold text-md mr-10">Confirm :</label>
		 							<input id="cpassword" onChange={e=>{setValue(e)}} type="password" name="cpassword" value={cpassword} placeholder="Enter your password" className="w-2/3 focus:outline-none focus:border-gray-200 focus:border-green-500 border rounded p-2 border-box"/>
		 							
		 						</div>
		 						<div className="flex items-center justify-center">
		 							<div>
			 							<input id="remember" onChange={e=>{setValue(e)}} type="checkbox" name="remember" className="mr-2 focus:outline-none focus:border-gray-200 border  rounded p-2 border-box"/>
			 							<label for="remember"  className="text-green-500 text-md mr-4">Remember me</label>
			 						</div>
			 						<div>
			 							<Link href="/register">
			 								<a className="text-green-500">Register now</a>
			 							</Link>
			 						</div>
		 						</div>
		 						<div>
		 							<button type="submit" className="bg-gradient-to-bl from-green-300 to-green-600 hover:from-green-600 hover:to-green-400 transition-all ease-linear duration-75 text-2xl w-full p-2 rounded text-center text-white font-semibold">
		 								Submit
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