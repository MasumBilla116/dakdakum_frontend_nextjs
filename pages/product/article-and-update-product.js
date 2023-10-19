import Link from 'next/link'
import Image from 'next/image'
const product=[
  {
    id        :   1,
    src       :   "img-17.webp",
    discount  :   8,
    title     :   "t-shirt",
    time      :   "1 minute ago"
  },
  {
    id        :   2,
    src       :   "img-1.webp",
    discount  :   10,
    title     :   "t-shirt",
    time      :   "10 minute ago"

  },
  {
    id        :   3,
    src       :   "img-3.webp",
    discount  :   12,
    title     :   "t-shirt",
    time      :   "5 minute ago"

  },
  {
    id        :   4,
    src       :   "img-2.webp",
    discount  :   10,
    title     :   "t-shirt",
    time      :   "8 minute ago"

  },
  {
    id        :   5,
    src       :   "img-8.webp",
    discount  :   32,
    title     :   "t-shirt",
    time      :   "7 minute ago"

  },
  {
    id        :   6,
    src       :   "img-9.jpg",
    discount  :   9,
    title     :   "t-shirt",
    time      :   "30 minute ago"

  },
  {
    id        :   7,
    src       :   "img-14.jpg",
    discount  :   30,
    title     :   "t-shirt",
    time      :   "15 minute ago"

  },
  {
    id        :   8,
    src       :   "img-15.jpg",
    discount  :   3,
    title     :   "t-shirt",
    time      :   "21 minute ago"

  },
  {
    id        :   9,
    src       :   "img-16.webp",
    discount  :   15,
    title     :   "t-shirt",
    time      :   "25 minute ago"

  },
  {
    id        :   10,
    src       :   "img-20.webp",
    discount  :   3,
    title     :   "t-shirt",
    time      :   "36 minute ago"

  },
  {
    id        :   11,
    src       :   "img-22.webp",
    discount  :   4,
    title     :   "t-shirt",
    time      :   "10 minute ago"

  },
  {
    id        :   12,
    src       :   "img-24.webp",
    discount  :   9,
    title     :   "t-shirt",
    time      :   "19 minute ago"

  },
]
export default function FreeShip(){
	return(<>
		<div className="bg-cover rounded-tl rounded-bl bg-pink-600 bg-no-repeat flex flex-shirnk justify-center items-center c-h-294 c-bg-img" >
              <div className="text-center">
                  <div>
                      <Link href="/login">
                        <a className="text-white font-bold  text-2xl hover:underline">Log in</a>
                      </Link>
                    </div>
                  <div>
                    <Link href="/register">
                        <a className="text-white font-bold text-md hover:underline">Are You Create New Store ?</a>
                      </Link>
                    </div>
              </div>
          </div>
          <div>
              <h1 className="text-center lg:text-md text-sm text-white font-semibold bg-seagreen p-2 rounded-tr">Product update information <span id="text"></span></h1>
              <div className="autoscroll-top pt-2 rounded-br c-h-254  scroll-smooth " data-scroll-target="#scroll-top">
                  <div id="scroll-top" className="flex flex-col">
                      {/* start product section */}
                      {
                        product.map(data=>{
                          return(
                            <Link href={"/product/"+data.id} key={data.id}>
                              <a className="w-full block">
                                  <div className="grid grid-flow-rows grid-cols-3 pb-2 border-b border-gray-100 transition-all ease-in-out duration-500 hover:bg-gray-50">
                                      <div className="overflow-hidden rounded ml-2 mt-3">
                                          <Image width="70" height="90" className="mx-auto  transition-all duration-500 ease-in-out transform hover:scale-110 c-mxw-60per" src={"/images/product/"+data.src} title={data.title} alt="banner"/>
                                      </div>
                                      <div className="col-span-2 pt-2">
                                          <p className="text-xs">{data.title}</p>
                                          <p className="text-xs">{data.discount}% Off</p>
                                          <p>{data.time}</p>
                                      </div>
                                  </div>
                              </a>
                            </Link>
                          )
                        })
                      }
                     {/* end product section*/}
                     
                  </div>
              </div>
          </div>

	</>)
}