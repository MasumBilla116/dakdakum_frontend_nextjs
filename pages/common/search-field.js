import {useState} from 'react'
export default function SearchField(){
	const [searchItem,setSearch] = useState("");
	  function searchInfo(e){
	    setSearch(e.target.value);
	  }
	return(<>
		
		<div className="lg:col-span-4 md:col-span-4 sm:col-span-4 md:block lg:block sm:block xs:hidden ">
            <form method="post">
                <div className="flex flex-wrap relative">
                    <input type="search" name="search" onChange={e=>{searchInfo(e)}} value={searchItem} placeholder="Searching items" className="w-full p-2 focus:outline-none border-2 border-red-400 focus:border-red-300 bg-red-700 focus:bg-red-800 focus:shadow-lg focus:ring-0 inline placeholder-white text-white"/>
                    <div className="absolute right-3 top-1 flex">
                        <button type="submit" className="p-1 text-red-400 hover:text-red-200 mr-1 transition duration-500 ease-in-out">
                            <i className="fas fa fa-search"></i>
                        </button>
                        {/*<button type="submit" className="p-1 text-red-400 hover:text-red-200 transition duration-500 ease-in-out ">
                                                    <i className="fa fa-camera"></i>
                                                </button>*/}
                    </div>
                </div>
            </form>
        </div>
	</>)
}