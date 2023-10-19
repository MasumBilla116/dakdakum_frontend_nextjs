import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Navigation,Pagination,Scrollbar,A11y} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';
import Image from 'next/image'

SwiperCore.use([Navigation,Pagination,Scrollbar,A11y  ]);
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
export default function ReviewCustomPhotos(prop){
	return(<>
		{/* Start product modal */}
        <div className="modal " id={prop.modalName}>
          <div className="modal-wrap">
              <div className="modal-dialog lg:w-1/2 md:w-1/2 sm:w-2/3 xs:w-full">
                  <div className="lg:mb-2 md:mb-2 sm:mb-0 xs:mb-0 border-b bg-gray-100">
                      <div className="grid grid-flow-rows grid-cols-3 gap-4">
                          <div className="col-span-2 flex flex-wrap items-center justify-end pr-10">
                              <h1 className="font-semibold text-md text-green-500">Custom review</h1>
                          </div>
                          <div className="flex justify-end">
                              <button className="focus:outline-none text-3xl text-gray-500 font-bold p-1 close" data-target={"#"+prop.modalName}>&times;</button>
                          </div>
                      </div>
                  </div>
                  <div className="modal-content">
                      <div className="flex justify-center items-center">
							<div className="container mx-auto">
								<Swiper tag="div" className="p-4"
					                  spaceBetween={0}
					                  slidesPerView={1}
					                  navigation
					                  pagination={{ clickable: true }}
					                >
					                {
					                	product1.map(data=>{
					                		return(
												<SwiperSlide key={data.id} className="flex justify-center items-center">
										                  	<Image width="250" height="310" 
										                  		className=""
										                  		src={"/images/product/"+data.src}
										                  		alt={data.title}
										                  	/>
								                 </SwiperSlide>    
					                		)

					                	})
					                }
					                </Swiper>
							</div>
                      </div>
                  </div>
                  <div className="border-t flex justify-end bg-gray-100 p-2">
                      <button className="focus:outline-none text-md rounded text-white bg-pink-500 transition-all ease-in-out duration-500 hover:bg-pink-600 font-bold p-2 close" data-target={"#"+prop.modalName}>close</button>
                  </div>
              </div>
          </div>
        </div>
        {/* end product modal */}
	</>)
}