import Link from 'next/link'
import Image from 'next/image'
export default function Avater(){
	return(<>
		<Link href="/login/">
        	<a className="bg-red-700 border border-red-400 focus:outline-none transition duration-500 ease-in-out  w-9 h-8 p-1  lg:mt-1 md:mt-1 sm:mt-1 xs:mt-1 sm:-ml-1">
        		<Image width="450" height="450" className="" src="/images/system/icons/avater.png"/>
        	</a>
        </Link>
	</>)
}