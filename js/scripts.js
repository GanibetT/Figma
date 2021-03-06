$(document).ready(function(){
   $('.manual__container').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1500,
      infinite: true,
      autoplay: true,
      draggable: true,
      swipe: true,
      pauseOnFocus: true,
      pauseOnHover: true, 
      pauseOnDotsHover: true,
      easing: 'ease',
      autoplaySpeed: 1500,
   });
});