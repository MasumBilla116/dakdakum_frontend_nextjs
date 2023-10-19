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

export default function NotificationsList(){
	return(<>
		<ul className="list-none text-lg strip-list">
            {
                product.map(data=>{
                  return(
                        <li key={data.id} className="pl-2">
                            <div className="grid grid-flow-rows grid-cols-5 pb-2 border-b border-gray-100 transition-all ease-in-out duration-500 hover:bg-gray-50">
                                <div className="flex justify-center items-center">
                                    <div className="overflow-hidden rounded ml-2 mt-3">
                                        <Link href={"/product/"+data.id}>
                                            <a>
                                                <Image width="70" height="90" className="mx-auto  transition-all duration-500 ease-in-out transform hover:scale-110 c-mxw-60per" src={"/images/product/"+data.src} title={data.title} alt="banner"/>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="pt-2 flex justify-center items-center col-span-4">
                                    <div>
                                        <Link href={"/DakDakum"}>
                                            <a>
                                                <Image width="30" height="30" className="" src="/images/system/icons/avater.png"/>
                                                <h1 className="font-semibold text-indigo-600">DakDakum</h1>
                                            </a>
                                        </Link>
                                       <p className="text-md">{data.title}</p>
                                       <p className="text-md">{data.discount}% Off</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                  )
                })
              }
    </ul>
	</>)
}