import Link from 'next/link'
import Image from 'next/image'
import FreeShipAndReturnProduct from './free-ship-and-return-product.js'
import ArticleAndUpdateProduct from './article-and-update-product.js'
export default function FreeShip(){
	return(<>
		<div className="ml-2 mr-2 lg:p-4 md:p-2 sm:p-2 xs:p-1 mt-8 mb-8 bg-gray-100 border">
              <div className="grid grid-flow-rows md:grid-cols-1 lg:grid-cols-2 gap-4 ">
                  <div className="grid-grow rounded bg-white rounded border">
                      <FreeShipAndReturnProduct/>
                  </div>
                  <div className="grid-grow bg-white rounded border">
                      <div className="grid grid-flow-rows grid-cols-2">
                          <ArticleAndUpdateProduct/>
                      </div>
                  </div>
              </div>
        </div>

	</>)
}