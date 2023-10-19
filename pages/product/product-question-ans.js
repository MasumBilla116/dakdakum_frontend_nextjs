

export default function QuestionAns(){
	return(<>
			{/* start have a question */}
			<div className="max-w-full p-4 mb-4  ">
			    <h1 className="text-3xl text-green-500 text-shadow-1 font-bold mt-4 mb-4 pb-2 border-b-2">Customer Question &amp; Answer</h1>
			    <div className="container mx-auto">
			        <div className="grid grid-flow-rows grid-cols-1">
			            <div className="mb-4">
			                <div className="w-full mb-4 pb-4">
			                    <h1 className="text-2xl font-bold text-indigo-500 mb-4 p-2 border-b-2 inline-block">Type Your Question</h1>
			                    <form className="block">
			                        <input type="search" onChange={e=>{}} name="question" value="" className="w-full rounded-sm p-2 transition-all ease-in-out duration-500 border-box bg-gray-50 focus:bg-transparent focus:outline-none border border-gray-100 focus:border-blue-600" placeholder="Have a question.................."/>
			                    </form>
			                </div>
			                {/* start Q&A */}
			                <div className="">
			                    <article className="p-1 border-l-2 mb-4">
			                        <div>
			                             <h1 className="text-md font-semibold text-pink-600 inline-block">Question : </h1>
			                            <p className="inline-block font-semibold text-indigo-500">Does Otter Box offer a shoulder strap or had strap for this case ?</p>
			                        </div>
			                        <div>
			                             <h1 className="text-md font-semibold text-green-500 inline-block">Answer : </h1>
			                            <p className="inline-block font-semibold text-gray-500">They sell the strap for the 10” and I tried it today and it does stretch far enough for the 12</p>
			                        </div>
			                    </article>
			                    <article className="p-1 border-l-2 mb-4">
			                        <div>
			                             <h1 className="text-md font-semibold text-pink-600 inline-block">Question : </h1>
			                            <p className="inline-block font-semibold text-indigo-500">Does Otter Box offer a shoulder strap or had strap for this case ?</p>
			                        </div>
			                        <div>
			                             <h1 className="text-md font-semibold text-green-500 inline-block">Answer : </h1>
			                            <p className="inline-block font-semibold text-gray-500">They sell the strap for the 10” and I tried it today and it does stretch far enough for the 12</p>
			                        </div>
			                    </article>
			                    <article className="p-1 border-l-2 mb-4">
			                        <div>
			                             <h1 className="text-md font-semibold text-pink-600 inline-block">Question : </h1>
			                            <p className="inline-block font-semibold text-indigo-500">Does Otter Box offer a shoulder strap or had strap for this case ?</p>
			                        </div>
			                        <div>
			                             <h1 className="text-md font-semibold text-green-500 inline-block">Answer : </h1>
			                            <p className="inline-block font-semibold text-gray-500">They sell the strap for the 10” and I tried it today and it does stretch far enough for the 12</p>
			                        </div>
			                    </article>
			                    <article className="p-1 border-l-2 mb-4">
			                        <div>
			                             <h1 className="text-md font-semibold text-pink-600 inline-block">Question : </h1>
			                            <p className="inline-block font-semibold text-indigo-500">Does Otter Box offer a shoulder strap or had strap for this case ?</p>
			                        </div>
			                        <div>
			                             <h1 className="text-md font-semibold text-green-500 inline-block">Answer : </h1>
			                            <p className="inline-block font-semibold text-gray-500">They sell the strap for the 10” and I tried it today and it does stretch far enough for the 12</p>
			                        </div>
			                    </article>
			                    <div className="w-full p-2 flex justify-center items-center">
			                        <button type="button" className="focus:outline-none rounded border-green-600 bg-green-400 text-white p-2 text-center border-box shadow-lg cursor-pointer transition-all ease-in-out duration-500 hover:bg-green-500">See more question and answer</button>
			                    </div>
			                </div>
			                {/* end Q&A */}
			            </div>
			        </div>
			    </div>
			</div>
			{/* end have a question */}

	</>)
}