export default function CountdownTime(){
	return(<>
		<div className="flex lg:justify-end md:justify-end sm:justify-end xs:justify-center items-center">
            <div className="lg:p-2 md:p-2 sm:p-1 xs:p-1 bg-red-900 border border-2 rounded-tl rounded-bl"><h1 className="font-bold text-white lg:text-2xl md:text-xl countdown-day">0 d</h1></div>
            <div className="lg:p-2 md:p-2 sm:p-1 xs:p-1 bg-red-800 border border-2 border-l-0"><h1 className="font-bold text-white lg:text-2xl md:text-xl countdown-hours">0 h</h1></div>
            <div className="lg:p-2 md:p-2 sm:p-1 xs:p-1 bg-red-700 border border-2 border-l-0"><h1 className="font-bold text-white lg:text-2xl md:text-xl countdown-min">0 m</h1></div>
            <div className="lg:p-2 md:p-2 sm:p-1 xs:p-1 bg-red-600 border border-2 border-l-0 rounded-tr rounded-br"><h1 className="font-bold text-white lg:text-2xl md:text-xl countdown-sec">0 s</h1></div>
        </div>
        {/*<script src={"../js/countdown.js"} ></script>*/}
	</>)
}