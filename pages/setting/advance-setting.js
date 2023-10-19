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
			<title>Advance setting</title>
		</Head>
		<div className="w-full">
			<div className="grid grid-flow-rows lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-1 xs:grid-cols-1 gap-4">
				<div className="lg:col-span-2 md:col-span-2 sm:col-span-1 xs:col-span-1 bg-gray-100 pb-1">
					<SettingOptions/>
				</div>
				<div className="lg:col-span-6 md:col-span-4 sm:col-span-1 xs:col-span-1 bg-gray-100 ">
					<div className="border-b-2 border-white border-b-2 p-4">
						<h1 className="text-3xl font-semibold text-gray-500">Advance Setting</h1>
					</div>
					<div className="p-2 pl-4 pr-4">
						<div className="flex mt-2 bg-gray-200 p-4 rounded">
						  <label className="flex items-center mr-4 text-xl font-bold text-gray-600" htmlFor="user-id">User ID : </label>
						  <input type="text" value="ndsfje4894bsjhdfj" readOnly={true} id="user-id" className="focus:outline-none copy-text-field focus:ring-0 border-box p-2 rounded mr-4"/>
						  <button type="button" className="focus:outline-none focus:ring-0 text-indigo-700 font-semibold copy" data-target="#user-id">Copy</button>
						</div>
					</div>
					<div className="p-2 pl-4 pr-4">
						<div className="flex mt-2 bg-gray-200 p-4 rounded">
						  <label className="flex items-center mr-4 text-xl font-bold text-gray-600" htmlFor="user-id">Shop ID : </label>
						  <input type="text" value="ioasdkjhue897kljasiod" readOnly={true} id="shop-id" className="focus:outline-none focus:ring-0 copy-text-field border-box p-2 rounded mr-4"/>
						  <button type="button" className="focus:outline-none focus:ring-0 text-indigo-700 font-semibold copy" data-target="#shop-id">Copy</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>)
}