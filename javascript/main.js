$(document).ready( function(){
    jQuery(window).scroll(function(){
        var scrollTop = jQuery(window).scrollTop();
        if(scrollTop >= 300){ jQuery('#aflotar').addClass("flotante"); }
        else{ jQuery('#aflotar').removeClass("flotante"); }
    });
});