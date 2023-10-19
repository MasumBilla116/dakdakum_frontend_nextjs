$(document).ready(function(){

	$("#btn-red").on("click",function(event){
		$('h1').css({"color":"white"});
		$("body").css({"background-color":"red"});
	})


	$("#btn-white").on("click",function(event){
		$('h1').css({"color":"black"});
		$("body").css({"background-color":"white"});
	})
})