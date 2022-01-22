$(document).ready(function(){
    $(".stcky_menu").waypoint(function(direction){
        if (direction == "down"){
            $(".top_header").addClass("stcky");
        } else {
            $(".top_header").removeClass("stcky");
        };
    });
});