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
			<title>Billing and Payment</title>
		</Head>
		<div className="w-full">
			<div className="grid grid-flow-rows lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-1 xs:grid-cols-1 gap-4">
				<div className="lg:col-span-2 md:col-span-2 sm:col-span-1 xs:col-span-1 bg-gray-100">
					<SettingOptions/>
				</div>
				<div className="lg:col-span-6 md:col-span-4 sm:col-span-1 xs:col-span-1 bg-gray-100">
					
				</div>
			</div>
		</div>
	</>)
}