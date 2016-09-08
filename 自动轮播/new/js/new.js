$(function(){
    var i = 0;
    var timer = null;
    $('.img').width($(".img li").length * $(".img img").width());
    $(".little-cir li").first().addClass("active");
    //自动轮播
     timer = setInterval(function(){
         if(i == $(".img li").length){
         i=0;
         $(".img").css({ left: 0 });
     };
      $(".img").stop().animate({ left: -i*980 },300);
      $(".little-cir li").eq(i).addClass("active").siblings().removeClass("active");
     i++;
     },2000);
     //左右按钮事件
     $(".arrow_r").click(function(){
         if(i == $(".img li").length){
         i=0;
         }
      $(".img").stop().animate({ left: -i*980 },300);
      $(".little-cir li").eq(i).addClass("active").siblings().removeClass("active");
        i++;
     })
     $(".arrow_l").click(function(){
         if(i == -1){
         i=$(".img li").length-1;
         }
      $(".img").stop().animate({ left: -i*980 },300);
      $(".little-cir li").eq(i).addClass("active").siblings().removeClass("active");
        i--;
     })
     //鼠标移动上去停止轮播，离开又开始
     $(".banner").hover(function(){
        clearInterval(timer);
     },function(){
         timer = setInterval(function(){
         if(i == $(".img li").length){
         i=0;
         $(".img").css({ left: 0 });
     };
      $(".img").stop().animate({ left: -i*980 },300);
      $(".little-cir li").eq(i).addClass("active").siblings().removeClass("active");
     i++;
     },2000)
     })
     //鼠标点击圆点的时候
     $(".little-cir li").click(function(){
         var _index = $(this).index();
         i = _index;
         $(".img").stop().animate({ left: -i*980 },300);
      $(".little-cir li").eq(i).addClass("active").siblings().removeClass("active");
     })
     });



