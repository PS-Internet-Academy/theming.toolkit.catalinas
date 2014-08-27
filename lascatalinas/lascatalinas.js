function responsive_carousel(){
    //set new height for responsive carousel
    $('#fullscreen-slider .carousel').each(function( index ) {
        my_img=$(this).find('.carousel-image img:visible').last();
        height = my_img.height();
        
        $(this).height(my_img.height());
    });
}

$(document).ready(function () {
    $("#fullscreen-slider").insertBefore("#fullbgnav");
    $(".portlet-gallaria").replaceWith($("#listing-images"));
    if($('.carousel').length>0){
        $('#portal-logo').css("position","absolute");
    }
    if($('#fullscreen-slider .carousel').length>0){
        responsive_carousel();
    }
    $(window).resize(function() {
        if($('#fullscreen-slider .carousel').length>0){
            responsive_carousel();
        } 
    });
});