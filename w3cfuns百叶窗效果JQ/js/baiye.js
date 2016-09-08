(function($) {
	$.fn.extend( {
		"baiye" : function(options) {
			options = $.extend( {
				z_index : 1000,
				width : 1084		//大图跟小图的宽度之和
			}, options);
			$(this).css("position", "relative");// 设置为相对定位
			var allWidth = parseInt($(this).css("width"));	//外层宽度
			var divChild = $(this).children();		//子元素设置为绝对定位
			divChild.css("position", "absolute");
			var n = divChild.length;//获取总数量
			var imgSee = divChild.find("img").next();
			var widthSee = imgSee.width();	//'按钮'宽度
			var bai_current = 0;	// 当前索引
			divChild.each(function(e) {//初始化位置
				divChild.eq(e).css( {
					"z-index" : options.z_index - e * 10,
					"right" : widthSee * (n - e - 1),
					"position" : "absolute",
					"width" : options.width
				});
			});
			imgSee.each(function(e) {
				$(this).click(function() {
					if (bai_current < e) {
						for ( var i = bai_current; i < e; i++) {
							divChild.eq(i).animate( {
								"right" : allWidth - (i + 1) * widthSee
							}, 600);
							bai_current = e;
						}
					} else {
						for ( var i = bai_current; i > e; i--) {
							divChild.eq(i - 1).animate( {
								"right" : (n - i) * widthSee
							}, 600);
							bai_current = e;
						}
					}
				});
			});
		}
	});
})(jQuery)