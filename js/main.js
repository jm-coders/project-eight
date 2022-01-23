function openNav() {
        document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
        document.getElementById("myNav").style.width = "0%";
}
$(document).ready(function(){
    $(".stcky_menu").waypoint(function(direction){
        if (direction == "down"){
            $(".top_header").addClass("stcky");
        } else {
            $(".top_header").removeClass("stcky");
        };
    });

    
// Active link

$("nav ul li a").click(function(){
    $("nav ul li a").removeClass("active");
    $(this).addClass("active");
});

// SMOOTH Scroll FOR safari/IE/edge

$("a").on('click',function(event){
    if (this.hash !== "") {
        event.preventDefault();

        var hash = this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function(){
            window.location.hash = hash;
        })
    }
});
});
