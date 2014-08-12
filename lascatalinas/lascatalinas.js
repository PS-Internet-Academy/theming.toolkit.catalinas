$(document).ready(function () {
    $("#fullscreen-slider").insertBefore("#fullbgnav");
    $(".portlet-gallaria").replaceWith($("#listing-images"));
    if($('.carousel').length>0){
         $('#portal-logo').css("position","absolute");
    }
});