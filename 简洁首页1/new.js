
window.onload = function () {
    var arr_img = ["images/slide-img1.jpg", "images/slide-img2.jpg", "images/slide-img3.jpg", "images/slide-img1.jpg"]

    setInterval(changeImage, 3000);
    var curIndex = 0;
    function changeImage() {
        var image_in = document.getElementById("image_in");
        var body_in = document.getElementsByClassName("body_in");
        
        if (curIndex == arr_img.length - 1) {
            curIndex = 0;
        }
        image_in.src = arr_img[curIndex];
        body_in[0].style.animationPlayState = "running";
        body_in[0].style.animationDuration = "3000ms"
        body_in[0].style.opacity = "1";
        curIndex += 1;
    }

    
    //导航栏切换时的效果
    $(".header_right li").click(function () {
        $(".header_right li").each(function () {
            $(this).find("span").removeClass("navi_active");
        });
        $(this).find("span").addClass("navi_active");
    });
    //about 的图片轮播

    var i = 0;
    var timer = null;
    $('.about_con_box').first().addClass('active'); //给第一个方块添加样式

    $('.about_slide').width($('.about_box').length * ($('.about_box').width()));

    //点击时候切换
    $('.about_con_box').click(function () {
        var picnum = $('.about_box').length;
        var _index = $(this).index();
        i = _index;
        if (i == $('.about_con_box').length) {
            i = 0;
            $('.about_box').css({ left: 0 });
        };
        var nowindex = i * 3;
        if (nowindex + 3 > picnum) {
            nowindex = picnum - 3;
        }
        $('.about_box').stop().animate({ left: -390 * nowindex }, 500);
        //当页面<992时
        var w = document.body.offsetWidth;
        if(w<992){
           nowindex = i * 2;
           $('.about_box').stop().animate({ left: -390 * nowindex }, 500); 
        } 
        $('.about_con_box').eq(i).addClass('active').siblings().removeClass('active');
        i++;


    })



}