import Link from 'next/link'
import {useState} from 'react'
const option = [
	{
		option : "Account",
		destinatino : 'setting'
	},
	{
		option : "Notification",
		destinatino : 'notification'
	},
	{
		option : "Privacy",
		destinatino : 'privacy'
	},
	{
		option : "Billing & Payments",
		destinatino : 'payment'
	},
	{
		option : "Advance settings",
		destinatino : 'setting/advance-setting'
	},
]
export default function SettingOption(props){
	return(<>
		<div className="p-4 bg-white border m-2 rounded h-97-p">
			<div className="p-2 mb-4 border-b">
				<h1 className="font-bold text-2xl text-gray-600">Setting</h1>
			</div>
			<ul className="strip-list">
				{
					option.map((data,index)=>{
						return(
							<li key={index}>
								<Link href={"/"+data.destinatino}>
									<a className="p-2 block font-semibold">
										{data.option}
									</a>
								</Link>
							</li>
						)
					})
				}
				
				{/*<li>
									<Link href="/notification">
										<a className={"p-2 block font-semibold "+active}>
											Notification
										</a>
									</Link>
								</li>
								<li>
									<Link href="/privacy">
										<a className="p-2 block font-semibold">
											Privacy
										</a>
									</Link>
								</li>
								<li>
									<Link href="/payment">
										<a className="p-2 block font-semibold">
											Billing & Payments
										</a>
									</Link>
								</li>
								<li>
									<Link href="/setting/advance-setting">
										<a className="p-2 block font-semibold">
											Advance settings
										</a>
									</Link>
								</li>*/}
			</ul>
		</div>
	</>)
}