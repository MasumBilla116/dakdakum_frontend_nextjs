import ReviewModal from './../sliders/modal-inner-slide.js'

export default function Review(){
	return(<>
			{/* start customer review */}
			<div className="max-w-full  mb-8 mt-8 p-4">
			    <h1 className="text-3xl text-green-500 text-shadow-1 font-bold mt-4 mb-4 pb-2 border-b-2">Customer review</h1>
			    <div className="container mx-auto">
			        {/* review */}
			        <div className="grid grid-flow-rows lg:grid-cols-12 md:grid-cols-10 sm:grid-cols-1 border-b p-2 mb-4">
			            <div className="lg:col-span-1 md:col-span-1 ">
			                <div className="p-1 rounded-full border w-16 h-16">
			                    <img className="rounded-full w-full" src="/images/system-icon/avater.png"/>
			                </div>
			            </div>
			            <div className="lg:col-span-11  md:col-span-9">
			                <h1 className="text-md font-semibold text-italiq text-gray-600 border-b inline-block">Masum billa 
			                    <small className="text-gray-400">Posted on 2020-10-10</small>
			                </h1>
			                <article className="text-justify">
			                    <div className="w-16 float-left mr-2 mt-2 text-center">
			                        <img className="w-full rounded" src="/images/product/img-3.webp"/>
			                        <button type="button" className="focus:outline-none text-gray-200 transition-all ease-in-out duration-500 hover:text-gray-400">
			                            <i className="fas fa fa-eye collapse-modal" data-target="#review1"></i>
			                        </button>
			                    </div>
			                    {/* Start product modal */}
			                    <ReviewModal modalName="review1"/>
			                    {/* end product modal */}
			                    <p >Your use of this software is subject to the terms and conditions of the license agreement by which you acquired this software. If you are a volume license customer, use of this software is subject to your volume license agreement. You may not use this software if you have not validly acquired a license for the software from Microsoft or its licensed distributors Your use of this software is subject to the terms and conditions of the license agreement by which you acquired this software. If you are a volume license customer, use of this software is subject to your volume license agreement. You may not use this software if you have not validly acquired a license for the software from Microsoft or its licensed distributors .</p>
			                </article>
			            </div>
			        </div>
			         
			        <div className="w-full p-2 flex justify-center items-center">
			            <button type="button" className="focus:outline-none rounded border-green-600 bg-green-400 text-white p-2 text-center border-box shadow-lg cursor-pointer transition-all ease-in-out duration-500 hover:bg-green-500">See more review</button>
			        </div>
			    </div>
			</div>
			{/* end customer review */}
	</>);
}