/*
|--------------------------------
|	@Author : Md. Masum billa
|--------------------------------
|	Image zoom controller
|--------------------------------
*/
$(document).ready( _=>{

	$('.zoom-con').on("mousemove touchmove",function(event){
		var con 			= 	$(this);
		var img_tag_class 	= 	$(this).attr('data-zoom');
		var lens 			=	$(this).children().filter('.lens');
		zoom(event,con,img_tag_class,lens);
	});

	function zoom(event,con,img_tag_class,lens){
		event = event || window.event.originalEvent;
		var width	= con.width();
		var height	= con.height();
		var img 	= $("."+img_tag_class);
		var pos 	=	lensPos(event,width,height,lens);
		lens.css({
			'background-image'  	: 	'url('+img.attr('src')+')',
			'background-repeat'		: 	"no-repeat",
			// 'background-size'		: 	img.width()*1.5,
			// 'background-position'	: 	'-'+(pos.x*1.289)+"px -"+(pos.y*1.3)+'px',
			'background-size'		: 	img.width()*1.9,
			'background-position'	: 	'-'+(pos.x*1.5824)+"px -"+(pos.y*1.5824)+'px',
 		});
	}

	function lensPos(event,width,height,lens){
		event 	=	event || window.event.originalEvent;
		var x	=	event.offsetX;
		var y	=	event.offsetY;
		var lx	=	x;
		var ly	=	y;

		var lensWidth	=	Math.ceil(lens.width());
		var lensHeight	=	Math.ceil(lens.height());

		var lensMaxRightPos 	=	( ( width - lensWidth ) + ( lensWidth / 2 ) );
		var lenseMaxBottomPos	=	( ( height - lensHeight ) + ( lensHeight / 2 ) );
		var lensMaxLeftPos	=	( lensWidth / 2 );
		var lensMaxTopPos	=	( lensHeight / 2 );

		if(y <= lensMaxTopPos)
		{
            ly = lensMaxTopPos+10;
        }

        if(x <= lensMaxLeftPos)
        {
        	lx = lensMaxLeftPos+7;
        }

        if(y >= lenseMaxBottomPos)
        {
        	ly = lenseMaxBottomPos-8;
        }

        if(x >= lensMaxRightPos)
        {
        	lx = lensMaxRightPos-8;
        }

		lens.css({
			"left"	: lx,
			"top"	: ly
		});

		return {x,y};
	}
});