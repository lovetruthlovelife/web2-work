var box=document.getElementById("box");
//var oNavlist=document.getElementById(“nav').children;
var slider=document.getElementById("slider");
var left=document.getElementById("left");
var right=document.getElementById("right");
var oNavlist=document.getElementById("nav").children;
var index=1;
var timer;
var isMoving=false;
var report=document.getElementById("report");
var cnt=360;
setInterval(function () {
    report.style.left=cnt+"px";
    cnt--;
    if(cnt==-550){
        cnt=720;
    }
},10);


function next(){
    if(isMoving){
        return ;
    }
    isMoving=true;
    index++;
    navChange();
    animate(slider,{left:-600*index},function () {
        if(index==6){
            slider.style.left="-600px";
            index=1;
        }
        isMoving=false;
    });
}
function prev(){
    if(isMoving){
        return ;
    }
    isMoving=true;
    index--;
    navChange();
    animate(slider,{left:-600*index},function () {
        if(index==0){
            slider.style.left="-3600px";
            index=5;
        }
        isMoving=false;
    });
}
timer=setInterval(next,3000);

box.onmouseover=function () {
    animate(left,{opacity:50});
    animate(right,{opacity:50});
    clearInterval(timer);
};

box.onmouseout=function () {
    animate(left,{opacity:0});
    animate(right,{opacity:0});
    timer=setInterval(next,3000);
};
left.onclick=prev;
right.onclick=next;

for (var i = 0; i <oNavlist.length ; i++) {
    oNavlist[i].idx=i;
    oNavlist[i].onclick=function () {
        index=this.idx+1;
        navChange();
        animate(slider,{left:-600*index});
    }
}
//小按钮背景切换
function navChange() {
    //粗暴的方式
    for (var i = 0; i < oNavlist.length; i++) {
        oNavlist[i].className="";
    }
    if (index==6){
        oNavlist[0].className="active";
        index=1;
    }else if(index==0){
        oNavlist[4].className="active";
        index=5;
    }else{
        oNavlist[index-1].className="active";
    }
}