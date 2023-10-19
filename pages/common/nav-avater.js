import Image from 'next/image'
import Link from 'next/link'
import UserSubscribesShop from './user-subscribes-shop.js'
import NotificationsCount from './notifications-count.js'
import SubscribesCount from './subscribes-count.js'
import NotificationsList from './notifications-list.js'
export default function Avater(){
	return(<>
    	<button  className="bg-red-700 border focus:outline-none focus:ring-0 border-red-400 focus:outline-none transition duration-500 ease-in-out  w-9 h-8 p-1  lg:mt-1 md:mt-1 sm:mt-1 xs:mt-1 sm:-ml-1 menu-toggle" data-target="#account">
    		<Image width="450" height="450" className="" src="/images/system/icons/avater.png"/>
    	</button>
    	<div className="menu h-5/6 lg:w-1/4 md:w-1/4 overflow-y-auto scroll-thin scroll-smooth bg-white border rounded bottom-0 -right-20 p-0 xs:w-98 xs:left-106 lg:left-auto sm:-right-16 sm:left-auto sm:w-1/2" id="account">
    		<div className="p-4 flex justify-between items-center border-b sticky top-0 left-0 bg-white z-20">
    			<h1 className="text-lg font-semibold block">Account</h1>
    			<Image width="30" height="30" className="rounded-full" src="/images/system/icons/avater.png"/>
    		</div>
            
            <ul className="list-none text-lg strip-list">
                <li>
                	<Link href="/login">
                		<a className="p-1 block font-semibold">Login</a>              
                	</Link>
                </li>
                <li>
                	<button type="button" data-target="#subscription" className="p-1 w-full flex justify-between items-center collapse-tabs text-left block font-semibold">
                		<h1>
                            Subscription shops
                            <span className="bg-red-500 ml-2 pl-2 pr-2 text-white rounded-full"><SubscribesCount userid="1"/></span>
                        </h1>
                		<i className="fa fa-angle-up text-right"></i>
                	</button>
                	<div className="w-full bg-gray-100 p-2 mt-2 mb-2" id="subscription">
                		<UserSubscribesShop userid="1"/>
                	</div>
                </li>
                <li className="">
                    <button type="button" data-target="#notificationCounter" className="p-1 w-full flex justify-between items-center collapse-tabs text-left block font-semibold">
                        <h1>Notifications 
                            <span className="bg-red-500 ml-2 pl-2 pr-2 text-white rounded-full">
                                <NotificationsCount userid="12"/>
                            </span>
                        </h1>
                        <i className="fa fa-angle-up text-right"></i>
                    </button>
                    <div className="w-full bg-gray-100 p-2 mt-2 mb-2" id="notificationCounter">
                        <NotificationsList/>
                    </div>
                </li>
                <li>
                	<Link href="/#">
                		<a className="p-1 block font-semibold">Shop</a>              
                	</Link>
                </li>
                <li>
                    <Link href="/setting">
                        <a className="p-1 block font-semibold">Settings</a>              
                    </Link>
                </li>    
            </ul>
        </div>
	</>)
}