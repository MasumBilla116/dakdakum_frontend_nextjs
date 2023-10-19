export default function Location(){
	return(<>
		<button className="lg:block sm:block md:block xs:hidden text-xl focus:outline-none text-red-900 transition duration-500 ease-in-out menu-toggle md:hidden lg:block sm:hidden" data-target="#country">
            <i className="fa fa-globe block text-inherit"></i>
        </button>
       <div className="menu h-5/6 w-1/4 overflow-y-auto scroll-thin scroll-smooth bg-white border rounded bottom-0 -right-16 p-0" id="country">
           <div className="p-4 flex justify-between items-center border-b sticky top-0 left-0 bg-white z-20">
                <h1 className="text-lg font-semibold block">Location</h1>
                <i className="fa fa-globe text-lg font-semibold block text-red-500"></i>
            </div>
            <ul className="list-none text-lg strip-list">
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">America</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Bangladesh</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Canada</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Dubai</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">England</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">France</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Gambia</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">India</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Mianmar</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Nepal</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Quatar</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Kathmundu</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Zapan</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">America</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Bangladesh</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Canada</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Dubai</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">England</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">France</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Gambia</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">India</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Mianmar</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Nepal</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Quatar</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Kathmundu</a></li>
                <li><a href="#" className="p-1 block transition-all ease-in-out duration-500 hover:text-gray-900 font-semibold">Zapan</a></li>
            </ul>
        </div>
		
	</>)
}