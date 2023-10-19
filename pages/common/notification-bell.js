import Link from 'next/link'
import Image from 'next/image'
import NotificationsList from './notifications-list.js'
import NotificationCount from './notifications-count.js'
export default function CardItem(){
	return(<>
    	<button type="button" className="text-red-900 relative text-center trasition-all focus:ring-0 focus:outline-none duration-500 xs:mt-2 lg:block md:block sm:hidden xs:hidden menu-toggle" data-target="#notification">
    		  <i className="fas fa fa-bell lg:text-2xl text-gray-200 md:text-2xl sm:text-2xl xs:text-2xl xs:inline block text-inherit relative" aria-hidden="true">
                <span className="absolute -top-1 font-normal lg:right-0  md:right-1 bg-white  w-5 h-5 text-center text-red-600 rounded-full text-sm ">
                	<NotificationCount userid="12"/>
                </span>
    		  </i>
    	</button>
        <div className="menu h-5/6  overflow-y-auto scroll-thin scroll-smooth bg-white border rounded bottom-0  p-0 absolute -right-20 p-0 xs:w-98 xs:left-106 lg:left-auto sm:-right-16 sm:left-auto sm:w-1/2" id="notification">
            <div className="p-2 pl-4 pr-4 flex justify-between items-center border-b sticky top-0 left-0 bg-white z-20">
                <h1 className="text-lg font-semibold block">Notification</h1>
                <i className="fas fa fa-bell text-lg font-semibold block text-red-500"></i>
            </div>
            <NotificationsList/>
        </div>
	</>)
}