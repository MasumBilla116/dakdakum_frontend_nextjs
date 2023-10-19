import Image from 'next/image'
import Link from 'next/link'
import Avater from './avater.js'
import UserName from './user-name.js'
import UserEmail from './user-email.js'
export default function accountSetting(){
	return(<>
		<div>
			<h1 className="text-3xl p-4 font-bold text-gray-600 border-b-2 border-white">Account</h1>
			{/*user acctounts intro*/}
			<div className="p-4">
				<div className="w-full flex justify-start items-center">
					<div className="w-16 mr-4">
						<Avater/>
					</div>
					<div className="text-lg font-semibold text-gray-500">
						<UserName className="text-lg font-semibold"/>
					</div>
				</div>
				<div className="mt-4">
					<h1 className="lg:text-xl md:text-lg sm:text-md xs:text-md font-bold text-gray-600">Choose how you appear and what you Create own shop on DaKdaKum</h1>
					<div className="lg:text-lg md:text-md sm:text-sm xs:text-sm font-semibold text-gray-500">
						<UserEmail />
					</div>
				</div>
			</div>
			<hr className="border-white"/>
			{/*user shopp  acctounts create */}
			<div className="p-4">
				<div>
					<h1 className="lg:text-xl md:text-lg sm:text-md xs:text-md font-bold text-gray-600">Your DakDaKum Online Shopping Store</h1>
					<p className="text-gray-500 text-justify">This is your public presence on DaKdaKum. You need a Shop to upload your own product, description on product, and create own catagory.</p>
				</div>
				<hr className="border-white mt-2"/>
				<div className="flex justify-start items-center">
					<div className="mr-4">
						<Image alt="shop" src="/images/system/icons/product_icon.png" width="200" height="150"/>
					</div>
					<div>
						<div className="text-xl font-semibold text-red-600">
							<UserName className="text-lg font-semibold"/>
						</div>
						<Link href="#">
							<a className="font-semibold text-green-500 hover:text-green-700 hover:underline">Create shop</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</>)
}