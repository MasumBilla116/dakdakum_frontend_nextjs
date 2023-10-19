import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import NavOption from './../pages/common/nav-option.js'
import SearchField from './../pages/common/search-field.js'
import SecoundarySearchField from './../pages/common/secoundary-searchfield.js'
import AsideMenu from './../pages/common/aside-menu.js'
import TrackLocation from './../pages/common/track-location.js'
export default function header(){
	 
	return(
		<>
			<AsideMenu/>
	        {/* start navigation section */}
	        <div className="lg:pt-0 md:pt-0 mb-8 sm:pt-1 xs:pt-1 lg:pl-0 md:pl-0 sm:pl-1 xs:pl-1 nav ">
	            <nav className="container mx-auto lg:p-2 md:p-1">
	                <div className="grid gird-flow-rows lg:grid-cols-8 md:grid-cols-7 sm:grid-cols-7 xs:grid-cols-2 lg:gap-4 md:gap-4 sm:gap-2">
	                    <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 xs:col-span-1">
	                        <div className="flex justify-start items-center">
	                            <button type="button" className="focus:outline-none mr-2 lg:p-2 sm:p-2 xs:p-2 text-green-100 flex items-center justify-center lg:mr-2 md:mr-2 sm:mr-2 lg:ml-0 md:ml-0 sm:ml-0 xs:ml-2  xs:mr-4 hover:text-white rounded ring-0  transition-all ease-in-out duration-500  sidebar lg:text-2xl sm:text-lg md:text-xl xs:text-md  xs:m-1">
	                                <i className="fa fa-bars"></i>
	                            </button>
	                            <Link href="/">
	                            	<a className="lg:text-2xl md:text-xl sm:text-xl xs:text-xl font-bold logo text-white">
	                            		<span className="text-white">
	                            			DakDakum
	                            			<TrackLocation/>
	                            		</span>
	                            	</a>
	                            </Link>
	                        </div>
	                    </div>
	                    <SearchField/>
	                    <NavOption/>
	                </div>
	            </nav>
	            <SecoundarySearchField/>
	        </div>
	        
		</>

	)
}