import {useState} from 'react'
export default function SecoundarySearchField(){
	const [searchItem,setSearch] = useState("");
	  function searchInfo(e){
	    setSearch(e.target.value);
	  }
	return(<>
		<div className="lg:hidden md:hidden sm:hidden xs:block">
            <div id="searchbar" className="shadow-lg relative hidden  secoundary-searchbar w-full p-2 bg-red-800 border-b border-gray-700 text-center">
            	<form>
            		<input type="search" name="search" onChange={()=>searchInfo(e)} value={searchItem} placeholder="Search your item" className="focus:outline-none rounded border-2 border-red-400 bg-gray-200 focus:bg-white p-1 border-box w-full"/>
            	</form>
        	</div>
    	</div>
	</>)
}