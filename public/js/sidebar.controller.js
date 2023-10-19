$(document).ready(function(){

    $('.sidebar').on('click',function(event){
        $('.sidebar-nav').animate({
            left : 0
        },800);
    });

    $('.close').on('click',function(event){
    	$(this).parents().filter('.sidebar-nav').animate({
    		left : "-100%"
    	},700);
    });

    $('.aside-menu-close').on('click',function(event){
        $('.sidebar-nav').animate({
            'left' : '-100%'
        },1300);
    });

/*
|--------------------------------------------
|   @Author:: Md. Masum billa
|--------------------------------------------
| all collapse controller
|---------------------------------------------
*/
    $('.collapse').on('click',function(event){
        var target = $(this).attr('data-target');
        var color  = $(this).attr('data-collapse-active');
        $(this).css({
            'color' : color
        })
        $(target).slideDown();
    });
    $('.collapse-close').on('click',function(event){
        var target = $(this).attr('data-target');
        $('.collapse').each(function(){
            if( $(this).attr('data-target') === target){
                $(this).removeAttr('style');
                return;
            }
        });
        
        $(target).slideUp();
    });
});