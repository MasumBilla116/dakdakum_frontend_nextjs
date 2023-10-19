import Image from 'next/image'
import Link from 'next/link'

export default function TopSelles(){
	return(<>
		{/* start top selles product */}
        <div className="max-w-full mt-8 mb-8 ">
            <div className="ml-2 mr-2 mb-8">
                <div className="grid grid-flow-rows lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-3">
                    <div className="-mt-2 xs:col-span-1">
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl text-orange-red font-bold mt-4">
                            Top selles
                        </h1>
                    </div>
                    <div className="lg:col-span-5 md:col-span-3 sm:col-span-2 xs:col-span-2 mt-4 sm:col-span-2">
                        <div className="grid gird-flow-rows lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-6 xs:grid-cols-6">
                            <div className="lg:col-span-9 md:grid-cols-6 sm:col-span-4 xs:col-span-4 flex flex-wrap items-center justify-center">
                                <hr className="bg-gray-100 w-full h-2 rounded-full" />  
                            </div>
                            <div className="text-right flex justify-end lg:col-span-1 md:grid-cols-2 sm:col-span-2 xs:col-span-2">
                                <a className="lg:-mt-2 text-blue-400 transition-all duration-500 hover:text-blue-500 cursor-pointer font-bold" href="{{action('App\Http\Controllers\TopSellesController@index" target="_blank">
                                    selles
                                    <i className="fas fa fa-link"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* top selles content */}
            <div className="ml-2 mr-2 mt-4 bg-gray-100 lg:p-4 md:p-2 sm:p-2 xs:p-1 border">
                <div className="grid grid-flow-rows grid-cols-1">
                    <div className="grid grid-flow-rows lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-2">
                        {/*  */}
                        <div className="bg-white p-4 transition-all duration-500 hover:shadow-lg border">
                            <div>
                                <h1 className="text-gray-700 font-semibold text-italiq mb-2">Novelty and special use</h1>
                            </div>
                            <div className="overflow-hidden relative">
                                <div className="absolute top-1 left-1 bg-blue-500 p-0.5 text-center text-white z-10 text-xs font-semibold rounded">New</div>
                                <a href="#">
                                    <Image width="400" height="300" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/portfolio-img-3.webp" alt="banner"/>
                                </a>
                            </div>
                        </div>
                        {/*  */}
                        <div className="bg-white p-4 transition-all duration-500 hover:shadow-lg border">
                            <div>
                                <h1 className="text-gray-700 font-semibold text-italiq mb-2">Top Selles</h1>

                            </div>
                            <div className="overflow-hidden relative">
                                <div className="absolute top-1 left-1 bg-blue-500 p-0.5 text-center text-white z-10 text-xs font-semibold rounded">New</div>
                                <a href="#">
                                    <Image width="400" height="300" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/portfolio-img-4.webp" alt="banner"/>
                                </a>
                            </div>
                        </div>
                        {/*  */}
                        <div className="bg-white p-4 transition-all duration-500 hover:shadow-lg border">
                            <div>
                                <h1 className="text-gray-700 font-semibold text-italiq mb-2">Global original Sources</h1>
                            </div>
                            <a href="#" className="block">
                                <Image width="400" height="300" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/banner/header3.jpeg" alt="poster"/>
                            </a>
                        </div>
                        {/*  */}
                        <div className="bg-white p-4 transition-all duration-500 hover:shadow-lg border">
                            <div>
                                <h1 className="text-gray-700 font-semibold text-italiq mb-2">Novelty and special use</h1>
                            </div>
                            <div className="overflow-hidden relative">
                                <div className="absolute top-1 left-1 bg-blue-500 p-0.5 text-center text-white z-10 text-xs font-semibold rounded">New</div>
                                <a href="#">
                                   <Image width="400" height="300" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/portfolio-img-3.webp" alt="banner"/>
                                </a>
                            </div>
                        </div>
                        {/*  */}
                        <div className="bg-white p-4 transition-all duration-500 hover:shadow-lg border">
                            <div>
                                <h1 className="text-gray-700 font-semibold text-italiq mb-2">Top Selles</h1>
                            </div>
                            <div className="overflow-hidden relative">
                                <div className="absolute top-1 left-1 bg-blue-500 p-0.5 text-center text-white z-10 text-xs font-semibold rounded">New</div>
                                <a href="#">
                                    <Image width="400" height="300" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/portfolio-img-4.webp" alt="banner"/>
                                </a>
                            </div>
                        </div>
                        {/*  */}
                        <div className="bg-white p-4 transition-all duration-500 hover:shadow-lg border">
                            <div>
                                <h1 className="text-gray-700 font-semibold text-italiq mb-2">Global original Sources</h1>
                            </div>
                            <a href="#" className="block">
                                <Image width="400" height="300" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/banner/header3.jpeg" alt="poster"/>
                            </a>
                        </div>
                        {/*  */}
                        <div className="bg-white p-4 transition-all duration-500 hover:shadow-lg border">
                            <div>
                                <h1 className="text-gray-700 font-semibold text-italiq mb-2">Novelty and special use</h1>
                            </div>
                            <div className="overflow-hidden relative">
                                <div className="absolute top-1 left-1 bg-blue-500 p-0.5 text-center text-white z-10 text-xs font-semibold rounded">New</div>
                                <a href="#">
                                    <Image width="400" height="300" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/portfolio-img-3.webp" alt="banner"/>
                                </a>
                            </div>
                        </div>
                        {/*  */}
                        <div className="bg-white p-4 transition-all duration-500 hover:shadow-lg border">
                            <div>
                                <h1 className="text-gray-700 font-semibold text-italiq mb-2">Top Selles</h1>

                            </div>
                            <div className="overflow-hidden  relative">
                                <div className="absolute top-1 left-1 bg-blue-500 p-0.5 text-center text-white z-10 text-xs font-semibold rounded">New</div>
                                <a href="#">
                                    <Image width="400" height="300" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/portfolio-img-4.webp" alt="banner"/>
                                </a>
                            </div>
                        </div>
                        {/*  */}
                        <div className="bg-white p-4 transition-all duration-500 hover:shadow-lg border">
                            <div>
                                <h1 className="text-gray-700 font-semibold text-italiq mb-2">Global original Sources</h1>
                            </div>
                            <a href="#" className="block">
                                <Image width="400" height="300" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/banner/header3.jpeg" alt="poster"/>
                            </a>
                        </div>
                        {/*  */}
                        <div className="bg-white p-4 transition-all duration-500 hover:shadow-lg border">
                            <div>
                                <h1 className="text-gray-700 font-semibold text-italiq mb-2">Novelty and special use</h1>
                            </div>
                            <div className="overflow-hidden relative">
                                <div className="absolute top-1 left-1 bg-blue-500 p-0.5 text-center text-white z-10 text-xs font-semibold rounded">New</div>
                                <a href="#">
                                    <Image width="400" height="300" className="w-full transition-all duration-500 ease-in-out transform hover:scale-110" src="/images/product/portfolio-img-3.webp" alt="banner"/>
                                </a>
                            </div>
                        </div>
                        {/*  */}
                    </div>
                </div>
            </div>
        </div>
        {/* end top selles product */}

	</>)
}