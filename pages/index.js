import Head from 'next/head'
import Carousel from './sliders/carousel.js'
import Link from 'next/link'
import Image from 'next/image'
import ProductComponent from './product/product_component.js'
import ProductSlide from './sliders/product_slider.js'
import TimerProductSlide from './sliders/timer-product-slider.js'
import TopSellesProduct from './product/top-selles-product.js'
import CountDownTime from './countdown-time/countdown-component.js'
import CountdownTimerScrollSlider from './countdown-time/countdown-timer-scroll-slider.js'
import CountdownSection from './offers/countdown-hot-offer-section.js'
import NewAndArraivalsProduct from './product/new-and-arraivals-product.js'
import JustForYouProduct from './product/just-for-you-product.js'
import CollectionProduct from './product/collection-product.js'
import ProtectionAndArraivalProduct from './product/protection-and-arraival-product.js'
import FreeShipReturnAndUpdateProduct from './product/free-ship-return-and-update-product.js'
import {withRouter} from 'next/router'
export default function Home({router}) {
  return (
    <div >
      <Head>
        <title>dakdakum | Online shopping store</title>
      </Head>
      <main>
        <CountdownTimerScrollSlider/>

        <Carousel/>

        <CountdownSection/>
        
        <FreeShipReturnAndUpdateProduct/>

        <ProtectionAndArraivalProduct/>

        <TopSellesProduct/>

        <NewAndArraivalsProduct/>

        <div className="ml-2 mr-2">
            <div className="grid grid-flow-rows lg:grid-cols-2 md:grid-col-1">
                <div className="c-bg-img bg-dark-green flex flex-wrap items-center justify-center p-4">
                    <div className="p-4 mb-4">
                        <h1 className="font-bold text-white text-3xl">Our Customer</h1>
                        <h1 className="font-bold text-white text-3xl">12458796365+</h1>
                    </div>
                    <div className="p-4 mb-4 text-white font-semibold text-center">
                        <article className="border p-2 rounded">
                            <p>
                                Don't warry do not buy or build a web site for your any E-commerce business, You get to full completed won web site for your any E-commerce business
                            </p>
                            <hr className="bg-white w-full mt-4 mb-4"/>
                            <p>
                                Growup your business without build an E-commerce web site,
                                You just create your store and sell your product in million of customers
                            </p>

                        </article>
                        <a className="text-3xl font-bold border-t border-white pt-1 transition-all ease-in duration-500 hover:underline" href="{{ route('register">Create Your Store</a>
                    </div>
                </div>
                <div>
                    <Image width="1000" height="500" className="w-full" src="/images/banner/1-22.png"/>
                    <h1 className="text-center text-2xl font-semibold text-indigo-500">Our service your service</h1>
                </div>
            </div>
        </div>

        <JustForYouProduct/>

        <CollectionProduct/>

      </main>
        
    </div>
  )
}

