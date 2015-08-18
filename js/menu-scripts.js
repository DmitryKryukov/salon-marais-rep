function showMenu(bool) {
     if (bool === "false") {
        $('nav').css({"opacity": "0"});
        $('header').css({"background-color": "rgba(0,0,0,0)"});
    }
    else {
        $('nav').css({"opacity": "1"});
        $('header').css({"background-color": "rgba(255,255,255,0.95)"});
    }
}

var opacity = getCookie("menu-Visible");

$(function() {
   showMenu(opacity);
   
   $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({scrollTop: $(el).offset().top-80}, 500);
        return false;
});
});

$('#menu-icon-nav').on('click',function(){
    if (opacity === "false"){
        opacity = "true";
        setCookie("menu-Visible", "true", 3600*24*30);
    }
    else  {
        opacity = "false";
        setCookie("menu-Visible", "false", 3600*24*30);
    }
    showMenu(opacity);
});