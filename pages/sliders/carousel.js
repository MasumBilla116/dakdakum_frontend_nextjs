import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Navigation,Pagination,Autoplay} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Link from 'next/link'
import Image from 'next/image'
SwiperCore.use([Navigation,Pagination,Autoplay]);

export default function slide(){
	const carouselSlide = [
		{
			id		: 	0,
			title	: 	"banner 1",
			src 	: 	"./images/slide/banner-970_250.gif"
		},
		{
			id		: 	1,
			title	: 	"banner 2",
			src		: 	"./images/slide/Untitled design(1).gif",
		},
		{
			id		: 	2,
			title	: 	"banner 3",
			src		: 	"./images/slide/Untitled design(2).gif",
		},
		{
			id		: 	3,
			title	: 	"banner 4",
			src		: 	"./images/slide/Untitled design.gif"
		},
		
	];
	return(
		<div className="ml-2 mr-2">
			<Swiper tag="div" className="p-2"
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{delay: 5000, pauseOnMouseEnter: true, disableOnInteraction: false, reverseDirection: true, waitForTransition: true}}
                  loop={true}
                  allowTouchMove={true}
                >
                {
                	carouselSlide.map(slide=>{
                		return(
							<SwiperSlide key={slide.id}>
								<Link href={"/offers/"+slide.title}>
									<a>
					                  	<Image 
					                  		width="2200" 
					                  		height="500" 
					                  		className="w-full"
					                  		src={"/"+slide.src}
					                  		alt={slide.title}
					                  	/>
				                  	</a>
				                </Link>	
			                 </SwiperSlide>    
                		)

                	})
                }
                </Swiper>
		</div>
	);
}