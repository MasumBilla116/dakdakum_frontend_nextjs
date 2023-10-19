import Image from 'next/image'
import Link from 'next/link'
import ShowProductShopNameAndLogo from './../common/show-product-shop-name-and-logo.js'
export default function Product({pro}){
	return(
		<>
			{/* product container */}
            <div className="bg-white p-2 transition-all duration-500 hover:box-shadow-2xl hover:z-10">
                <div title="T-shirt" className="pro-bg-white-gray rounded relative overflow-hidden pro-con">
                      <Link href={"/product/"+pro.id}>
                          <a className="block">
                              <Image width="250" height="310" src={"/images/product/"+pro.src} className="w-full rounded transform transition-all duration-500 hover:scale-110"/>
                              
                          </a>
                      </Link>
                      <ShowProductShopNameAndLogo productid={pro.id}/>
                    <div className="pro-overlay-r absolute top-0 text-sm transition-all ease-in-out duration-500">
                        <div className="bg-white rounded-full text-gray-200 hover:text-gray-400 transition-all ease-in-out duration-500 mt-2 mr-2 cursor-pointer pro-ovrly-icon relative">
                            <div className="absolute pro-ovrly-icon-tooltip text-xs bg-white text-gray-400">Quick view</div>
                            <i className="fas fa fa-eye collapse-modal" data-target={"#modal"+pro.id}></i> 
                        </div>
                        <div className="bg-white rounded-full text-gray-200 hover:text-gray-400 transition-all ease-in-out duration-500 mt-2 mr-2 cursor-pointer pro-ovrly-icon relative">
                            <div className="absolute pro-ovrly-icon-tooltip text-xs bg-white text-gray-400">Add to cart</div>
                            <i className="fa fa-shopping-cart"></i>
                        </div>
                        <div className="bg-white rounded-full text-gray-200 hover:text-gray-400 transition-all ease-in-out duration-500 mt-2 mr-2 cursor-pointer pro-ovrly-icon relative">
                            <div className="absolute pro-ovrly-icon-tooltip text-xs bg-white text-gray-400">Shipp now</div>
                            <Link href={"/shipping/"+pro.id}>
                              <a><i className="fa fa-car"></i></a>
                            </Link>
                        </div>
                    </div>
                    <div className="pro-overlay-r absolute top-0 lg:hidden md:block sm:block xs:block right-0  text-sm transition-all ease-in-out duration-500">
                        <div className="bg-white rounded-full text-gray-200 hover:text-gray-400 transition-all ease-in-out duration-500 mt-2 mr-2 cursor-pointer pro-ovrly-icon relative">
                            <div className="absolute pro-ovrly-icon-tooltip text-xs bg-white text-gray-400">Quick view</div>
                            <i className="fas fa fa-eye collapse-modal" data-target={"#modal"+pro.id}></i> 
                        </div>
                        <div className="bg-white rounded-full text-gray-200 hover:text-gray-400 transition-all ease-in-out duration-500 mt-2 mr-2 cursor-pointer pro-ovrly-icon relative">
                            <div className="absolute pro-ovrly-icon-tooltip text-xs bg-white text-gray-400">Add to cart</div>
                            <i className="fa fa-shopping-cart"></i>
                        </div>
                        <div className="bg-white rounded-full text-gray-200 hover:text-gray-400 transition-all ease-in-out duration-500 mt-2 mr-2 cursor-pointer pro-ovrly-icon relative">
                            <div className="absolute pro-ovrly-icon-tooltip text-xs bg-white text-gray-400">Shipp now</div>
                            <i className="fa fa-car"></i>
                        </div>
                    </div>
                </div>
                {/* Start product modal */}
                <div className="modal " id={"modal"+pro.id}>
                  <div className="modal-wrap">
                      <div className="modal-dialog lg:w-1/2 md:w-1/2 sm:w-2/3 xs:w-full">
                          <div className="lg:mb-2 md:mb-2 sm:mb-0 xs:mb-0 border-b bg-gray-100">
                              <div className="grid grid-flow-rows grid-cols-3 gap-4">
                                  <div className="col-span-2 flex flex-wrap items-center justify-end pr-10">
                                      <h1 className="font-semibold text-md text-green-500">Add to card <span className="font-bold italic text-pink-600"> Item (0) </span></h1>
                                  </div>
                                  <div className="flex justify-end">
                                      <button className="focus:outline-none text-3xl text-gray-500 font-bold p-1 close" data-target={"#modal"+pro.id}>&times;</button>
                                  </div>
                              </div>
                          </div>
                          <div className="modal-content">
                              <div className="lg:hidden md:block sm:block xs:block">
                                  <div className="flex justify-center items-center">
                                      <div className="mr-2 mb-1">
                                          <button className="focus:outline-none bg-green-600 text-white text-center font-bold rounded p-1 pr-2 pl-2 transition-all ease-in-out duration-500 hover:bg-green-700 lg:text-md md:text-sm sm:text-sm xs:text-sm">
                                              Add cart
                                              <i className="fas fa fa-shopping-cart"></i>
                                          </button>
                                      </div>
                                      <div className="mb-1">
                                          <a href="#" className="text-center font-bold text-white bg-green-600 transitiona-all ease-in-out duration-500 hover:bg-green-700 p-1 pr-2 pl-2 rounded lg:text-md md:text-sm sm:text-sm xs:text-sm">Shipping</a>
                                      </div>
                                  </div>
                              </div>
                              <div className="flex justify-center items-center">
                                  <div className="mb-2 relative zoom-con" data-zoom={"zoom-"+pro.id}>
                                      <Image title={pro.title} width="250" height="310" src={"/images/product/"+pro.src} className={"w-full rounded pro-bg-white-gray zoom-"+pro.id}/>
                                      <div className="lens lg:block md:hidden sm:hidden xs:hidden"></div>
                                  </div>
                              </div>
                          </div>
                          <div className="modal-footer lg:w-4/5 sm:w-full md:w-full ">
                              <div className="lg:block md:hidden sm:hidden xs:hidden">
                                  <div className="grid grid-flow-rows lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3">
                                      <div className="mb-2">
                                          <div className="flex flex-wrap justify-center">
                                              <button className="focus:outline-none bg-pink-600 text-white text-center font-bold rounded-tl rounded-bl pr-2 pl-2 lg:pb-1 md:pb-2 sm:pb-2 lg:pt-1 md:pt-2 sm:pt-2 transition-all ease-in-out duration-500 hover:bg-pink-700 lg:text-2xl md:text-md sm:text-md">&minus;</button>
                                              <span className="bg-pink-600 font-bold text-center text-white pr-2 pl-2 lg:pb-1 md:pb-2 sm:pb-2 lg:pt-1 md:pt-2 sm:pt-2 border-r border-l border-pink-700 lg:text-2xl md:text-md sm:text-md">0</span>
                                              <button className="focus:outline-none bg-pink-600 text-white text-center font-bold rounded-tr rounded-br pr-2 pl-2 lg:pb-1 md:pb-2 sm:pb-2 lg:pt-1 md:pt-2 sm:pt-2 transition-all ease-in-out duration-500 hover:bg-pink-700 lg:text-2xl md:text-md sm:text-md">+</button>
                                          </div>
                                      </div>
                                      <div className="mb-2 flex justify-center">
                                          <button className="focus:outline-none bg-green-600 text-white text-center font-bold rounded p-2 transition-all ease-in-out duration-500 hover:bg-green-700 lg:text-md md:text-sm sm:text-sm">
                                              Add cart
                                              <i className="fas fa fa-shopping-cart"></i>
                                          </button>
                                      </div>
                                      <div className="mb-2 flex justify-center">
                                          <a href="#" className="text-center font-bold text-white bg-green-600 transitiona-all ease-in-out duration-500 hover:bg-green-700 p-2 rounded lg:text-md md:text-sm sm:text-sm">Shipping</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="border-t flex justify-end bg-gray-100 p-2">
                              <button className="focus:outline-none text-md rounded text-white bg-pink-500 transition-all ease-in-out duration-500 hover:bg-pink-600 font-bold p-2 close" data-target={"#modal"+pro.id}>close</button>
                          </div>
                      </div>
                  </div>
                </div>
                {/* end product modal */}
                <div className="w-full text-center">
                    <div>
                        <p className="font-bold text-warning text-shadow-1">{pro.discount}% off</p>
                        <div className="text-red-500 ">
                            <i className="fa fa-star text-xs inline-block text-shadow-1"></i>
                            <i className="fa fa-star text-xs inline-block text-shadow-1"></i>
                            <i className="fa fa-star text-xs inline-block text-shadow-1"></i>
                            <i className="fa fa-star text-xs inline-block text-shadow-1"></i>
                            <i className="fa fa-star text-xs inline-block text-shadow-1"></i>
                        </div>
                        <h1 className="text-gray-500 font-semibold">{pro.title}</h1>
                        <h1 className="font-bold text-gray-600"><del className="inline-block text-warning">{pro.purch} tk</del> {pro.price} tk</h1>
                    </div>
                </div>
            </div>
      
		</>
	)
}