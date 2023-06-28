// 가장 윗부분 이벤트 베너 끄기
$('#close_aside').on('click',function(){
    // alert("test");
    $('.top_aside').stop().slideUp();
});

// 메인 슬라이드쇼
$("#slideshow > div:gt(0)").hide();
setInterval(function() { 
  $('#slideshow > div:first-child')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 5000);

// Section 02 비디오 선택
$("[class*='real_time_video0'").not(".real_time_video00").hide();
$('.real_time>ul>li:not(:first-child,:last-child)').click(function(){
  $("[class*='real_time_video0'").hide();
  $(".real_time>ul>li>a").css({"background": "transparent", "color":"#393939"});
  $(this).children('a').css({"background": "linear-gradient(90deg, #0032A0 0%, #CC0000 50%, #FFD100 100%)", "color":"#fff"});
  let num = $(".real_time>ul>li:not(:first-child,:last-child)").index(this);
  console.log(num);
  $('.real_time_video0'+num).stop().show();
  $('.go_youtube').children('a').attr('href', $('.real_time_video0'+num).children('iframe').attr('id'));
});