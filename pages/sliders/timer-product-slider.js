import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Navigation,Pagination,Scrollbar} from 'swiper'
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css'
import Link from 'next/link';
import Image from 'next/image'

SwiperCore.use([Navigation,Pagination,]);

export default function TimerProductSlide(props){
	const {product} = props;
	return(<>
		{/*extra product slide*/}
		<div className="lg:hidden md:hidden sm:hidden xs:block">
			<Swiper tag="div" className="p-1"
				spaceBetween={15}
	            slidesPerView={6}
	            navigation
	            loop={true}
                allowTouchMove={true}
			>
			{
				product.map(data=>{
					return(
						<SwiperSlide key={data.id}>
							<div className="bg-white p-1 rounded border transition-all duration-500 hover:shadow-lg">
								
				                <div title={data.title} className="pro-bg-white-gray rounded relative overflow-hidden pro-con">
				                    <Link href={"/product/"+data.id}>
					                <a  className="block">
				                        <Image width="30" height="40" src={"/images/product/"+data.src} className="w-full rounded transform transition-all duration-500 hover:scale-110"/>
				                    </a>
				                    </Link>
				                </div>
				            </div>

						</SwiperSlide>
					)
				})
			}
			</Swiper>
		</div>
		{/*small product slide*/}
		<div className="lg:hidden md:hidden sm:block xs:hidden">
			<Swiper tag="div" className="p-1"
				spaceBetween={15}
	            slidesPerView={8}
	            navigation
	            loop={true}
                allowTouchMove={true}
			>
			{
				product.map(data=>{
					return(
						<SwiperSlide key={data.id}>
							<div className="bg-white p-1 rounded border transition-all duration-500 hover:shadow-lg">
								
				                <div title={data.title} className="pro-bg-white-gray rounded relative overflow-hidden pro-con">
					                <Link href={"/product/"+data.id}>
					                <a  className="block">
				                        <Image width="50" height="70" src={"/images/product/"+data.src} className="w-full rounded transform transition-all duration-500 hover:scale-110"/>
				                    </a>
				                   </Link>
				                </div>
				            </div>

						</SwiperSlide>
					)
				})
			}
			</Swiper>
		</div>
		{/*medium product slide*/}
		<div className="lg:hidden md:block sm:hidden xs:hidden">
			<Swiper tag="div" className="p-1"
				spaceBetween={15}
	            slidesPerView={7}
	            navigation
	            loop={true}
                allowTouchMove={true}
			>
			{
				product.map(data=>{
					return(
						<SwiperSlide key={data.id}>
							<div className="bg-white p-1 rounded border transition-all duration-500 hover:shadow-lg">
								
				                <div title={data.title} className="pro-bg-white-gray rounded relative overflow-hidden pro-con">
					                <Link href={"/product/"+data.id}>
					                <a  className="block">
				                        <Image width="50" height="70" src={"/images/product/"+data.src} className="w-full rounded transform transition-all duration-500 hover:scale-110"/>
				                    </a>
				                    </Link>
				                </div>
				            </div>

						</SwiperSlide>
					)
				})
			}
			</Swiper>
		</div>
		{/* large product slide */}
		<div className="lg:block md:hidden sm:hidden xs:hidden">
			<Swiper tag="div" className="p-1"
				spaceBetween={10}
	            slidesPerView={10}
	            navigation
	            loop={true}
                allowTouchMove={true}
			>
			{
				product.map(data=>{
					return(
						<SwiperSlide key={data.id}>
							<div className="bg-white p-1 rounded border transition-all duration-500 hover:shadow-lg relative">
				                <div title={data.title} className="pro-bg-white-gray flex justify-center items-center rounded relative overflow-hidden pro-con">
					                <Link href={"/product/"+data.id}>
					                <a  className="block">
				                        <Image width="50" height="70" src={"/images/product/"+data.src} className="w-full rounded transform transition-all duration-500 hover:scale-110"/>
				                    </a>
				                    </Link>
				                </div>
				            </div>

						</SwiperSlide>
					)
				})
			}
			</Swiper>
		</div>
	</>)
}