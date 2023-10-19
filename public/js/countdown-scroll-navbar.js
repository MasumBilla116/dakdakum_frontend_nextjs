$(document).ready(_=>{
	window.onscroll = function(){
		scrollPage();
	}
	function scrollPage(){
		var y = window.pageYOffset;
		if( y > 500 ){
			$('#countdown-bottom-nav').animate({
				"bottom" : '0'
			},100)
		}else{
			$('#countdown-bottom-nav').animate({
				"bottom" : '-50%'
			},90)
		}
	}
})