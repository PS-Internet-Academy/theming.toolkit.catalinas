function move_listing_gallery(){
  //on listing details move image gallery to right portlet column
  //#content .listing.detail #listing-images
  //#portal-column-two
  my_gallery=$("#listing-images");
  $('#portal-column-two').prepend(my_gallery);
  $("#content #listing-images").remove();
  
}
function map_listing_data(obj){
 //use data input to give back a easy to access array for mapping
  dict=[];
  
  dict.price= $('dl.price dd').html();
  dict.propertytype= $('dl.workflow')[0].children[3].innerHTML;
  info=$("#listing-info");
  info_content=$(info[0].children[3]);
  dict.bed_bath=info_content[0].children[1].innerHTML;
  dict.lotsize=info_content[0].children[7].innerHTML;
  
  html_string = '<div class="short_info">';
  html_string += '<span class="label type"><b>TYPE</b>&nbsp;&nbsp;</span><span class="value type">'+dict.propertytype+'&nbsp;&nbsp;|<span>';
  html_string += '<span class="label bed_bath"><b>BED/ BATH</b>&nbsp;&nbsp;</span><span class="value bed_bath">'+dict.bed_bath+'&nbsp;&nbsp;|<span>';
  html_string += '<span class="label size"><b>SIZE</b>&nbsp;&nbsp;</span><span class="value size">'+dict.lotsize+'&nbsp;&nbsp;|<span>';
  html_string += '<span class="label price"><b>PRICE</b>&nbsp;&nbsp;</span><span class="value price">'+dict.price+'&nbsp;&nbsp;|<span>';
  html_string += '</div>';
  
  $("#listing-info").before(html_string);
  $("#listing-info").hide();
  return true;
}


function responsive_carousel(){
    //set new height for responsive carousel
    $('#fullscreen-slider .carousel').each(function( index ) {
        my_img=$(this).find('.carousel-image img:visible').last();
        height = my_img.height();
        
        $(this).height(my_img.height());
    });
}

function clickshow_option(){
    
    $(".portletQuickSearch #formfield-form-widgets-object_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    $(".portletQuickSearch #formfield-form-widgets-object_type .collapse").hide('slow'); 
    
    $(".portletQuickSearch #formfield-form-widgets-air_condition label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    $(".portletQuickSearch #formfield-form-widgets-air_condition .collapse").hide('slow'); 
    
    $(".portletQuickSearch #formfield-form-widgets-pool label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    $(".portletQuickSearch #formfield-form-widgets-pool .collapse").hide('slow');
    
    $(".portletQuickSearch #formfield-form-widgets-jacuzzi label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    $(".portletQuickSearch #formfield-form-widgets-jacuzzi .collapse").hide('slow');
    
    $(".portletQuickSearch #formfield-form-widgets-location_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    $(".portletQuickSearch #formfield-form-widgets-location_type .collapse").hide('slow');
    
    $(".portletQuickSearch #formfield-form-widgets-geographic_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    $(".portletQuickSearch #formfield-form-widgets-geographic_type .collapse").hide('slow');
    
    $(".portletQuickSearch #formfield-form-widgets-view_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    $(".portletQuickSearch #formfield-form-widgets-view_type .collapse").hide('slow');
    
    $(".portletQuickSearch #formfield-form-widgets-ownership_type label.horizontal.expanded").removeClass('expanded').addClass('collapsed');
    $(".portletQuickSearch #formfield-form-widgets-ownership_type .collapse").hide('slow'); 
}

function title_property(){
    $(".listing-summary .tileItem").each(function( index ) {
        mytitle= $(this).children(".tileHeadline"); 
        $(this).children(".tileHeadline").remove(); 
        $(this).children("section").prepend(mytitle);
    }
);}

function cover_color_box(){
    /*
    if ( $(".workflow_status .item-body:contains('Active')" ) && $(".listing_type .item-body:contains('Commercial Sale')" ) ) {
        $('.collection-item figure').after('<p class="blue-bg-status">Sale</p>');
    }
    else if ( $(".workflow_status .item-body:contains('Active')" ) && $(".listing_type .item-body:contains('Residential Sale')" ) ) {
        $('.collection-item figure').after('<p class="blue-bg-status">Sale</p>');
    }
    else if ( $(".workflow_status .item-body:contains('Active')" ) && $(".listing_type .item-body:contains('Commercial Lease')" ) ) {
        $('.collection-item figure').after('<p class="green-bg-status">Rental</p>');
    }
    else if ( $(".workflow_status .item-body:contains('Active')" ) && $(".listing_type .item-body:contains('Residential Lease')" ) ) {
        $('.collection-item figure').after('<p class="green-bg-status">Rental</p>');
    }
    else{
        $('.collection-item figure').after('<p class="red-bg-status">Sold</p>');
    }
*/
    ( $(".workflow_status .item-body:contains('Active').length>0 " ) && $(".listing_type .item-body:contains('Commercial Sale')" ) ).after('<div class="blue-bg-status">Sale</div>');
        
    ( $(".workflow_status .item-body:contains('Active').length>0 " ) && $(".listing_type .item-body:contains('Residential Sale')" ) ).after('<div class="blue-bg-status">Sale</div>');
    
    ( $(".workflow_status .item-body:contains('Active').length>0 " ) && $(".listing_type .item-body:contains('Land Listing')" ) ).after('<div class="blue-bg-status">Sale</div>');
    
    ( $(".workflow_status .item-body:contains('Active').length>0 " ) && $(".listing_type .item-body:contains('Commercial Lease')" ) ).after('<div class="green-bg-status">Rental</div>');

    ( $(".workflow_status .item-body:contains('Active').length>0 " ) && $(".listing_type .item-body:contains('Residential Lease')" ) ).after('<div class="green-bg-status">Rental</div>');

    ( $(".workflow_status .item-body:not:contains('Active').length>0 " ) ).after('<p class="red-bg-status">Sold</p>');

}  


function portlet(){
    if($('#portal-column-one').length>0 && $('#portal-column-two').length>0) {
        $("#portal-column-content #content .collection-item").addClass('full-column');
    }
    else{
        $("#portal-column-content #content .collection-item").addClass('small-column');
    }
}  

function visualclearnone(){
        $(".listing .visualClear").addClass('visualclearnone');
} 

$(document).ready(function () {
    if($('#portal-column-two').length<1){
        visualclearnone();
    }
    if($('.workflow_status').length>0 && $('.listing_type').length>0) {
        cover_color_box();
    }  
    if($('#fullscreen-slider').length>0){
        $("#fullscreen-slider").insertBefore("#fullbgnav");
    }
    if($('.listing-summary .tileItem').length>0){
        title_property();
    }
    if($('.portletQuickSearch').length>0){
        clickshow_option();
    }
    
    //move listing detail gallery to right portlet
    if($('.template-listing-detail').length>0){
        map_listing_data();
        if ($('#portal-column-two').length>0){
          move_listing_gallery();
        }       
    } 
    if($('#portal-columns').length>0){
        portlet();
    }
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
    
    if($('.portlet-static-las-catalinas-ocean-living-at-its-finest-in-costa').length>0){
        $('#portal-logo').hide();
        }
    });

    $( window ).load(function() {
        if($('#fullscreen-slider .carousel').length>0){
            responsive_carousel();
        }
    });
   
    $("#fullscreen-slider").insertBefore("#fullbgnav");