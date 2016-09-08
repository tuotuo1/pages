window.onload = function(){
	//容器对象
	var box = document.getElementById('container');
	//获取图片Ndellist对象集合
	var imgs = box.getElementsByTagName('img');
	//单张图片的宽度
	var imgWidth = imgs[0].offsetWidth;
	//设置掩藏门体露出的宽度
	var exposeWidth = 160;
	//设置容器的总宽度
	var boxWidth = imgWidth + (imgs.length - 1)* exposeWidth;
	box.style.width = boxWidth + 'px';
	//设置每道门的初始位置
	function setImgPos() {
		for (var i = 1,len = imgs.length; i < len; i++) {
			imgs[i].style.left = imgWidth + exposeWidth * (i - 1) + 'px';
		}
	}
	setImgPos();
	 //计算没道门打开时应移动是距离
	 var translate = imgWidth - exposeWidth;
	 //为每道门绑定事件
	 for(var i = 0, len = imgs.length; i<len; i++){
	 	//使用立即调用的函数表达式，为了获得不同的i值
	 	(function (i) {
	 		imgs[i].onmouseover = function (){
	 			//先将每道门复位
	 			setImgPos();
	 			//打开门
	 			for(var j = 1; j<=i;j++){
	 				imgs[j].style.left = parseInt(imgs[j].style.left,10) - translate +'px';
	 			}
	 		}
	 	})(i);
	 }
	};
