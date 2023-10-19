import Link from 'next/link'
export default function CardItem(){
	return(<>
		<Link href="/card">
        	<a className="text-red-900 trasition-all duration-500  xs:mt-2">
        		<i className="fa fa-shopping-bag text-gray-200 lg:text-2xl md:text-2xl sm:text-2xl xs:text-2xl xs:inline block text-inherit relative" aria-hidden="true">
                    <span className="absolute -top-2 text-white lg:right-4 md:right-1 text-sm ">
                    	<i className="fas fa fa-plus "></i>
                    </span>
        		</i>
        	</a>
       	</Link>
	</>)
}