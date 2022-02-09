$(document).on('click','[data-toggle="lightbox"]',function(event){
  event.preventDefault();  
  $(this).ekkoLightbox();
});
$('.slider').slick({
  infinite: true,
  slideToShow:1,
  slideToScroll:1
 
});
$('.autoplay').slick({
  slideToShow:3,
  slideToScroll:1,

});
AOS.init();
