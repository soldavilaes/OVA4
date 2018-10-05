 /*--------------------------
* TEMA 1 - PESTAÑAS
---------------------------*/


// show first content by default
$('#tabs-nav li:last-child').addClass('active');
$('.contentt').hide();
$('.contentt:first').show();

// click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.contentt').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
  
});



