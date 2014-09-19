function move_listing_gallery(){
  //on listing details move image gallery to right portlet column
  //#content .listing.detail #listing-images
  //#portal-column-two
  my_gallery=$("#listing-images");
  $('#portal-column-two').prepend(my_gallery);
  $("#content #listing-images").remove();
  
}
function map_listing_data(){
 //use data input to give back a easy to access array for mapping
  dict=[];

  dict.price= $('dl.price dd').html();
  dict.propertytype= $('#listing-info dd.object_type').html();
  dict.bed_bath=$('#listing-info dd.beds_baths').html();
  dict.lotsize=$('#listing-info dd.lot_size').html();
  
  pool_text = $(".pool_meta td").html();
  if(pool_text !='No'){
      pool_text ='Yes';
  }
  dict.pool= pool_text;
  
  html_string = '<div class="short_info">';
  if(dict.propertytype!==null){
      html_string += '<span class="label type"><b>TYPE</b>&nbsp;&nbsp;</span><span class="value type">'+dict.propertytype+'&nbsp;&nbsp;|<span>';
  }
  if(dict.bed_bath!==null){
      html_string += '<span class="label bed_bath"><b>BED/ BATH</b>&nbsp;&nbsp;</span><span class="value bed_bath">'+dict.bed_bath+'&nbsp;&nbsp;|<span>';
  }
  if(dict.lotsize!==null){
      html_string += '<span class="label size"><b>SIZE</b>&nbsp;&nbsp;</span><span class="value size">'+dict.lotsize+'&nbsp;&nbsp;|<span>';
  }
  if(dict.price!==null){
    html_string += '<span class="label price"><b>PRICE</b>&nbsp;&nbsp;</span><span class="value price">'+dict.price+'&nbsp;&nbsp;|<span>';
  }
  if(dict.pool!==null){
    html_string += '<span class="label pool"><b>POOL</b>&nbsp;&nbsp;</span><span class="value pool">'+dict.pool+'&nbsp;&nbsp;|<span>';
  }
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
function pricing(){
    $("#fieldsetlegend-financial-information").text("Pricing");
}

$(document).ready(function () {
    if($('#fieldsetlegend-financial-information').length>0 ){
        pricing();
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
    if($('.listing.detail #listing-images').length>0){
        
        if ($('#portal-column-two').length>0){
            map_listing_data();
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
