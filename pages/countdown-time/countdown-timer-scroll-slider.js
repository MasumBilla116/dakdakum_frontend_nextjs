import CountDownTime from './countdown-component.js'
import TimerProductSlide from './../sliders/timer-product-slider.js'
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
export default function TimerScrollSlider(){
	return(<>
			<div id="countdown-bottom-nav" className="countdown-btm-navbar w-full p-2 bg-darkpink z-20">
            <div className="mb-2 lg:hidden md:hidden sm:block xs:block">
                <div className="flex justify-between items-center ">
                    <h1 className="text-center text-xl text-white">Hot offers</h1>
                    <CountDownTime/>
                </div>
            </div>
            <div className="grid grid-flow-rows lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-1 xs:grid-cols-1">
                <div className="lg:col-span-6 md:col-span-4">
                    <TimerProductSlide product={HotOfferSlide}/>
                </div>
                <div className="lg:col-span-2 md:col-span-2 lg:block md:block sm:hidden xs:hidden">
                    <h1 className="text-center text-xl text-white">Hot offers</h1>
                    <CountDownTime/>
                </div>
            </div>
        </div>
        <script src={"../js/jquery-3.3.1.min.js"} ></script>
        <script src="../js/countdown-scroll-navbar.js"></script>
	</>)
}