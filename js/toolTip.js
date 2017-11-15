var className = "tooltip-box";
var getDocID = function(id){
    return document.getElementById(id);
}
var parentdiv = getDocID("container");
function showTooltip(obj,id,html,width,height){
    if(getDocID(id) == null){

        var tooltipBox;
        tooltipBox = document.createElement("div");
        tooltipBox.className = className;
        tooltipBox.id = id;
        tooltipBox.innerHTML = html;
        obj.appendChild(tooltipBox);
        tooltipBox.style.width = width?width + 'px':"auto";
        tooltipBox.style.position = "absolute";
        tooltipBox.style.display = "block";
        var left = obj.offsetLeft;
        var top = obj.offsetTop + 20;
         tooltipBox.style.left = left + 'px';
         tooltipBox.style.top = top + 'px';

         obj.addEventListener("mouseout",function(){
             setTimeout(function(){
                 getDocID(id).style.display = "none";
             },100)
         })
       /* obj.onmouseout = function(){
            setTimeout(function(){
                getDocID(id).style.display = "none";
            },300)

        }*/

    }else{

        getDocID(id).style.display = "block";
    }
}
parentdiv.addEventListener("mouseover",function(e){
    var target = e.target;
    if(target.className == "tooltip"){
        var _html;
        var _id;
        var _width;
        switch(target.id){
            case "weibo":
                _id = "wb";
                _html = "jiekxueyuan";
                _width = 200;
                break;
        }
        showTooltip(target, _id, _html, _width);
    }
})
/*var wb = getDocID("weibo");
wb.onmousemove = function(){
    showTooltip(this,"wb", "极客学院——jike",200);
}*/