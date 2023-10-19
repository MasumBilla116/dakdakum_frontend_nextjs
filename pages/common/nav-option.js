import NavAvater from './nav-avater.js'
import CardCounter from './card_counter.js'
import Location from './location.js'
import NotificationBell from './notification-bell.js'
export default function untitleFunction(){
	return(<>
		<div className="lg:col-span-2 md:col-span-1 sm:col-span-1">
            <div className="lg:mx-auto md:mx-auto sm:mx-auto text-sm">
                <div className="grid grid-flow-rows lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-3 lg:gap-4 md:gap-2 sm:gap-2 xs:gap-0">
                    <NotificationBell/>
                    <button type="button" className="lg:hidden md:hidden sm:hidden xs:block text-xl text-white toggle" data-toggle="#searchbar">
                        <i className="fas fa fa-search"></i>
                    </button>
                	<CardCounter/>
                    <NavAvater/>
                </div>
            </div>
        </div>
	</>)
}