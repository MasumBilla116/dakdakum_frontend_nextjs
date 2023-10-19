$(document).ready(function(){

    let priceRange = $("#priceRange");
    let rangePriceShow = $('.price-range');
    let maxVal = parseInt(priceRange.attr('max'));
    rangePriceShow.text(maxVal/2);
    priceRange.on("input",function(event){

        let value = parseInt($(this).val());
        let max = parseInt($(this).attr('max'));
        let pos = ((value/ max) *100)*3.5;
        rangePriceShow.css({
            left    :   pos+"px"
        }).text(value);
    });
});