import Link from 'next/link'
import Image from 'next/image'
export default function ShopNameAndLogo(){
	return(<>
		<Link href="#">
			<a>
				<Image width="50" height="50" className="block" src="/images/system/icons/avater.png"/>
				<h1 className="font-semibold text-indigo-500 hover:underline">DakDakum</h1>
				<p className="text-gray-500">Subscrib: 2.5k</p>
			</a>
		</Link>
	</>)
}