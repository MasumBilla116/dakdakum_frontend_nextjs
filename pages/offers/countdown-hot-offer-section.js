import CountDownTime from './../countdown-time/countdown-component.js'
import ProductSlide from './../sliders/product_slider.js'
const HotOfferSlide =[
  {
    id      :   1,
    src     :   "img-17.webp",
    discount  :   50,
    title   :   "t-shirt",
    purch   :   3253,
    price   :   2156
  },
  {
    id      :   2,
    src     :   "img-1.webp",
    discount  :   50,
    title   :   "t-shirt",
    purch   :   54874,
    price   :   12313
  },
  {
    id      :   3,
    src     :   "img-3.webp",
    discount  :   50,
    title   :   "t-shirt",
    purch   :   19850,
    price   :   1200
  },
  {
    id      :   4,
    src     :   "img-2.webp",
    discount  :   50,
    title   :   "t-shirt",
    purch   :   5486,
    price   :   1200
  },
  {
    id      :   5,
    src     :   "img-8.webp",
    discount  :   50,
    title   :   "t-shirt",
    purch   :   89752,
    price   :   1200
  },
  {
    id      :   6,
    src     :   "img-9.jpg",
    discount  :   50,
    title   :   "t-shirt",
    purch   :   231534,
    price   :   25646
  },
  {
    id      :   7,
    src     :   "img-14.jpg",
    discount  :   50,
    title   :   "t-shirt",
    purch   :   4787,
    price   :   1200
  },
  {
    id      :   8,
    src     :   "img-15.jpg",
    discount  :   50,
    title   :   "t-shirt",
    purch   :   1250,
    price   :   1200
  },
  {
    id      :   9,
    src     :   "img-16.webp",
    discount  :   50,
    title   :   "t-shirt",
    purch   :   10250,
    price   :   1560
  },
  {
    id      :   10,
    src     :   "img-20.webp",
    discount  :   50,
    title   :   "t-shirt",
    purch   :   15645,
    price   :   12343
  },
  {
    id      :   11,
    src     :   "img-22.webp",
    discount  :   50,
    title   :   "t-shirt",
    purch   :   1250,
    price   :   1200
  },
  {
    id      :   12,
    src     :   "img-24.webp",
    discount  :   50,
    title   :   "t-shirt",
    purch   :   45445,
    price   :   54864
  },
]
export default function CountdownHotOfferSection(){
	return(<>
		<div className="p-2 border rounded ml-2 mr-2 mb-8 mt-8 bg-darkpink">
            <div className="mb-4">
                <div className="grid grid-flow-rows lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-8 xs:grid-cols-8">
                    <div className="lg:col-span-2 md:col-span-2 sm:col-span-2 xs:col-span-3">
                        <h1 className="lg:text-3xl md:text-2xl sm:text-2xl xs:text-xl lg:ml-0 md:ml-2 sm:ml-4 xs:ml-2 text-white font-bold mt-4">
                          Hot offers
                        </h1>
                    </div>
                    <div className="lg:col-span-8 md:col-span-6 sm:col-span-6 xs:col-span-5 mt-4 flex flex-wrap items-center justify-cente">
                        <hr className="bg-gray-100 w-full h-2 rounded-full" />  
                    </div>
                </div>
            </div>
            <div className="grid grid-flow-rows grid-cols-1">
                <div className="p-2 mb-4">
                  <CountDownTime/>
                </div>
            </div>
            <ProductSlide product={HotOfferSlide}/>
        </div>
	</>)
}