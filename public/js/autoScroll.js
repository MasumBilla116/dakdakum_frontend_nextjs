
/*
***********************************************
** Product overlay controller **
*
*	Author Md: Masum Billa
*/

$(document).ready(()=>{

	$('.autoscroll-top').each(function(){
		var target = $(this).attr('data-scroll-target');
		var length = $(target).children().length * 4;

		$(target).css({"animation-duration" : length+"s"});
		$(target).addClass('autoscroll-animate-top');
	});

	$('.autoscroll-left').each(function(){
		var target = $(this).attr('data-scroll-target');
		var length = $(target).children().length * 25;

		$(target).css({"animation-duration" : length+"s"});
		$(target).addClass('autoscroll-animate-left');
	});

	$(document).scroll(function(){
		var top = $(this).scrollTop() / 9.5;
		$('#scrollbar').css({"height" : top+"px"});
	});


});


