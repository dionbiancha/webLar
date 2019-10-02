window.onscroll = function(){
    var top = window.pageYOffset || document.documentElement.scrollTop
    if( top > 300 ) {
        $("#menu").addClass("menu-diferente");
    } 
    else {
        $("#menu").removeClass("menu-diferente");
    }
}
 