import ProductSlide from './../sliders/product_slider.js'
const productSlide =[
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
export default function NewAndArraivals(){
	return(<>
		<div className="ml-2 mr-2 mb-8">
        <div className="grid grid-flow-rows lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-8 xs:grid-cols-8">
            <div className="lg:col-span-3 md:col-span-2 sm:col-span-3 xs:col-span-4">
                <h1 className="lg:text-3xl md:text-2xl sm:text-2xl xs:text-xl lg:ml-0 md:ml-2 sm:ml-4 xs:ml-2 text-orange-red font-bold mt-4">
                  New &amp; Arrivals
                </h1>
            </div>
            <div className="lg:col-span-7 md:col-span-6 sm:col-span-5 xs:col-span-4 mt-4 flex flex-wrap items-center justify-cente">
                <hr className="bg-gray-100 w-full h-2 rounded-full" />  
            </div>
        </div>
    </div>
    <div className="ml-2 mr-2 p-2 bg-gray-50 border rounded mb-8">
      <ProductSlide product={productSlide}/>
    </div>
	</>)
}