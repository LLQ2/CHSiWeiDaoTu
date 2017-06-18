/**
 * Created by liangqin on 2017/6/17.
 */

window.alert("费娟老师您好，我是来自14电信一班的   林良钦   学号是:2014864229")

var id = function(el) {          return document.getElementById(el);        },
    c = id('photo-list');
if(c) {
    var ul = id('scroll'),
        lis = ul.getElementsByTagName('li'),
        itemCount = lis.length,
        width = lis[0].offsetWidth, //获得每个img容器的宽度
        marquee = function() {
            c.scrollLeft += 2;
            if(c.scrollLeft % width <= 1){  //当 c.scrollLeft 和 width 相等时，把第一个img追加到最后面
                ul.appendChild(ul.getElementsByTagName('li')[0]);
                c.scrollLeft = 0;
            };
        },
        speed = 50; //数值越大越慢
    ul.style.width = width*itemCount + 'px'; //加载完后设置容器长度
    var timer = setInterval(marquee, speed);
    c.onmouseover = function() {
        clearInterval(timer);
    };
    c.onmouseout = function() {
        timer = setInterval(marquee, speed);
    };
};

setInterval(function(){
    if(!document.body.className){
        document.body.className='color';

    }else{
        document.body.className='';
    }
},500)



    function changeColor(){
        var color="#f00|#0f0|#00f|#880|#808|#088|yellow|green|blue|gray";
        color=color.split("|");
        document.getElementById("blink").style.color=color[parseInt(Math.random() * color.length)];
    }
setInterval("changeColor()",200);



var path = './'; //图片相对路径
function show(obj) {
    var name = obj.innerText;
    var sDiv = document.getElementById('img_' + name.split('.')[0]);//文件名自己判断
    if (!sDiv) {
        sDiv = document.createElement("DIV");
        sDiv.id = 'img_' + name.split('.')[0];
        sDiv.style.position = 'absolute';
        sDiv.style.top = obj.offsetTop + obj.offsetWidth + 'px';
        sDiv.style.left = obj.offsetLeft +obj.offsetHeight + 'px';
        sDiv.style.border = '1px red solid';
        var img = document.createElement("img");
        img.src = path + name;
        sDiv.appendChild(img);
        document.body.appendChild(sDiv);
    }
    sDiv.style.display = 'block';
}
function f(obj) {
    var name = obj.innerText;
    var sDiv = document.getElementById('img_' + name.split('.')[0]);//文件名自己判断
    if (sDiv) {
        sDiv.style.display = 'none';
    }
}
