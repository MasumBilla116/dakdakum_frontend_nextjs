import Image from 'next/image'
import Link from 'next/link'
export default function userSubscriptShop(props){
	return(<>
		<Link href="#">
			<a className="block">
				<div className="grid grid-flow-rows grid-cols-3">
					<div className="flex justify-center items-center">
						<Image width="40" height="40" className="rounded-full" src="/images/system/icons/avater.png"/>
					</div>
					<div className="flex justify-start items-center col-span-2">
						<div>
							<h1 className="font-semibold text-gray-600 block">
								DakDakum
							</h1>
							<small>Subscrib: {props.userid}k</small>
						</div>
					</div>
				</div>
			</a>
		</Link>
	</>)
}