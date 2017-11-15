var jkcommon = {
    init: function () {
        this.lessImgShow();
    },

    lessImgShow:function (){
    $('.lessonimgbox').bind("mouseover", function(){
        var _pop = $(this).find('.img-pop');
        $(this).css({border: "2px solid #1abc9c", width: "226px", height: "226px"});
        TweenMax.to(_pop, 0.5, {top: 50, ease: Bounce.easeOut});
    })
        $('.lessonimgbox').bind("mouseout",function () {
            $('.lessonimgbox').css({border:"0", width:"230px",height:"230px"});
            var _pop = $(this).find(".img-pop");
            TweenMax.to(_pop, 0.5,{top:230, ease:Linear.easeNone});
        })
}
}
$(function () {
    jkcommon.init();
})