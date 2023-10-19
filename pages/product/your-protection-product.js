import Link from 'next/link'
import Image from 'next/image'
import ShowProductShopNameAndLogo from './../common/show-product-shop-name-and-logo.js'
export default function Protection(){
	return(<>
		<div className="container mx-auto">
        <div className="flex flex-wrap flex-shirnk justify-between">
            <div className="w-1/2">
              <h1 className="lg:text-3xl text-gray-600 font-bold">Your Protection</h1>
              <p className="lg:text-sm md:text-sm sm:text-cxs xs:text-cxs text-gray-400">We are refer to protect your life</p>
            </div>
            <div className="w-1/2 flex justify-end">
              <Image width="55" height="45" className="w-1/6 mx-auto opacity-50" src="/images/system/icons/shield.png" alt="delivery"/>
            </div>
        </div>
        <hr className="mt-2 opacity-50 block mb-4"/>
        <div className="grid grid-flow-rows grid-cols-4 gap-4">
            <div className="mb-2 ">
                <div className="overflow-hidden rounded relative">
                  <Link href="/product/1">
                      <a>
                        <Image width="400" height="465" className="w-full h-40  transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/img-13.webp" alt="banner"/>
                      </a>
                  </Link>
                  <ShowProductShopNameAndLogo productid="1"/>
                </div>
                <div className="text-center">
                  <h1 className="text-pink-600 lg:font-bold md:font-bold sm:font-semibold xs:font-semibold sm:text-sm xs:text-sm">25% Off</h1>
                </div>
            </div>
            <div className="mb-2 ">
                <div className="overflow-hidden rounded relative">
                  <Link href="/product/2">
                      <a>
                        <Image width="400" height="465" className="w-full h-40  transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/cap-3.png" alt="banner"/>
                      </a>
                  </Link>
                  <ShowProductShopNameAndLogo productid="1"/>
                </div>
                <div className="text-center">
                  <h1 className="text-pink-600 lg:font-bold md:font-bold sm:font-semibold xs:font-semibold sm:text-sm xs:text-sm">5% Off</h1>
                </div>
            </div>
            <div className="mb-2 ">
                <div className="overflow-hidden rounded relative">
                  <Link href="/product/3">
                      <a>
                        <Image width="400" height="465" className="w-full h-40 transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/img-33.webp" alt="banner"/>
                      </a>
                  </Link>
                  <ShowProductShopNameAndLogo productid="1"/>
                </div>
                <div className="text-center">
                  <h1 className="text-pink-600 lg:font-bold md:font-bold sm:font-semibold xs:font-semibold sm:text-sm xs:text-sm">15% Off</h1>
                </div>
            </div>
            <div className="mb-2">
                <div className="overflow-hidden rounded relative">
                  <Link href="/product/4">
                      <a>
                        <Image width="400" height="465" className="w-full h-40  transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/img-37.webp" alt="banner"/>
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