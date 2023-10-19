import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Avater from './../common/avater.js'
import UserName from './../common/user-name.js'
import UserEmail from './../common/user-email.js'
import SettingOptions from './../common/setting-option.js'
import AccountSetting from './../common/account-setting.js'
import {useState} from 'react'
export default function Notification(){
	const [shopNotification,setShopnotification] = useState("");
	const [destopNofication,setDesktopnotification] = useState("")
	function ShopNotificationHandle(event){
		
		if(event.target.checked){
			setShopnotification(event.target.value)
		}else{
			setShopnotification("")
		}
	}
	function DesktopNotificationHandle(event){
		if(event.target.checked){
			setDesktopnotification(event.target.value);
		}else{
			setDesktopnotification("")
		}
	}
	return(<>
		<Head>
			<title>Notification</title>
		</Head>
		<div className="w-full">
			<div className="grid grid-flow-rows lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-1 xs:grid-cols-1 gap-4">
				<div className="lg:col-span-2 pb-1 md:col-span-2 sm:col-span-1 xs:col-span-1 bg-gray-100">
					<SettingOptions active="notification"/>
				</div>
				<div className="lg:col-span-6 md:col-span-4 sm:col-span-1 xs:col-span-1 bg-gray-100">
					<div className="border-b-2 border-white border-b-2 p-4">
						<h1 className="text-3xl font-semibold text-gray-500">Mange Your Notifications</h1>
					</div>
					<div className="p-4">
						<form>
							<div className="flex mt-6 bg-gray-200 p-4 rounded">
							  <label className="flex items-center text-xl font-bold text-gray-600">
							    <input type="checkbox" className="form-checkbox" value="1" onChange={(event)=>{ShopNotificationHandle(event)}} name="shop-notification"/>
							    <span className="ml-2">Shop Notification</span>
							  </label>
							</div>
							<div className="flex mt-6 bg-gray-200 p-4 rounded">
							  <label className="flex items-center text-xl font-bold text-gray-600">
							    <input type="checkbox" className="form-checkbox" name="desktop-notification" value="1" onChange={(event)=>{DesktopNotificationHandle(event)}}/>
							    <span className="ml-2">Allow Desktop Notification</span>
							  </label>
							</div>
							<div className="flex mt-6 bg-gray-200 p-4 rounded">
							  	<button type="submit" className="focus:outline-none focus:ring-0 p-4 pr-16 pl-16 text-white font-semibold transition-all duration-500 hover:bg-green-500 text-center rounded bg-green-400 ">Save</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</>)
}