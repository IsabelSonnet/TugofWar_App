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

    let line = $("#line");
    let rplayer = $("#rplayer");
    let lplayer = $("#lplayer");

    $(document).keydown(function (event) {
        if (collision($rplayer, $line) == true) {
            console.log("collision!");
        } else {
            console.log("no collision!");
        }
    });


    // Here is the collision algorithm
    function collision(R, l) {
        if (R.position().left < l.position().left + l.width() &&
            R.position().left + R.width() > l.position().left &&
            R.position().top < l.position().top + l.height() &&
            R.position().top + R.height() > l.position().top)
        {
            return true;
        } else {
            return false;
        }
    }

});
