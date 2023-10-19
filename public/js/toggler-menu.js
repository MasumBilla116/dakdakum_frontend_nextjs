/*
|----------------------------------------------
| 			Author: Md. Masum billa
|-----------------------------------------------
|			navbar menu controller
|-----------------------------------------------
*/ 
$(document).ready(function(){
	$('.menu-toggle').on('click',function(event){
		var target = $(this).attr('data-target');
		$('.menu').hide();
		$(target).show();
		return	false;
	});
	$('.menu').on('click',function(event){
		event.stopPropagation();	// stop bubling
		$('.menu').hide();
		$(this).show();
	});
	$(document).on('click',function(event){
		$('.menu').hide();
	});
});