var data = [];
var dataStr = '1、霍比特人<br>\
<br>\
导演：彼得。杰克逊<br>\
编剧：个电饭锅蛋糕<br>\
片长：<br>\
<br>\
<br>\
2、霍比特人<br>\
<br>\
导演：<br>\
编剧：<br>\
片长：<br>\
<br>\
<br>\
3、霍比特人<br>\
<br>\
导演：<br>\
编剧：<br>\
片长：<br>\
<br>\
<br>\
4、霍比特人<br>\
<br>\
导演：<br>\
编剧：<br>\
片长：<br>\
<br>\
<br>\
5、霍比特人<br>\
<br>\
导演：<br>\
编剧：<br>\
片长：<br>\
<br>\
<br>\
6、霍比特人<br>\
<br>\
导演：<br>\
编剧：<br>\
片长：<br>\
<br>\
<br>\
7、霍比特人<br>\
<br>\
导演：<br>\
编剧：<br>\
片长：<br>\
';
    var d = dataStr.split('<br><br><br>')
    for (var i=0; i<d.length;i++){
        var c = d[i].split('<br><br>');
        data.push({
            img: c[0].replace('、',' ')+'.jpg',
            caption:c[0].split('、')[1],
            desc:c[1]
        });
    console.log(c[0].replace('、',' ')+'.jpg'); 
    }