import Head from 'next/head'
import ProductComponent from './../product/product_component.js'
import ProductSlide from './../sliders/product_slider.js'
import TopSelles from './../product/top-selles.js'
const product1=[
  {
    id      :   1,
    src     :   "img-17.webp",
    discount  :   8,
    title   :   "t-shirt",
    purch   :   3253,
    price   :   2156
  },
  {
    id      :   2,
    src     :   "img-1.webp",
    discount  :   10,
    title   :   "t-shirt",
    purch   :   54874,
    price   :   12313
  },
  {
    id      :   3,
    src     :   "img-3.webp",
    discount  :   12,
    title   :   "t-shirt",
    purch   :   19850,
    price   :   1200
  },
  {
    id      :   4,
    src     :   "img-2.webp",
    discount  :   10,
    title   :   "t-shirt",
    purch   :   5486,
    price   :   1200
  },
  {
    id      :   5,
    src     :   "img-8.webp",
    discount  :   32,
    title   :   "t-shirt",
    purch   :   89752,
    price   :   1200
  },
  {
    id      :   6,
    src     :   "img-9.jpg",
    discount  :   9,
    title   :   "t-shirt",
    purch   :   231534,
    price   :   25646
  },
  {
    id      :   7,
    src     :   "img-14.jpg",
    discount  :   30,
    title   :   "t-shirt",
    purch   :   4787,
    price   :   1200
  },
  {
    id      :   8,
    src     :   "img-15.jpg",
    discount  :   3,
    title   :   "t-shirt",
    purch   :   1250,
    price   :   1200
  },
  {
    id      :   9,
    src     :   "img-16.webp",
    discount  :   15,
    title   :   "t-shirt",
    purch   :   10250,
    price   :   1560
  },
  {
    id      :   10,
    src     :   "img-20.webp",
    discount  :   3,
    title   :   "t-shirt",
    purch   :   15645,
    price   :   12343
  },
  {
    id      :   11,
    src     :   "img-22.webp",
    discount  :   4,
    title   :   "t-shirt",
    purch   :   1250,
    price   :   1200
  },
  {
    id      :   12,
    src     :   "img-24.webp",
    discount  :   9,
    title   :   "t-shirt",
    purch   :   45445,
    price   :   54864
  },
]
const product2=[
  {
    id      :   1,
    src     :   "img-17.webp",
    discount  :   8,
    title   :   "t-shirt",
    purch   :   3253,
    price   :   2156
  },
  {
    id      :   2,
    src     :   "img-1.webp",
    discount  :   10,
    title   :   "t-shirt",
    purch   :   54874,
    price   :   12313
  },
  {
    id      :   3,
    src     :   "img-3.webp",
    discount  :   12,
    title   :   "t-shirt",
    purch   :   19850,
    price   :   1200
  },
  {
    id      :   4,
    src     :   "img-2.webp",
    discount  :   10,
    title   :   "t-shirt",
    purch   :   5486,
    price   :   1200
  },
  {
    id      :   5,
    src     :   "img-8.webp",
    discount  :   32,
    title   :   "t-shirt",
    purch   :   89752,
    price   :   1200
  },
  {
    id      :   6,
    src     :   "img-9.jpg",
    discount  :   9,
    title   :   "t-shirt",
    purch   :   231534,
    price   :   25646
  },
  {
    id      :   7,
    src     :   "img-14.jpg",
    discount  :   30,
    title   :   "t-shirt",
    purch   :   4787,
    price   :   1200
  },
  {
    id      :   8,
    src     :   "img-15.jpg",
    discount  :   3,
    title   :   "t-shirt",
    purch   :   1250,
    price   :   1200
  },
  {
    id      :   9,
    src     :   "img-16.webp",
    discount  :   15,
    title   :   "t-shirt",
    purch   :   10250,
    price   :   1560
  },
  {
    id      :   10,
    src     :   "img-20.webp",
    discount  :   3,
    title   :   "t-shirt",
    purch   :   15645,
    price   :   12343
  },
  {
    id      :   11,
    src     :   "img-22.webp",
    discount  :   4,
    title   :   "t-shirt",
    purch   :   1250,
    price   :   1200
  },
  {
    id      :   12,
    src     :   "img-24.webp",
    discount  :   9,
    title   :   "t-shirt",
    purch   :   45445,
    price   :   54864
  },
]
export default function SearchItems(){
	return(<>
		<Head>
			<title>Dakdakum | Searching products</title>
		</Head>
		<div className="p-2 text-center bg-green-600 mb-8">
			<h1 className="text-3xl text-white font-semibold">Your Searching Items</h1>
		</div>
    {/*start searching item section*/}
     <div className="container mx-auto mb-8 bg-gray-100 lg:p-4 md:p-4 sm:p-2 xs:p-1 border">
        {/* start product container */}
        <div className="grid grid-flow-rows lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 lg:gap-4 md:gap-4 sm:gap-2 xs:gap-2">
          {/* start product container */}
          {
            product1.map(data=>{
              return(
                <ProductComponent pro={data} key={data.id}/>
              )
            })
          }
        </div>
        {/* end product container */}
        <div className="mt-4 w-full">
            <div className="grid grid-flow-rows grid-cols-2">
                <div></div>
                <div>
                    <a href="#" className="p-2 rounded bg-green-500 hover:bg-green-600 ring-1 ring-offset-2  text-center text-white text-xs font-semibold float-right">Show more</a>
                </div>
            </div>
            
        </div>
    </div>
    {/*end searching item section */}
    {/* start product slide */}
    <div className="container mx-auto mb-8">
        <div className="grid grid-flow-rows lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-8 xs:grid-cols-8">
            <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 xs:col-span-3">
                <h1 className="lg:text-3xl md:text-2xl sm:text-2xl xs:text-xl lg:ml-0 md:ml-2 sm:ml-4 xs:ml-2 text-orange-red font-bold mt-4">
                  New &amp; Arrivals
                </h1>
            </div>
            <div className="lg:col-span-8 md:col-span-6 sm:col-span-6 xs:col-span-5 mt-4 flex flex-wrap items-center justify-cente">
                <hr className="bg-gray-100 w-full h-2 rounded-full" />  
            </div>
        </div>
    </div>
    <div className="container mx-auto p-2 bg-gray-50 border rounded mb-8">
      <ProductSlide/>
    </div>
    {/* end product slide */}
    {/* start collection section */}
    <div className="container mx-auto mb-8">
        <div className="grid grid-flow-rows lg:grid-cols-6 md:grid-cols-5  sm:grid-cols-8 xs:grid-cols-8">
            <div className="-mt-2 lg:col-span-1  md:col-span-1 sm:col-span-2 xs:col-span-3">
                <h1 className="lg:text-3xl md:text-2xl sm:text-2xl xs:text-xl lg:ml-0 md:ml-2 sm:ml-2 xs:ml-2 text-orange-red font-bold mt-4">
                    Collection
                </h1>
            </div>
            <div className="lg:col-span-5 md:col-span-4 sm:col-span-6 xs:col-span-5 mt-4 flex flex-wrap items-center justify-cente">
                <hr className="bg-gray-100 w-full h-2 rounded-full" />  
            </div>
        </div>
    </div>
    {/*end collection heading*/}
     <div className="container mx-auto mb-8 bg-gray-100 lg:p-4 md:p-4 sm:p-2 xs:p-1 border">
        {/* start product container */}
        <div className="grid grid-flow-rows lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 lg:gap-4 md:gap-4 sm:gap-2 xs:gap-2">
          {/* start product container */}
          {
            product2.map(data=>{
              return(
                <ProductComponent pro={data} key={data.id}/>
              )
            })
          }
        </div>
        {/* end product container */}
        <div className="mt-4 w-full">
            <div className="grid grid-flow-rows grid-cols-2">
                <div></div>
                <div>
                    <a href="#" className="p-2 rounded bg-green-500 hover:bg-green-600 ring-1 ring-offset-2  text-center text-white text-xs font-semibold float-right">Show more</a>
                </div>
            </div>
            
        </div>
    </div>
    {/*end collection section */}
    {/* start top selles product */}
		<TopSelles/>
		{/* end top selles product */}
	</>);
}