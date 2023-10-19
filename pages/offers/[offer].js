import Head from 'next/head'
import ProductComponent from './../product/product_component.js'
import ProductSlide from './../sliders/product_slider.js'
import TopSellesProduct from './../product/top-selles-product.js'
import NewAndArraivalsProduct from './../product/new-and-arraivals-product.js'
import CollectionProduct from './../product/collection-product.js'
const product=[
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

export default function ProductsOffer(){
	return(<>
		<Head>
			<title>Dakdakum | products Offers</title>
		</Head>
		<div className="p-2 text-center bg-green-600 mb-8">
			<h1 className="text-3xl text-white font-semibold">Free shipping</h1>
		</div>
		{/*start searching item section*/}
	     <div className="ml-2 mr-2 mb-8 bg-gray-100 lg:p-4 md:p-4 sm:p-2 xs:p-1 border">
	        {/* start product container */}
	        <div className="grid grid-flow-rows lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 lg:gap-4 md:gap-4 sm:gap-2 xs:gap-2">
	          {/* start product container */}
	          {
	            product.map(data=>{
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

	    <NewAndArraivalsProduct/>

	    <CollectionProduct/>
	   
		  <TopSellesProduct/>

	</>)
}