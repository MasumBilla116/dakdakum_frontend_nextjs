import Head from 'next/head';
import Link from "next/link"
import {useState} from 'react';
export default function header(){
	 const [searchItem,setSearch] = useState("");
	  function searchInfo(e){
	    setSearch(e.target.value);
	  }
	return(
		<>
			<div className="bg-gray-100 shadow-r-lg sidebar-nav lg:w-1/3 md:w-2/5 sm:w-1/3 p-4 fixed z-30 top-0 -left-100 bottom-0 ">
	            <div className="border bg-white rounded-tl rounded-tr p-2 flex justify-between">
	                <h1 className="text-xl font-bold text-gray-500">Close</h1>
	                <button type="button" className="focus:outline-none bg-gray-100 rounded p-2 text-center text-gray-400 close"><i className="fas fa fa-angle-left"></i></button>
	            </div>
	            <div className="md:text-xs sm:text-xs lg:text-sm lg:hidden md:show sm:show border bg-white  ">
	                <div className="flex justify-between mb-4 p-2">
	                    <button className="focus:outline-none text-gray-400 transition duration-500 ease-in-out hover:text-green-900 collapse" data-target="#sidebar-country" data-collapse-active="lightsalmon">
	                        <i className="fa fa-globe block text-inherit"></i>
	                        <span>Bangladesh</span>
	                    </button>
	                    <button className="focus:outline-none text-gray-400 transition duration-500 ease-in-out hover:text-green-900 collapse" data-target="#sidebar-area" data-collapse-active="lightseagreen">
	                        <i className="fa fa-map-marker block text-inherit" aria-hidden="true"></i>
	                        <span>
	                            Fast delivary
	                        </span>
	                    </button>
	                    <div>
	                        <a href="#" className="text-gray-400 block font-bold p-1 transition duration-500 ease-in-out hover:text-green-900">
	                            <i className="fas fa fa-cog"></i>
	                        </a>
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
	                    <div className="p-2 h-32 overflow-y-auto scroll-thin scroll-smooth bg-blue-100">
	                        <div className="grid grid-flow-rows grid-cols-1 gap-4 text-gray-500">
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
	                {/* end area section */}
	                 {/* end location and setting section in sidebar nav */}
	            </div>
	            
	           <div className="w-full lg:h-5/6 md:h-4/6 sm:h-1/2 p-4 bg-white border overflow-y-auto scroll-thin scroll-none transition-all duration-500 ease-in-out hover:scroll-show">
	               <ul className="list-none">
	                   <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols- p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-7002">
	                            <p>Man</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>Women</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>T&dash;shirt</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>Foods</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>Software</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>Vegitable</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>Videos</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>18&plus; years old</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>Foods</p>
	                        </a>
	                    </li>


	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols- p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-7002">
	                            <p>Man</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>Women</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>T&dash;shirt</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>Foods</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>Software</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>Vagitable</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>Videos</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>18&plus; years old</p>
	                        </a>
	                    </li>
	                    <li>
	                        <a href="#" className="grid gird-flow-rows gird-cols-2 p-2 text-gray-600 rounded border-b border-gray-200 transition-all ease-in-out duration-500 hover:bg-gray-50 hover:text-gray-700">
	                            <p>Foods</p>
	                        </a>
	                    </li>
	               </ul>
	           </div>
	           <div className="md:hidden sm:hidden lg:block text-sm">
	                <a href="#" className="text-gray-400 inline-block font-bold p-1 transition duration-500 ease-in-out hover:text-gray-500">
	                    <i className="fas fa fa-cog"></i> setting
	                </a>
	               
	           </div>
	        </div> 
	        {/* start navigation section */}
	        <div className="lg:p-2 md:p-1 sm:p-2 bg-dark-pink mb-8 border-b-2 border-black sticky top-0 z-20">
	            <nav className="container mx-auto lg:p-2 md:p-1">
	                <div className="grid gird-flow-rows lg:grid-cols-8 md:grid-cols-7 sm:grid-cols-7 lg:gap-4 md:gap-4 sm:gap-2">
	                    <div className="lg:col-span-2 md:col-span-2 sm:col-span-2">
	                        <div className="flex flex-wrap flex-shirnk">
	                            <button type="button" className="focus:outline-none p-2 text-green-100 flex items-center justify-center mr-2 hover:text-white rounded ring-1 ring-green-50 transition-all ease-in-out duration-500 hover:ring-green-400 sidebar text-2xl shadow-lg bg-green-700 hover:bg-green-800">
	                                <i className="fa fa-bars"></i>
	                            </button>
	                            <Link href="/">
	                            	<a className="mr-2 mt-1 lg:text-2xl md:text-xl font-bold logo text-white">
	                            		<span className="text-3xl text-white">D</span>ak<span className="text-3xl text-white">D</span>akum
	                            	</a>
	                            </Link>
	                        </div>
	                    </div>
	                    <div className="lg:col-span-4 md:col-span-4 sm:col-span-4">
	                        <form method="post">
	                            <div className="flex flex-wrap relative">
	                                <input type="search" name="search" onChange={e=>{searchInfo(e)}} value={searchItem} placeholder="Searching items" className="rounded-full w-full p-2 focus:outline-none border-none bg-white shadow-md focus:shadow-lg focus:ring-0 inline placeholder-gray-500"/>
	                                <div className="absolute right-3 top-1 flex">
	                                    <button type="submit" className="p-1 text-green-500 hover:text-green-700 mr-1 transition duration-500 ease-in-out">
	                                        <i className="fas fa fa-search"></i>
	                                    </button>
	                                    <button type="submit" className="p-1 text-green-500 hover:text-green-700 transition duration-500 ease-in-out ">
	                                        <i className="fa fa-camera"></i>
	                                    </button>
	                                </div>
	                            </div>
	                        </form>
	                    </div>
	                    <div className="lg:col-span-2 md:col-span-1 sm:col-span-1">
	                        <div className="lg:mx-auto md:mx-auto sm:mx-auto text-sm">
	                            <div className="grid grid-flow-rows lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 lg:gap-4 md:gap-2 sm:gap-2">
	                                <button className="text-xl focus:outline-none text-white transition duration-500 ease-in-out hover:text-pink-900 menu-toggle md:hidden lg:block sm:hidden" data-target="#country">
	                                    <i className="fa fa-globe block text-inherit"></i>
	                                    <div className="menu" id="country">
	                                        <div className="bg-gray-100 rounded border p-2 ">
	                                            <div className="bg-white p-2 rounded border ">
	                                                <h1 className="text-center p-1 font-bold text-gray-700 border-b">Select your country</h1>
	                                                <div className="grid grid-flow-rows grid-cols-1 gap-4 text-gray-500 h-40 overflow-y-auto scroll-thin">
	                                                    <div className="grid grid-flow-rows grid-cols-2 gap-4 text-gray-500">
	                                                        <div className="border-b p-2 border-b">
	                                                            <ul className="list-none">
	                                                                <li><a href="#" className="p-1 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">America</a></li>
	                                                                <li><a href="#" className="p-1 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Bangladesh</a></li>
	                                                                <li><a href="#" className="p-1 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Canada</a></li>
	                                                                <li><a href="#" className="p-1 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Dubai</a></li>
	                                                                <li><a href="#" className="p-1 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">England</a></li>
	                                                                <li><a href="#" className="p-1 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">France</a></li>
	                                                                <li><a href="#" className="p-1 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Gambia</a></li>
	                                                                <li><a href="#" className="p-1 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">India</a></li>
	                                                                <li><a href="#" className="p-1 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Mianmar</a></li>
	                                                                <li><a href="#" className="p-1 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Nepal</a></li>
	                                                                <li><a href="#" className="p-1 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Quatar</a></li>
	                                                                <li><a href="#" className="p-1 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Kathmundu</a></li>
	                                                                <li><a href="#" className="p-1 transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Zapan</a></li>
	                                                            </ul>
	                                                        </div>
	                                                    </div>
	                                                </div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                </button>
	                                <button className="focus:outline-none text-white menu-toggle">
	                                    <a href="#"><i className="fa fa-shopping-bag lg:text-2xl md:text-2xl sm:text-2xl block text-inherit relative" aria-hidden="true">
	                                        <span className="absolute -top-2 lg:right-2 md:-right-1 sm:-right-1 bg-light-green rounded-full text-sm font-serif w-6 h-6 flex flex-wrap items-center justify-center text-white hidden">
	                                        	1
	                                        </span>
	                                    </i>
	                                    </a>
	                                </button>
	                                <button className="focus:outline-none transition duration-500 ease-in-out rounded-full w-9 h-9 p-1 rounded-full border-1 border-pink-900 bg-pink-800 menu-toggle" data-target="#account">
	                                    <img className="rounded-full" src=""/>
	                                    {/* account toggler content */}
	                                    <div id="account" className="menu show text-left">
	                                            <div className="bg-gray-100 border p-2">
	                                                <div className="bg-white border rounded p-2">
	                                                	<Link href={"common/login-index"}>
	                                                        <a className="block text-gray-700 p-1 transition-all ease-in-out duration-500 hover:text-indigo-500">Log-in</a>
	                                                    </Link>
	                                                            <a href="" className="block text-gray-700 p-1 transition-all ease-in-out duration-500 hover:text-indigo-500">Register</a>
	                                                    <a className="block text-gray-700 p-1 transition-all ease-in-out duration-500 hover:text-indigo-500" href="#">
	                                                        <i className="fas fa fa-cog"></i> Setting
	                                                    </a>
	                                                </div>
	                                            </div>
	                                    </div>
	                                    {/* end account toggler content */}
	                                </button>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </nav>
	        </div>

		</>

	)
}