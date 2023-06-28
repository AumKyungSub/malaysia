// 가장 윗부분 이벤트 베너 끄기
$('#close_aside').on('click',function(){
    // alert("test");
    $('.top_aside').stop().slideUp();
});

// 메인 슬라이드쇼
$("#slider_banner_main").bxSlider({
  // 슬라이드간의 마진
  slideMargin:0,
  // 오토슬라이드
  auto: true,
  autoControls: true,
  // stopAutoOnClick: true,
  pager: true,
  // 오토슬라이드 start/pause버튼 합치기
  autoControlsCombine:true,
  // 텍스트 없게
  startText:" ",
  stopText:" ",
  // 오류픽스 : 터치로 이동되는 것을 막아서 이미지 클릭이 이동 되도록
  touchEnabled : (navigator.maxTouchPoints > 0)
});

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