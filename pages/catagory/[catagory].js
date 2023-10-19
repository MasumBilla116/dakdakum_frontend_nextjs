import Head from 'next/head'
import Link from 'next/link'
import ProductComponent from './../product/product_component.js'
import ProductSlide from './../sliders/product_slider.js'
import TopSellesProduct from './../product/top-selles-product.js'
import CatAndSubCatagory from './cat-and-sub-catagory.js'
import CollectionProduct from './../product/collection-product.js'
import NewAndArraivalProduct from './../product/new-and-arraivals-product.js'

const product1 =[
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
export default function CatagoryProduct(){
	return(<>
		<Head>
			<title>DakDakum | catagory wise product</title>
		</Head>

		<div className="p-2 w-full max-min-toggler-con hidden">
			<h1 className="w-full mb-2 text-white p-2 bg-green-500 text-xl text-center font-semibold">Your Catagories product</h1>
			<div className="flex justify-center items-center">
				<h1 className="font-semibold text-gray-500 mr-2">
					Catagory
				</h1>
				<hr className="w-full bg-green-500"/>
				<button type="button" className="focus:outline-none focus:ring-0 p-1 text-center minimize-tabs text-gray-500" data-minimize="#minimize" data-maximize="#maximize" data-maxdata-toggle="#maxdata">
					<i className="fa fa-window-minimize"></i>
				</button>
				<button type="button" className="focus:outline-none focus:ring-0 p-1 text-center maximize-tabs text-gray-500" data-minimize="#minimize" data-maximize="#maximize" data-maxdata-toggle="#maxdata">
					<i className="fa fa-window-maximize"></i>
				</button>
			</div>
		</div>
		<div className="w-full p-2">
			<div id="maximize" className="grid grid-flow-rows lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 lg:gap-4 md:gap-2 sm:gap-0 xs:gap-0">
				<CatAndSubCatagory/>
				<div className="col-span-2">
					<div className="bg-gray-100 p-2 rounded border">
						<div id="maxdata" data-maxdata-content="6" data-removeclass="lg:grid-cols-5" data-addclass="lg:grid-cols-6" className="grid grid-flow-rows lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 lg:gap-4 md:gap-4 sm:gap-2 xs:gap-2">
							{
								product1.map(data=>{
									return(
										<ProductComponent pro={data} key={data.id}/>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		</div>

		<CollectionProduct/>

        <NewAndArraivalProduct/>

        <TopSellesProduct/>

		<script src={"../js/jquery-3.3.1.min.js"} ></script>
		<script src={"../js/price-range.js"} ></script>
	</>)
}