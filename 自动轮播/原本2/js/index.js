$(function () {
    var i = 0;
    var timer = null;
    for (var j = 0; j < $('.img li').length; j++) { //创建圆点
        $('.num').append('<li></li>')
    }
    $('.num li').first().addClass('active'); //给第一个圆点添加样式

    $('.img').width($('.img li').length * ($('.img img').width())); 

    //定时器自动播放
    var timer;
    timer = setInterval(function () {
        if (i == $('.img li').length) {
            i = 0;
            $('.img').css({ left: 0 });
        };
        $('.img').stop().animate({ left: -i * 900 }, 300);
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');
        i++;
    }, 2000);

    //鼠标划入圆点
    $('.num li').mouseover(function () {
        var _index = $(this).index();
        i = _index;
        $('.img').stop().animate({ left: -_index * 900 }, 150);
        $('.num li').eq(_index).addClass('active').siblings().removeClass('active');
    });

    //鼠标移入，暂停自动播放，移出，开始自动播放
    $('.banner').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            if (i == $('.img li').length) {
                i = 0;
                $('.img').css({ left: 0 });
            };
            $('.img').stop().animate({ left: -i * 900 }, 300);
            $('.num li').eq(i).addClass('active').siblings().removeClass('active');
            i++;
        }, 2000);
    });

    // 上一个按钮
    $('.prev').click(function () {
        if (i == 0) {
            i = $('.img li').length - 1;
        }else{
            i--;
        }
        $('.img').stop().animate({ left: -i * 900 }, 150);
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');
    });

     // 下一个按钮
    $('.next').click(function () {
        if (i == $('.img li').length - 1) {
            i = 0;
        }else{
            i++;
        }
        $('.img').stop().animate({ left: -i * 900 }, 150);
        $('.num li').eq(i).addClass('active').siblings().removeClass('active');
    });

})

