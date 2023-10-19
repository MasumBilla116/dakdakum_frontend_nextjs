import Link from 'next/link'
import ProductSlide from './../sliders/product_slider.js'
import Head from 'next/head'
import Image from 'next/image'
import ProductReview from './../product/product-review.js'
import QuestionAns from './../product/product-question-ans.js'
import TopSellesProduct from './../product/top-selles-product.js'
import RelatedProduct from './related-product.js'
import ProductFeture from './product-feture.js'
import ProductInformation from './../details/product-information.js'
import TopSubProduct from './sub-product/top-sub-product.js'
import BottomSubProduct from './sub-product/bottom-sub-product.js'
import ShopNameLogoAndSubscribeBtn from './sub-components/shop-name-logo-and-subscribe-btn.js'
export default function productDashboard(){
	return(<>
		<Head>
			<title>Product dashboard</title>
		</Head>
		{/* start product dashboard */}
		<div className="ml-2 mr-2 mb-8 mt-8 bg-gray-100 lg:p-4 md:p-2 sm:p-1 xs:p-1 border">
		    <div className="bg-white p-2 rounded border">
		        <div className="grid grid-flow-rows lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4">
		            <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 xs:col-span-1">
		                <div className="zoom-con " data-zoom="zoom-1">
		                    <img src="/images/product/img-17.webp" className="w-full rounded pro-bg-white-gray zoom-1 src-1"/>
		                    <div className="lens"></div>
		                </div>
		            </div>
	                {/*start sub product*/}
	                <div className="p-2 border-b border-t bg-gray-50 lg:hidden md:hidden sm:block xs:block">
	                    <div className="grid grid-flow-rows grid-cols-6 gap-2 size-error-msg">
	                        <TopSubProduct />
	                    </div>
	                </div>
	                {/*start select color size etc*/}
	                <div className="border-b pb-2 lg:hidden md:hidden sm:block xs:block">
	                    <div className="grid grid-flow-rows grid-cols-5">
	                        {/* start size */}
	                        <div className="col-span-2">
	                            <div>
	                                <label className="text-indigo-500" htmlFor="size">Size :</label>
	                                <select className="focus:outline-none rounded bg-blueviolet border text-white size" name="pro-size" id="pro-size">
	                                    <option value="all">All</option>
	                                    <option value="small">Small</option>
	                                    <option value="medium">Medium</option>
	                                    <option value="large">Large</option>
	                                    <option value="xl">X-large</option>
	                                    <option value="2x-l">2x-large</option>
	                                    <option value="3x-l">3x-large</option>
	                                    <option value="x">1x</option>
	                                </select>
	                            </div>
	                        </div>
	                        {/* color */}
	                        <div className="col-span-2">
	                            <h1 className="text-gray-500 inline-block">Color :</h1>
	                            <span className="text-green-600" id="color">White</span>
	                        </div>
	                        {/* color */}
	                        <div className="flex justify-center">
	                            <div className="flex text-orange-red text-xs  mt-1 pt-1">
	                                <i className="fas fa fa-star mr-1" aria-hidden="true"></i>
	                                <i className="fas fa fa-star mr-1" aria-hidden="true"></i>
	                                <i className="fas fa fa-star mr-1" aria-hidden="true"></i>
	                                <i className="fas fa fa-star mr-1" aria-hidden="true"></i>
	                                <i className="fas fa fa-star mr-1" aria-hidden="true"></i>
	                            </div>
	                        </div>
	                    </div>
	                </div>
		            <div className="lg:col-span-2 md:col-span-2 sm:col-span-1 xs:col-span-1">
		                <div className="container mx-auto">
		                	{/*in stack,catagory brand and shop section*/}
		                    <div className="grid grid-flow-rows grid-cols-2  mb-2 border-b">
		                    	{/*in stack,catagory brand section*/}
		                    	<div>
		                    		<div className="flex flex-wrap justify-start mb-2 ">
				                        <div className="bg-gradient-to-l from-gray-300 to-blue-900 p-1 text-white font-semibold flex items-center sm:text-sm xs:text-sm">
				                            <i className="fa fa-check-circle mr-1 "></i> 
				                            <h1 className="inline-block">Ready To Ship</h1>
				                        </div>
				                        <div className="bg-gradient-to-l from-blue-900 to-gray-300 p-1 text-white font-semibold flex items-center sm:text-sm xs:text-sm">
				                            <i className="fa fa-check-circle mr-1 "></i> 
				                            <h1 className="inline-block">In Stock</h1>
				                        </div>
				                        <div className="bg-gradient-to-l from-gray-300 to-blue-900 p-1 text-white font-semibold flex items-center sm:text-sm xs:text-sm">
				                            <i className="fa fa-check-circle mr-1 "></i> 
				                            <h1 className="inline-block">Free Return</h1>
				                        </div>
				                    </div>
				                    <div className="pb-2">
				                        <div>
				                            <h1 className="font-bold text-gray-500 inline-block">Catagory : </h1>
				                            <a href="#" className="text-indigo-500 transition-all ease-in duration-500 hover:text-indigo-700 hover:underline">T-Shirt</a>
				                        </div>
				                        <div>
				                            <h1 className="font-bold text-gray-500 inline-block">Availability : </h1>
				                            <p className="text-gray-400 inline-block"> many to stock</p>
				                        </div>
				                        <div>
				                            <h1 className="font-bold text-gray-500 inline-block">Brand : </h1>
				                            <a href="#" className="text-gray-400 inline-block">Lotto</a>
				                        </div>
				                    </div>
		                    	</div>
		                    	{/*shop name and subscript section*/}
		                    	<ShopNameLogoAndSubscribeBtn/>
		                   	</div>
		                    <div className="mb-2 pb-2 border-b">
		                        <div>
		                            <h1 className="font-bold text-2xl text-gray-500 inline-block">Sample :</h1>
		                            <p className="text-gray-500 inline-block"> Tk: 580.00 Piece, 1 Piece ( Min. Order )</p>
		                        </div>
		                        <div>
		                            <article className="text-md text-gray-500">
		                                <p> PYJTRL Men Fashion Three Pieces Set Business Casual Slim Fit Suits Wedding Groomsman Groom Colorful Dress Suit Costume Homme</p>
		                            </article>
		                        </div>
		                    </div>
		                    <div className="mb-2 pb-2 border-b">
		                        <div>
		                            <h1 className="font-bold text-2xl text-gray-500 inline-block">Customization  :</h1>
		                            <p className="text-gray-500 inline-block">
		                                Other style lapel for each size/color ( Min. Order: 10 Pieces )
		                                <Link href="/shipping/1">
		                                	<a className="text-indigo-500 font-semibold transition-all ease-in duration-500 hover:text-indigo-700 hover:underline">Order Now</a>
		                                </Link>
		                            </p>
		                        </div>
		                        <div>
		                            <h1 className="text-gray-500 font-semibold text-xl">
		                                <i className="fa fa-certificate text-pink-400 mr-2 "></i> Trade Assurance 
		                                <small> protects your </small>
                                    <Link href="/">
		                                    <a className="text-indigo-500 font-semibold transition-all ease-in duration-500 hover:text-indigo-700 hover:underline"> dakdakum.com
		                                    </a>  
                                    </Link>
                                    <small> orders </small>
		                            </h1>
		                        </div>
		                    </div>
		                    <div className="pb-2 border-b">
		                        <div className="grid grid-flow-rows grid-cols-3 gap-4">
		                            <div className="flex flex-wrap items-center justify-center ">
		                                <p className="text-md text-pink-600 font-semibold">5% Off</p>
		                            </div>
		                            <div className="flex flex-wrap justify-center items-center">
		                                <p className="text-md text-pink-600 font-semibold">680 Tk.</p>
		                            </div>
		                            <div className="flex flex-wrap justify-center items-center">
		                                <p className="text-md font-bold text-green-500">580 Tk.</p>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="p-2 border-b lg:block md:block sm:hidden xs:hidden">
		                        <div className="flex itens-center">
		                            {/* start size */}
		                            <div className="mr-2">
		                                <div>
		                                    <label className="font-semibold text-indigo-500 text-xl" htmlFor="size">Size :</label>
		                                    <select className="focus:outline-none ml-2 rounded bg-blueviolet border text-white size" name="size" id="size">
		                                        <option value="all">All</option>
		                                        <option value="small">Small</option>
		                                        <option value="medium">Medium</option>
		                                        <option value="large">Large</option>
		                                        <option value="xl">X-large</option>
		                                        <option value="2x-l">2x-large</option>
		                                        <option value="3x-l">3x-large</option>
		                                        <option value="x">1x</option>
		                                    </select>
		                                </div>
		                            </div>
		                            {/* color */}
		                            <div className="mr-2 p-1">
		                                <h1 className="text-xl font-semibold text-gray-500 inline-block">Color :</h1>
		                                <span className="text-green-600" id="color">White</span>
		                            </div>
		                            {/* color */}
		                            <div className="mr-2 p-1 flex justify-center">
		                                <h1 className="text-xl font-semibold text-red-500 mr-2">Rating :</h1>
		                                <div className="flex text-orange-red text-sm mt-1 pt-1">
		                                    <i className="fas fa fa-star mr-1" aria-hidden="true"></i>
		                                    <i className="fas fa fa-star mr-1" aria-hidden="true"></i>
		                                    <i className="fas fa fa-star mr-1" aria-hidden="true"></i>
		                                    <i className="fas fa fa-star mr-1" aria-hidden="true"></i>
		                                    <i className="fas fa fa-star mr-1" aria-hidden="true"></i>
		                                </div>
		                            </div>
		                            {/* color selected option */}
		                            <div className="mr-2 hidden">
		                                <div>
		                                    <label className="font-semibold text-indigo-500 text-xl" htmlFor="colo_selection">Color :</label>
		                                    <select className="focus:outline-none rounded border-pink-500" name="color-selection" id="colo_selection">
		                                        <option value="all">White</option>
		                                        <option value="small">Black</option>
		                                        <option value="medium">Orange</option>
		                                        <option value="large">Green</option>
		                                        <option value="xl">Blue</option>
		                                        <option value="2x-l">Gray</option>
		                                    </select>
		                                </div>
		                            </div>
		                        </div>
		                    </div>
		                    <div className="mb-2 p-2 border-b bg-gray-50 lg:block md:block sm:hidden xs:hidden">
		                        
		                        <div className="flex flex-wrap justify-center items-center size-error-msg">
		                            <BottomSubProduct/>
		                        </div>
		                    </div>
		                    <div className="mb-2 p-4 ">
		                        <div className="grid grid-flow-rows grid-cols-2 gap-4">
		                            <div className="flex flex-wrap justify-center items-center">
		                                <button className="pt-1 pb-1 pl-2 pr-2 focus:outline-none  rounded bg-blue-600 transition-all ease-in duration-500 hover:bg-blue-800 text-white font-semibold">Add to cart <i className="fa fa-shopping-bag cursor-pointer ml-2"></i></button>
		                            </div>
		                            <div className="flex flex-wrap justify-center items-center">
                                  <Link href={"/shipping/1"}>
		                                <a className="pt-1 pb-1 pl-2 pr-2 focus:outline-none  rounded bg-blue-600 transition-all ease-in duration-500 hover:bg-blue-800 text-white font-semibold cursor-pointer">Shipping Now</a>
                                  </Link>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		</div>
		{/* end product dashboard */}
		<RelatedProduct/>
		<ProductFeture/>
		<ProductInformation />
		<QuestionAns/>
		<ProductReview/>
		<TopSellesProduct/>
	</>)
}