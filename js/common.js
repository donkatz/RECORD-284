$(document).ready(function(){
  
    $(".culture-slide").slick({
      slidesToShow: 3 ,
      centerMode: true ,
      centerPadding: "0px" ,
      arrows: true,

      prevArrow: "<div class='before-btn'><img src='img/left-arrow.png' alt=''></div>", 
      
      nextArrow: "<div class='next-btn'><img src='img/next-arrow.png' alt=''></div>", 
    });
    
    $('.culture-slide').on('init', function(event, slick){
        $(".slick-center").addClass("active");
    });
    
    $('.culture-slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      console.log("넘어가기 시작");
      $(".slick-center").removeClass("active");
    });
    $('.culture-slide').on('afterChange', function(event, slick, currentSlide){
      console.log("넘어가기 끝");
      $(".slick-center").addClass("active");
    });
    

  });