window.onload = function () {
    //添加模板框架
    window.onscroll = function () {
        var oParent = document.getElementsByClassName('waterfall');// 父级对象

        var contentH = document.body.scrollHeight;//内容高度
        var documentH = window.screen.availHeight;//页面高度
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        var xx = contentH - documentH - scrollTop;



        if (contentH >= 8000) {
            return;
        }
        if (xx <= 100) {
            var oParent = document.getElementsByClassName('waterfall')[0];// 父级对象
            var dataInt = ["images/32.jpg", "images/31.jpg", "images/30.jpg", "images/38.jpg", "images/35.jpg"];
            for (var i = 0; i < dataInt.length; i++) {
                var ofallone = document.createElement('div'); //添加 元素节点
                ofallone.className = 'fall-one';                   //添加 类名 name属性
                oParent.appendChild(ofallone);              //添加 子节点
                var o_a = document.createElement('a');
                o_a.className = 'fall-img';
                ofallone.appendChild(o_a);
                var oImg = document.createElement('img');
                oImg.src = dataInt[i];
                o_a.appendChild(oImg);
                var o_span = document.createElement('span');
                o_span.className = 'stop-same';
                o_a.appendChild(o_span);
                var o_div = document.createElement('div');

                o_div.className = 'cover-in';
                o_a.appendChild(o_div);
                var o_p1 = document.createElement('p');
                o_p1.className = 'description';
                o_p1.style.margin = '10px 0';
                o_p1.style.background = '0';
                ofallone.appendChild(o_p1);
                var o_p2 = document.createElement('p');
                o_p2.className = 'stats';
                ofallone.appendChild(o_p2);
                var o_p2_img = document.createElement('img');
                o_p2_img.src = "images/14.jpg";
                o_p2.appendChild(o_p2_img);
                var o_div2 = document.createElement('div');
                o_div2.className = 'attribution cf';
                ofallone.appendChild(o_div2);
                var o_div2_a = document.createElement('a');
                o_div2_a.className = 'img-a';
                o_div2.appendChild(o_div2_a);
                var o_div2_a_img = document.createElement('img');
                o_div2_a_img.src = "images/5.jpg";
                o_div2_a.appendChild(o_div2_a_img);
                var o_div2_att = document.createElement('div');
                o_div2_att.className = 'att-text';
                o_div2.appendChild(o_div2_att);
                var o_div2_att_p = document.createElement('p');
                o_div2_att_p.innerHTML = '你哈皮';
                o_div2_att.appendChild(o_div2_att_p);
                var o_div2_att_p = document.createElement('p');
                o_div2_att_p.innerHTML = '你哈皮';
                o_div2_att.appendChild(o_div2_att_p);
                var o_div3 = document.createElement('div');
                o_div3.className = 'bottom-cover';
                ofallone.appendChild(o_div3);
                var o_div3_right = document.createElement('div');
                o_div3_right.className = 'cover-right';
                o_div3.appendChild(o_div3_right);
                var o_div3_right_a = document.createElement('a');
                o_div3_right_a.className = 'rignt-h';
                o_div3_right_a.title = '喜欢';
                o_div3_right.appendChild(o_div3_right_a);
                var o_div3_right_a_img = document.createElement('img');
                o_div3_right_a_img.src = "images/15.jpg";
                o_div3_right_a.appendChild(o_div3_right_a_img);
                var o_div3_left = document.createElement('div');
                o_div3_left.className = 'cover-left';
                o_div3.appendChild(o_div3_left);
                var o_div3_left_a = document.createElement('a');
                o_div3_left_a.className = 'main-head-text edit';
                o_div3_left_a.title = '采集';
                o_div3_left.appendChild(o_div3_left_a);
                var o_div3_left_a_span = document.createElement('span');
                o_div3_left_a_span.className = "text-e";
                o_div3_left_a_span.innerHTML = '采集';
                o_div3_left_a.appendChild(o_div3_left_a_span);
            }
            waterfall('waterfall', 'fall-one');

        };

    }
}
function waterfall(parent, fallone) {
    var oParent = document.getElementsByClassName('waterfall')[0];// 父级对象
    var afallone = document.getElementsByClassName('fall-one');// 获取存储块框的数组
    var fallone_w = afallone[0].offsetWidth;// 一个块框的宽
    var num = Math.floor(992 / fallone_w);//每行中能容纳几个快框数【窗口宽度除以一个块框宽度】


    var fallone_HArr = [];//用于存储 每列中的所有块框相加的高度。
    for (var i = 0; i < afallone.length; i++) {//遍历数组afallone的每个块框元素
        var fallone_h = afallone[i].offsetHeight;

        if (i < num) {
            fallone_HArr[i] = fallone_h;
            afallone[i].top = 0;
            afallone[i].left = fallone_w * i; //第一行中的num个块框的高度 fallone_HArr
        } else {
            var minH = Math.min.apply(null, fallone_HArr);//数组fallone_HArr中的最小值minH
            var minHIndex = getminHIndex(fallone_HArr, minH);
            var margin = 15;
            afallone[i].style.position = 'absolute';
            afallone[i].style.top = '0';
            afallone[i].style.left = '0';//设置绝对位移
            afallone[i].style.top = minH + 15 + 'px';
            afallone[i].style.left = afallone[minHIndex].offsetLeft + 'px';
            //数组 最小高元素的高 + 添加上的fallone_HArr[i]块框高
            fallone_HArr[minHIndex] += afallone[i].offsetHeight + margin;//更新添加了块框后的列高
        }
    }

    var waterfall_max = Math.max.apply(null, fallone_HArr);
    oParent.style.height = waterfall_max.toString() + 'px';


}

/**获取 fallone高度 最小值的索引index*/
function getminHIndex(fallone_HArr, minH) {
    for (var i in fallone_HArr) {
        if (fallone_HArr[i] == minH) {
            return i;
        }
    }
}
//导航栏下标出现
function navi_dropdown() {
    var more = document.getElementsByClassName('more')[0];
    var dropdown = document.getElementsByClassName('dropdown')[0];
    dropdown.style.display = 'block';

}
function navi_dropdown_out() {
    var more = document.getElementsByClassName('more')[0];
    var dropdown = document.getElementsByClassName('dropdown')[0];
    dropdown.style.display = 'none';
}










