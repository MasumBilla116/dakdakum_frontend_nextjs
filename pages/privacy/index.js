import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Avater from './../common/avater.js'
import UserName from './../common/user-name.js'
import UserEmail from './../common/user-email.js'
import SettingOptions from './../common/setting-option.js'
import AccountSetting from './../common/account-setting.js'
export default function Settings(){
	return(<>
		<Head>
			<title>Privacy</title>
		</Head>
		<div className="w-full">
			<div className="grid grid-flow-rows lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-1 xs:grid-cols-1 gap-4">
				<div className="lg:col-span-2 md:col-span-2 sm:col-span-1 xs:col-span-1 bg-gray-100 pb-1">
					<SettingOptions/>
				</div>
				<div className="lg:col-span-6 md:col-span-4 sm:col-span-1 xs:col-span-1 bg-gray-100">
					<div className="border-b-2 border-white border-b-2 p-4">
						<h1 className="text-3xl font-semibold text-gray-500">Privacy</h1>
					</div>
					<div className="pl-4 pr-4">
						<form>
							<div className="flex justify-between items-center mt-2 bg-gray-200 p-2 rounded">
							  <label className="flex  items-center text-xl font-bold text-gray-600">
							    <input type="checkbox" className="form-checkbox" value="1" name="shop-notification"/>
							    <span className="ml-2">Upload Your Account photo</span>
							  </label>
							  <button type="submit" className="focus:outline-none focus:ring-0 p-2 pr-16 pl-16 text-white font-semibold transition-all duration-500 hover:bg-green-500 text-center text-lg rounded bg-green-400 border border-green-500">Save</button>
							</div>
						</form>
					</div>
					<div className="pl-4 pr-4">
						<form>
							<div className="flex justify-between items-center mt-2 bg-gray-200 p-2 rounded">
							  <label className="flex  items-center text-xl font-bold text-gray-600">
							    <input type="checkbox" className="form-checkbox" value="1" name="shop-notification"/>
							    <span className="ml-2">Upload Your Shop logo</span>
							  </label>
							  <button type="submit" className="focus:outline-none focus:ring-0 p-2 pr-16 pl-16 text-white font-semibold transition-all duration-500 hover:bg-green-500 text-center text-lg rounded bg-green-400 border border-green-500">Save</button>
							</div>
						</form>
					</div>

				</div>
			</div>
		</div>
	</>)
}