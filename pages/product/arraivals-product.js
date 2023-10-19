import Link from 'next/link'
import Image from 'next/image'
import ShowProductShopNameAndLogo from './../common/show-product-shop-name-and-logo.js'
export default function Arraivals(){
	return(<>
		<div className="container mx-auto">
            <div className="flex flex-wrap flex-shirnk justify-between">
                <div className="w-1/2">
                    <h1 className="lg:text-3xl text-gray-600 font-bold">Arrivals</h1>
                    <p className="lg:text-sm md:text-sm sm:text-cxs xs:text-cxs text-gray-400">New and Arrivals just for you</p>
                </div>
                <div className="w-1/2 flex justify-end">
                    <Image width="55" height="45" className="w-1/6 mx-auto opacity-50" src="/images/system/icons/present.png" alt="delivery"/>
                </div>
            </div>
            <hr className="mt-2 opacity-50 block mb-4"/>
            <div className="grid grid-flow-rows grid-cols-4 gap-4">
                <div className="mb-2 ">
                    <div className="overflow-hidden rounded relative">
                        <Link href="/product/1">
                          <a>
                            <Image width="400" height="465" className="w-full h-40  transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/img-10.webp" alt="banner"/>
                          </a>  
                        </Link>
                        <ShowProductShopNameAndLogo productid="1"/>
                    </div>
                    <div className="text-center">
                      <h1 className="text-pink-600 lg:font-bold md:font-bold sm:font-semibold xs:font-semibold sm:text-sm xs:text-sm">12% Off</h1>
                    </div>
                </div>
                <div className="mb-2 ">
                    <div className="overflow-hidden rounded relative">
                      <Link href="/product/2">
                          <a>
                            <Image width="400" height="465" className="w-full h-40  transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/img-16.webp" alt="banner"/>
                          </a>
                        </Link>
                        <ShowProductShopNameAndLogo productid="1"/>
                    </div>
                    <div className="text-center">
                        <h1 className="text-pink-600 lg:font-bold md:font-bold sm:font-semibold xs:font-semibold sm:text-sm xs:text-sm">7% Off</h1>
                    </div>
                </div>

                <div className="mb-2 ">
                    <div className="overflow-hidden rounded relative">
                      <Link href="/product/3">
                          <a>
                            <Image width="400" height="465" className="w-full h-40  transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/img-40.webp" alt="banner"/>
                          </a>
                        </Link>
                        <ShowProductShopNameAndLogo productid="1"/>
                    </div>
                    <div className="text-center">
                          <h1 className="text-pink-600 lg:font-bold md:font-bold sm:font-semibold xs:font-semibold sm:text-sm xs:text-sm">35% Off</h1>
                    </div>
                </div>

                <div className="mb-2">
                    <div className="overflow-hidden rounded relative">
                        <Link href="/product/4">
                            <a>
                                <Image width="400" height="465" className="w-full h-40  transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/img-12.webp" alt="banner"/>
                            </a>
                        </Link>
                        <ShowProductShopNameAndLogo productid="1"/>
                    </div>
                    <div className="text-center">
                        <h1 className="text-pink-600 lg:font-bold md:font-bold sm:font-semibold xs:font-semibold sm:text-sm xs:text-sm">50% Off</h1>
                    </div>
                </div>
            </div>
        </div>
	</>)
}