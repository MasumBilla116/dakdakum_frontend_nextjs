$(document).ready( _=>{
/*
|-------------------------------
|	text field to copy text
|-------------------------------
*/
	 $('.copy-text-field').on('click',function(event){
        $(this).select();
        document.execCommand("copy")
    });

    $('.copy').on('click',function(event){
        var target = $(this).attr('data-target');
        $(target).select();
        document.execCommand('copy');
    });
/*
|-------------------------------
|	product dash board color
|	text change and arange 
|	product size auto matically
|-------------------------------
*/
	$('.color-picker').on('click',function(event){
		var color = $(this).attr('data-color-picker');
		$('#color').text(color);
	});

	// size controller method
	$('.size').on('change',function(event){
		var size = $(this).val();
		if( size === 'all'){
			$('.size-picker').show();
		}else{
			$('.size-picker').each(function(){
				var s = $(this).attr('data-size-picker');
				if( s !== size ){
					$(this).hide();
				}else{
					$(this).show();
				}
			});
		}
	});
	sizePicker();
	function sizePicker(){
		$('#size').children().each(function(){
			if($(this).val() == 'all'){
				$(this).attr('selected','true');
			}
		})
	}

/*
|-------------------------------
|	close any tag 
|-------------------------------
*/
	$('.add-card').on("click",function(){
		event.preventDefault();
		event.stopPropagation();
		var target = $(this).attr('data-close');
		var dir    = $(this).attr('data-slide');
		if( target == 'undefined')
		{
			target = $(this).attr('href');
		}
	});
	$('.close').on("click",function(event){
		event.preventDefault();
		event.stopPropagation();
		var target = $(this).attr('data-close');
		var dir    = $(this).attr('data-slide');
		if( target == 'undefined')
		{
			target = $(this).attr('href');
		}
		
		if( dir == "right"){
			$(target).animate({
				right : "-100%"
			},1500);
		}
		else if( dir == "top"){
			$(target).animate({
				top : "-100%"
			},1500);
		}
		else if( dir == "bottom"){
			$(target).animate({
				bottom : "-100%"
			},1500);
		}else{
			$(target).animate({
				left : "-100%"
			},1500);
		}

		
	});

/*
|-----------------------------
| collapse tabs controller
|-----------------------------
*/ 
	$('.collapse-tabs').each(function(){
		var target = $(this).attr('data-target');
		$(target).toggle(500);
		if( !$(this).children().filter('i').has('fa fa-angle-up')){
			$(this).append('<i class="fa fa-angle-up" style="text-align:right;"></i>');
		}
		console.warn("each is working")
	});

	$('.collapse-tabs').on('click',function(event){
		$(this).children().filter("i").toggleClass("fa-angle-up");
		$(this).children().filter("i").toggleClass("fa-angle-down");
		event.preventDefault();
		event.stopPropagation();
		var target = $(this).attr('data-target');
		if( typeof target == 'undefined'){
			target = $(this).attr('href');
		}
		$(target).slideToggle(500);
		console.warn('collapse-tabs is clicked')
	});

	/*
	|-----------------------------
	| toggle items collapseable
	|-----------------------------
	*/ 
	$('.toggle').on("click",function(event){
		var target = $(this).attr("data-toggle");
		if( typeof target == 'undefined'){
			target = $(this).attr("href");
		}
		$(target).slideToggle();
	});
	
	/*
	|---------------------------------------
	| minimize and maximize tabs controller
	|---------------------------------------
	*/ 
	$('.minimize-tabs').on('click',function(event){
		var minimize = $(this).attr('data-minimize');
		var maximize = $(this).attr('data-maximize');
		var togglerDataContent = $(this).attr('data-maxdata-toggle');
		var MaxDataContent = $(togglerDataContent).attr('data-maxdata-content');
		var removeClass = $(togglerDataContent).attr('data-removeclass');
		var addClass = $(togglerDataContent).attr('data-addclass');

		$(minimize).hide(500);
		$(maximize).addClass('lg:grid-cols-1')
		$(togglerDataContent).addClass(addClass)
		.removeClass(removeClass);

		$('.max-min-toggler-con').show(500)
	});

	$('.maximize-tabs').on('click',function(event){
		var minimize = $(this).attr('data-minimize');
		var maximize = $(this).attr('data-maximize');
		var togglerDataContent = $(this).attr('data-maxdata-toggle');
		var MaxDataContent = $(togglerDataContent).attr('data-maxdata-content');
		var removeClass = $(togglerDataContent).attr('data-removeclass');
		var addClass = $(togglerDataContent).attr('data-addclass');

		$(minimize).show(500);
		$(maximize).removeClass('lg:grid-cols-1')
		$(togglerDataContent).addClass(removeClass)
		.removeClass(addClass);

		$('.max-min-toggler-con').hide(500)
	});


});



















/*
|--------------------------------
| full screen image controller
|--------------------------------
*/
function fullscreen(event){
	var elm = event.currentTarget;
	if(elm.requestFullscreen){
		elm.requestFullscreen();
	}else if(elm.webkitRequestFullscreen){
		elm.webkitRequestFullscreen();
	}else if(elm.msRequestFullscreen){
		elm.msRequestFullscreen();
	}
}

function exitFullscreen(event){
	var elm = event.currentTarget;
	if(elm.exitFullscreen){
		elm.requestFullscreen();
	}else if(elm.webkitExitFullscreen){
		elm.webkitExitFullscreen();
	}else if(elm.msExitFullscreen){
		elm.msExitFullscreen();
	}
}