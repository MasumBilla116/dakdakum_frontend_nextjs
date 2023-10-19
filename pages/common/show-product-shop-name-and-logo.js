import Link from 'next/link'
import Image from 'next/image'

export default function ShowProductShopNameAndLogo(props){
	return(<>
		<div className="absolute bottom-3 right-4 overflow-hidden p-1 border border-transparent transition-all duration-500 hover:border-green-300 w-8 h-8 rounded-full">
			<div className="relative">
				<Link href="#">
					<a className=" rounded-full">
						<Image width="30" height="30" className="rounded-full " src="/images/system/icons/avater.png"/>
					</a>
				</Link>
			</div>
		</div>
	</>)
}