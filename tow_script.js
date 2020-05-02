$(document).ready(() => {

    var mtow = $("#movingtow");

    $(document).keydown(function (event) {
        switch (event.which) {
            case 37:
                $(mtow).finish().animate({
                    left: "-=20"
                });
                break;
            case 39:
                $(mtow).finish().animate({
                    left: "+=20"
                });
                break;
        }
    });

});
