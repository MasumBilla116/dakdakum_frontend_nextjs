import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Navigation,Pagination,Scrollbar} from 'swiper'
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css'
import Link from 'next/link';
import Image from 'next/image'
import ShowProductShopNameAndLogo from './../common/show-product-shop-name-and-logo.js'
SwiperCore.use([Navigation,Pagination,]);

export default function ProductSlide(props){
	const {product} = props;
	return(<>
		{/*extra product slide*/}
		<div className="lg:hidden md:hidden sm:hidden xs:block">
			<Swiper tag="div" className="p-2"
				spaceBetween={15}
	            slidesPerView={2}
	            navigation
	            loop={true}
                allowTouchMove={true}
			>
			{
				product.map(data=>{
					return(
						<SwiperSlide key={data.id}>
							<div className="bg-white p-2 rounded border transition-all duration-500 hover:shadow-lg">
								{
									<div className="absolute right-0 p-2 z-1 offer-1">
										<h1 className="discount">{data.discount}%</h1>
										<small className="discount-off">off</small>
									</div>

								}
				                <div title={data.title} className="pro-bg-white-gray rounded relative overflow-hidden pro-con">
				                    <Link href={"/product/"+data.id}>
					                <a  className="block">
				                        <Image width="200" height="250" src={"/images/product/"+data.src} className="w-full rounded transform transition-all duration-500 hover:scale-110"/>
				                    </a>
				                    </Link>
				                </div>
				                <ShowProductShopNameAndLogo productid={data.id}/>
				            </div>

						</SwiperSlide>
					)
				})
			}
			</Swiper>
		</div>
		{/*small product slide*/}
		<div className="lg:hidden md:hidden sm:block xs:hidden">
			<Swiper tag="div" className="p-2"
				spaceBetween={15}
	            slidesPerView={3}
	            navigation
	            loop={true}
                allowTouchMove={true}
			>
			{
				product.map(data=>{
					return(
						<SwiperSlide key={data.id}>
							<div className="bg-white p-2 rounded border transition-all duration-500 hover:shadow-lg">
								{
									<div className="absolute right-0 p-2 z-1 offer-1">
										<h1 className="discount">{data.discount}%</h1>
										<small className="discount-off">off</small>
									</div>

								}
				                <div title={data.title} className="pro-bg-white-gray rounded relative overflow-hidden pro-con">
					                <Link href={"/product/"+data.id}>
					                <a  className="block">
				                        <Image width="200" height="250" src={"/images/product/"+data.src} className="w-full rounded transform transition-all duration-500 hover:scale-110"/>
				                    </a>
				                   </Link>
				                </div>
				                <ShowProductShopNameAndLogo productid={data.id}/>
				            </div>

						</SwiperSlide>
					)
				})
			}
			</Swiper>
		</div>
		{/*medium product slide*/}
		<div className="lg:hidden md:block sm:hidden xs:hidden">
			<Swiper tag="div" className="p-2"
				spaceBetween={15}
	            slidesPerView={4}
	            navigation
	            loop={true}
                allowTouchMove={true}
			>
			{
				product.map(data=>{
					return(
						<SwiperSlide key={data.id}>
							<div className="bg-white p-2 rounded border transition-all duration-500 hover:shadow-lg">
								{
									<div className="absolute right-0 p-2 z-1 offer-1">
										<h1 className="discount">{data.discount}%</h1>
										<small className="discount-off">off</small>
									</div>

								}
				                <div title={data.title} className="pro-bg-white-gray rounded relative overflow-hidden pro-con">
					                <Link href={"/product/"+data.id}>
					                <a  className="block">
				                        <Image width="200" height="250" src={"/images/product/"+data.src} className="w-full rounded transform transition-all duration-500 hover:scale-110"/>
				                    </a>
				                    </Link>
				                </div>
				                <ShowProductShopNameAndLogo productid={data.id}/>
				            </div>

						</SwiperSlide>
					)
				})
			}
			</Swiper>
		</div>
		{/* large product slide */}
		<div className="lg:block md:hidden sm:hidden xs:hidden">
			<Swiper tag="div" className="p-2"
				spaceBetween={10}
	            slidesPerView={6}
	            navigation
	            loop={true}
                allowTouchMove={true}
			>
			{
				product.map(data=>{
					return(
						<SwiperSlide key={data.id}>
							<div className="bg-white p-2 rounded border transition-all duration-500 hover:shadow-lg relative">
								{
									<div className="absolute right-0 p-2 z-1 offer-1">
										<h1 className="discount">{data.discount}%</h1>
										<small className="discount-off">off</small>
									</div>

								}
				                <div title={data.title} className="pro-bg-white-gray rounded relative overflow-hidden pro-con">
					                <Link href={"/product/"+data.id}>
					                <a  className="block">
				                        <Image width="200" height="250" src={"/images/product/"+data.src} className="w-full rounded transform transition-all duration-500 hover:scale-110"/>
				                    </a>
				                    </Link>
				                </div>
				                
				                	<ShowProductShopNameAndLogo productid={data.id}/>
				                
				            </div>

						</SwiperSlide>
					)
				})
			}
			</Swiper>
		</div>
	</>)
}