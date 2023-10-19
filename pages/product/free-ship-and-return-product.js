import Link from 'next/link'
import Image from 'next/image'
export default function FreeShip(){
	return(<>
		<div className="container mx-auto">
	          <div className="flex flex-wrap flex-shirnk justify-between">
	              <div className="w-1/2 pl-4">
	                  <h1 className="lg:text-3xl text-gray-600 font-bold">Ready-to-ship You</h1>
	                  <p className="lg:text-sm md:text-sm sm:text-xs xs:text-cxs text-gray-400">Quick and Firster delivary</p>
	              </div>
	              <div className="w-1/2 pr-4 flex justify-end">
	                  <Image width="80" height="50" className="mx-auto opacity-50" src="/images/system/icons/delivery.png" alt="delivery"/>
	              </div>
	          </div>
	          <hr className="mt-2 opacity-50 block"/>
	          <div className="grid grid-flow-rows grid-cols-2">
	              <div className="mb-2 border-r border-b border-gray-150 pr-4 pl-4 pb-2 pt-0">
	                  <h1 className="lg:text-xl md:text-lg sm:text-sm text-gray-600 font-semibold mb-2 mt-1">Free Ship Now</h1>
	                  <div className="overflow-hidden">
	                      <Link href="/offers/free ship" >
	                          <a>
	                            <Image width="800" height="400" className="transition-all duration-500 ease-in-out transform hover:scale-110 opacity-75 hover:opacity-100" src="/images/banner/header2.jpeg" alt="free shipping"/>
	                          </a>
	                      </Link>
	                  </div>
	              </div>
	              <div className="mb-2 border-b border-gray-150 pl-4 pb-4 pr-4">
	                  <h1 className="lg:text-xl md:text-lg sm:text-sm text-gray-600 font-semibold mb-2 mt-1">Free return</h1>
	                  <div className="overflow-hidden ">
	                      <Link href="/offers/free return" >
	                        <a>
	                          <Image width="800" height="400" className="transition-all duration-500 ease-in-out transform hover:scale-110 opacity-75 hover:opacity-100" src="/images/banner/portfolio-img-1.webp" alt="free return"/>
	                        </a>
	                      </Link>
	                  </div>
	              </div>
	          </div>
	      </div>

	</>)
}