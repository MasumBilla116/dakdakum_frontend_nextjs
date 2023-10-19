import Image from 'next/image'
export default function untitled(){
	return(<>
		<div className="max-w-full mb-8">
		    <div className="grid grid-flow-rows grid-cols-2">
		        <div className="p-2 rounded">
		            <Image width="700" height="900" src="/images/product/img-17.webp" className="w-full rounded pro-bg-white-gray cursor-pointer" onClick={(event)=>{fullscreen(event)}} onDoubleClick={(event)=>{exitFullscreen(event)}}/>
		        </div>
		        <div className="p-2 rounded">
		            <Image width="700" height="900" src="/images/product/img-49.webp" className="w-full rounded pro-bg-white-gray cursor-pointer " onClick={(event)=>{fullscreen(event)}} onDoubleClick={(event)=>{exitFullscreen(event)}}/>
		        </div>
		        <div className="p-2 rounded">
		            <Image width="700" height="900" src="/images/product/img-50.webp" className="w-full rounded pro-bg-white-gray cursor-pointer" onClick={(event)=>{fullscreen(event)}} onDoubleClick={(event)=>{exitFullscreen(event)}}/>
		        </div>
		        <div className="p-2 rounded">
		            <Image width="700" height="900" src="/images/product/portfolio-img-5.webp" className="w-full rounded pro-bg-wh cursor-pointerite-gray " onClick={(event)=>{fullscreen(event)}} onDoubleClick={(event)=>{exitFullscreen(event)}}/>
		        </div>
		        <div className="p-2 rounded">
		            <Image width="700" height="900" src="/images/product/img-2.webp" className="w-full rounded pro-bg-white-gray cursor-pointer" onClick={(event)=>{fullscreen(event)}} onDoubleClick={(event)=>{exitFullscreen(event)}}/>
		        </div>
		        <div className="p-2 rounded">
		            <Image width="700" height="900" src="/images/product/img-1.webp" className="w-full rounded pro-bg-white-gray cursor-pointer" onClick={(event)=>{fullscreen(event)}} onDoubleClick={(event)=>{exitFullscreen(event)}}/>
		        </div>
		    </div>
		</div>

	</>)
}
