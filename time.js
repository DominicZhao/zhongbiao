/**
 * Created by Administrator on 2016/8/18 0018.
 */
window.onload=function(){
  var box=document.getElementsByClassName("box")[0];

    var time=new Date();
    var h=zhizheng(45,4,"#000",time.getHours()*30-90+(time.getMinutes()*6)/12);
    var f=zhizheng(55,3,"#333",time.getMinutes()*6-90);
    var m=zhizheng(65,2,"red",time.getSeconds()*6-90);
    setInterval(function(){
        time=new Date();
        h.style.transform="translate(100px,"+(200-4)/2+"px) rotate("+(time.getHours()*30-90+(time.getMinutes()*6)/12)+"deg)";
        f.style.transform="translate(100px,"+(200-3)/2+"px) rotate("+(time.getMinutes()*6-90)+"deg)";
        m.style.transform="translate(100px,"+(200-2)/2+"px) rotate("+(time.getSeconds()*6-90)+"deg)";
    },1000);
    kedu();
    function kedu(){
        for(var i=0;i<60;i++){
            if(i%5==0){
                var w=4;var h=10;
            }else{
                var w=2;var  h=6;
            }
            var ke=document.createElement("div");
            ke.style.cssText="width:"+w+"px;height:"+h+"px;background:#141414;position: absolute;top:0;left:0;"
            ke.style.transform="translate("+(200-w)/2+"px,0) rotate("+i*6+"deg)";
            ke.style.transformOrigin="center 100px";
            box.appendChild(ke)
        }
    }
    function zhizheng(w,h,s,j){
        var div=document.createElement("div");
        div.style.cssText="width:"+w+"px;height:"+h+"px;position: absolute;top:0;left:0;background:"+s+";transform-origin:left "+h/2+"px;";
        div.style.transform="translate(100px,"+(200-h)/2+"px) rotate("+j+"deg)";
        box.appendChild(div);
        return div
    }

};