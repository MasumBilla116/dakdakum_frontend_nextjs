/*
|----------------------------------------
|		@Author	 :  Md. Masum billa
|----------------------------------------
| source modal when a use click eye icon
| thats time open a source modal and main
| image with sub-image this and changing 
| this image source main image to sub image
|
|----------------------------------------
*/
$(document).ready(function(){
	$('.src').on('click',function(event){
		var target = $(this).attr('data-target');
		var toggle = $(this).attr('data-toggle');
		var source = $(this).attr('src');
		var id = target.split('-');

		$('.src').each(function(){
			var trgt = $(this).attr('data-target');
			var tggl = $(this).attr('data-toggle');
			var src = $(this).attr('src');
			if( trgt === target && tggl === toggle){
				if(src === source){
					$(this).parent().filter('div').addClass('border-red-500');
				}else{
					$(this).parent().filter('div').removeClass('border-red-500');
				}
			}
		});
		
		$(target).attr('src',source);
	});

	$('.close').on('click',function(event){
		var target = $(this).attr('data-target');
		$(target).hide();
	});

	$('.collapse-modal').on('click',function(event){
		var target = $(this).attr('data-target');
		$(target).show();
	});
});