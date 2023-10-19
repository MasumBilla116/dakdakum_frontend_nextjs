import Link from 'next/link'
export default function untitleFunction(){
	return(<>
		<div className="bg-red-900 shadow-r-lg sidebar-nav lg:w-1/3 md:w-2/5 sm:w-1/3 p-4 fixed z-30 top-0 -left-100 bottom-0 ">
            <div className="border border-l-2 border-r-2 border-t-2 border-red-500 bg-red-800 rounded-tl rounded-tr p-2 flex justify-between">
                <h1 className="text-xl font-bold text-gray-200">Close</h1>
                <button type="button" className="focus:outline-none bg-red-700 border border-red-500 transition-all duration-500 hover:bg-red-900 hover:border-red-400 rounded p-2 text-center text-gray-100 close"><i className="fas fa fa-angle-left"></i></button>
            </div>
            <div className="md:text-xs sm:text-xs lg:text-sm lg:hidden md:show sm:show border bg-red-600  ">
                <div className="flex justify-between mb-4 p-2">
                    <button className="focus:outline-none text-gray-200 transition duration-500 ease-in-out hover:text-green-900 collapse" data-target="#sidebar-country" data-collapse-active="lightsalmon">
                        <i className="fa fa-globe block text-inherit"></i>
                        <span>Bangladesh</span>
                    </button>
                    <div>
                        <Link href="/setting">
                            <a  className="text-gray-200 block font-bold p-1 transition duration-500 ease-in-out hover:text-green-900">
                                <i className="fas fa fa-cog"></i>
                            </a>
                        </Link>
                   </div>
                </div>
                {/* start location and setting section in sidebar nav */}
                {/* start country section */}
                <div id="sidebar-country" className="relative bg-white border-t collapse-toggle" >
                    <div className="absolute top-2 right-3">
                        <button type="button" className="focus:outline-none bg-gray-100 rounded p-1 text-sm text-gray-400 transition-all duration-500 ease-in-out hover:text-gray-600 collapse-close"  data-target="#sidebar-country">
                            <i className="fas fa fa-angle-up "></i>
                        </button>
                    </div>
                    <div className="p-2 h-32 overflow-y-auto scroll-thin scroll-smooth bg-pink-100">
                        <div className="grid grid-flow-rows grid-cols-1 gap-4 text-gray-500 ">
                            <div className="p-2">
                                <ul className="list-none">
                                    <li><a href="#" className="p-1 text-sm rounded block hover:bg-gray-100 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">America</a></li>
                                    <li><a href="#" className="p-1 text-sm rounded block hover:bg-gray-100 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Bangladesh</a></li>
                                    <li><a href="#" className="p-1 text-sm rounded block hover:bg-gray-100 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Canada</a></li>
                                    <li><a href="#" className="p-1 text-sm rounded block hover:bg-gray-100 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Dubai</a></li>
                                    <li><a href="#" className="p-1 text-sm rounded block hover:bg-gray-100 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">England</a></li>
                                    <li><a href="#" className="p-1 text-sm rounded block hover:bg-gray-100 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">France</a></li>
                                    <li><a href="#" className="p-1 text-sm rounded block hover:bg-gray-100 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Gambia</a></li>
                                    <li><a href="#" className="p-1 text-sm rounded block hover:bg-gray-100 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">India</a></li>
                                    <li><a href="#" className="p-1 text-sm rounded block hover:bg-gray-100 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Mianmar</a></li>
                                    <li><a href="#" className="p-1 text-sm rounded block hover:bg-gray-100 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Nepal</a></li>
                                    <li><a href="#" className="p-1 text-sm rounded block hover:bg-gray-100 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Quatar</a></li>
                                    <li><a href="#" className="p-1 text-sm rounded block hover:bg-gray-100 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Kathmundu</a></li>
                                    <li><a href="#" className="p-1 text-sm rounded block hover:bg-gray-100 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Zapan</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end country section */}
                {/* start area section */}
                <div className="relative hidden bg-white border-t collapse-toggle" id="sidebar-area">
                    <div className="absolute top-2 right-3">
                        <button type="button" className="focus:outline-none bg-gray-100 rounded p-1 text-sm text-gray-400 transition-all duration-500 ease-in-out hover:text-gray-600 collapse-close"  data-target="#sidebar-area">
                            <i className="fas fa fa-angle-up "></i>
                        </button>
                    </div>
                    
                </div>
                {/* end area section */}
                 {/* end location and setting section in sidebar nav */}
            </div>
            
           <div className="w-full lg:h-5/6 md:h-2/5 sm:h-3/5 xs:h-1/2 p-4 bg-red-800 border-2 border-red-500 border-t-0 overflow-y-auto scroll-thin scroll-none transition-all duration-500 ease-in-out hover:scroll-show">
               <ul className="list-none">
                   <li className="aside-menu-close">
                   		<Link href="/catagory/man">
	                        <a className="block aside-menu-close p-2 text-gray-200 border-b border-red-400 transition-all ease-in-out duration-500 hover:bg-red-600 hover:text-gray-1002">
	                            <p>Man</p>
	                        </a>
	                    </Link>
                    </li>
                    <li className="aside-menu-close">
                    	<Link href="/catagory/women">
	                        <a className="block aside-menu-close p-2 text-gray-200 border-b border-red-400 transition-all ease-in-out duration-500 hover:bg-red-600 hover:text-gray-100">
	                            <p>Women</p>
	                        </a>
	                    </Link>
                    </li>
                    <li className="aside-menu-close">
                    	<Link href="/catagory/t-shirt">
	                        <a className="block aside-menu-close p-2 text-gray-200 border-b border-red-400 transition-all ease-in-out duration-500 hover:bg-red-600 hover:text-gray-100">
	                            <p>T-shirt</p>
	                        </a>
	                    </Link>
                    </li>
                    <li className="aside-menu-close">
                    	<Link href="/catagory/foods">
	                        <a className="block aside-menu-close p-2 text-gray-200 border-b border-red-400 transition-all ease-in-out duration-500 hover:bg-red-600 hover:text-gray-100">
	                            <p>Foods</p>
	                        </a>
	                    </Link>
                    </li>
                    <li className="aside-menu-close">
                    	<Link href="/catagory/18+">
	                        <a className="block  p-2 text-gray-200 border-b border-red-400 transition-all ease-in-out duration-500 hover:bg-red-600 hover:text-gray-100">
	                            <p>18+ years old</p>
	                        </a>
	                    </Link>
                    </li>
               </ul>
           </div>
           <div className="md:hidden sm:hidden lg:block text-sm">
                <Link href="/setting">
                    <a className="text-gray-200 aside-menu-close inline-block font-bold p-1 transition duration-500 ease-in-out hover:text-gray-100">
                        <i className="fas fa fa-cog"></i> setting
                    </a>
                </Link>
           </div>
        </div> 
	</>)
}