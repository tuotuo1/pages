// JavaScript Document
(function($) {
	$.fn.PicTab = function(option) {
		var option = option || {};
		var animateSpeed = option.aTime || 200; //动画速度，默认200毫秒
		var timeSpeed = option.tTime || 2000; //时间速度，默认2000毫秒
		var imgStep = option.imgStep || 4; //显示缩略图张数
		var goAuto; //自动轮播
		var curStep = 1; //当前小图页数
		var currentIndex = -1; //当前索引
		var t = $(this);
		var _pic = t.children(".main_pic"); //图片UL
		var _picLI = _pic.children("li"); //图片Li
		imgStep = imgStep <= 0 ? 1 : imgStep > _picLI.length ? _picLI.length : imgStep; //	是否输入小于0或者大于总数量
		var LI_width = _picLI.width(); //图片宽度
		_pic.css("width", _picLI.length * LI_width); //设置图片UL的宽度
		var foucsDiv = '<div class="small_foucs">';
		foucsDiv += '<div class="small_img">';
		foucsDiv += '<ul class="main_pic_num">'; //小图（缩略图）
		_picLI.each(function() {
			foucsDiv += '<li><img src="' + $(this).find("img").attr("src").replace("big", "small") + '"/></li>'; //添加小图图片
		});
		foucsDiv += '</ul>';
		foucsDiv += '</div>';
		foucsDiv += '</div>';
		t.append(foucsDiv);
		var _smallFoucs = t.children(".small_foucs");
		var _small = _smallFoucs.children(".small_img").children(".main_pic_num"); //小图UL
		var _smallLi = _small.children("li"); //小图LI
		var sLI_width = _smallLi.width() + parseInt(_smallLi.css("margin-left")) + parseInt(_smallLi.css("margin-right")) + parseInt(_smallLi.css("border-left-width")) + parseInt(_smallLi.css("border-right-width")); //小图宽度,当前选中的焦点图border为2px,左右各1px所以最后要加2
		_smallFoucs.css("width", sLI_width * imgStep);
		_small.css("width", _smallLi.length * sLI_width); //设置小图UL的宽度
		var allPage = _smallLi.length % imgStep == 0 ? _smallLi.length / imgStep : Math.floor(_smallLi.length / imgStep) + 1; //小图的"总页数"
		if (_picLI.length > imgStep) {
			_smallFoucs.append('<a class="small_foucs_prev"></a>'); //向左按钮
			_smallFoucs.append('<a class="small_foucs_next"></a>'); //向右按钮
		}
		$(this).find(".small_foucs_prev").click(function() { //向左按钮事件
			liAnimate(currentIndex - 1);
		});
		$(this).find(".small_foucs_next").click(function() { //向右按钮事件
			liAnimate(currentIndex + 1);
		});
		_smallLi.each(function(index) { //设置小图UL的LI的mouseover事件
			$(this).mouseover(function() {
				liAnimate(index);
			});
		});
		function liAnimate(index) { //动画事件 参数为li的下标(索引)值
			index = index >= _picLI.length ? 0 : index < 0 ? _picLI.length - 1 : index; //索引是否合法
			clearInterval(goAuto); //停止自动轮播
			_smallLi.eq(index).addClass("curImg").siblings().removeClass("curImg"); //添加当前焦点图样式
			_pic.stop(true, false).animate({
				"left": -index * LI_width + "px"
			}, animateSpeed); //大图执行动画
			currentIndex = index;
			if (imgStep <= currentIndex + 1) { //判断小图是否该换页了
				_small.stop(true, false).animate({
					"marginLeft": -Math.floor(currentIndex / imgStep) * imgStep * sLI_width + "px"
				}, animateSpeed);
				curStep += 1;
			} else if (curStep != 1 && currentIndex == 0) {
				_small.stop(true, false).animate({
					"marginLeft": 0 * imgStep * sLI_width + "px"
				}, animateSpeed);
				curStep = 1;
			}
			autoGo();
		}
		function autoGo() {
			goAuto = setInterval(function() //	自动轮播
			{
				liAnimate(currentIndex + 1);
			}, timeSpeed);
		}
		_small.children("li").eq(0).mouseover(); //触发下标为0的mouseover事件
	}
})(jQuery)