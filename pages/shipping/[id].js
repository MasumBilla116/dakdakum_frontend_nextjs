import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ProductSlide from './../sliders/product_slider.js'
import ProductComponent from './../product/product_component.js'
import TopSellesProduct from './../product/top-selles-product.js'
import NewAndArraivalsProduct from './../product/new-and-arraivals-product.js'
import CollectionProduct from './../product/collection-product.js'
import EstimateShippingCustInfo from './estimate-shipping-customer-info.js'
import CardItems from './../card/card-items.js'
const product =[
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
export default function Shipping(){
	return(<>
		<Head>
			<title>Product Shipping</title>
		</Head>
		<form className="mb-8">
			<CardItems/>
			{/*customer information*/}
			<div className="ml-2 mr-2 mt-8 border rounded p-2">
				<div className="grid grid-flow-rows grid-cols-3 gap-4">
					<div>
						<EstimateShippingCustInfo/>
					</div>
					{/*Add note*/}
					<div>
						<div className="rounded border p-4">
							<h1 className="text-xl">NOTE</h1>
							<p className="text-sm">Add special instructions for your order...</p>
							<hr className="w-full mt-1 mb-4 pb-1"/>
							<textarea name="note" value="" onChange={e=>{}} className="w-full h-24 bg-gray-50 focus:bg-white p-2 border rounded focus:outline-none focus:ring-0" row="10" col="10"  placeholder="Add special instructions for your order..."></textarea>
						</div>
					</div>
					{/*confirmation section*/}
					<div>
						<div className="rounded border p-1">
							<table className="w-full text-left">
								<tbody>
									<tr>
										<th><h1 className="text-gray-600">SUBTOTAL</h1></th>
										<td>580 Tk.</td>
									</tr>
									<tr>
										<th><h1 className="text-gray-600">Shipping charge</h1></th>
										<td>100 Tk.</td>
									</tr>
									<tr>
										<th><h1 className="text-gray-600">GRAND TOTAL</h1></th>
										<td>680 Tk.</td>
									</tr>
								</tbody>
							</table>
							<div className="p-2">
								<input type="checkbox" name="agree" value="1" onChange={e=>{}} id="agree"/>
								<label htmlFor="agree" className="cursor-pointer"> I agree with the terms and conditions </label>
							</div>
							<div className="p-2">
								<button type="submit" className="focus:outline-none focus:ring-0 bg-indigo-500 duration-600 transition-all hover:bg-indigo-600 w-full text-white rounded p-2 text-center font-semibold">
									Confirm order
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
		{/* start product slide */}
        <NewAndArraivalsProduct/>
        {/* end product slide */}
        {/* start collection section */}
        <CollectionProduct/>
        {/*end collection section */}
        <TopSellesProduct/>
	</>)
}