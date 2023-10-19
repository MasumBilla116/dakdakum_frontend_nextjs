import ProtectionProduct from './your-protection-product.js'
import ArraivalProduct from './arraivals-product.js'
export default function ProtectionArraival(){
	return(<>
		<div className="ml-2 mr-2 lg:p-4 md:p-2 sm:p-2 xs:p-1 mb-8 bg-gray-100 border">
            <div className="grid grid-flow-rows lg:grid-cols-2 md:grid-cols-1 gap-4 ">
                <div className="grid-grow p-2 rounded bg-white rounded border">
                    <ProtectionProduct/>
                </div>
                <div className="grid-grow p-2 rounded bg-white rounded border">
                   <ArraivalProduct/>
                </div>
            </div>
        </div>
	</>)
}