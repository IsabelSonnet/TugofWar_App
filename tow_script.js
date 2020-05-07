$(document).ready(() => {

    var mtow = $("#movingtow");

    let $line = $("#line");
    let $rplayer = $("#rplayer");
    let $lplayer = $("#lplayer");

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

        if (collision($rplayer, $line) == true) {
            $("#lwinner").show();
            console.log("collision!");
        } else {
            console.log("no collision!");
            $("#lwinner").hide();
        }

        if (collision($lplayer, $line) == true) {
            $("#rwinner").show();
            console.log("collision!");
        } else {
            console.log("no collision!");
            $("#rwinner").hide();
        }
    });

 //   $(document).keydown(function (event) {
 //       if (collision($rplayer, $line) == true) {
 //           $("#winner").show();
 //           console.log("collision!");
 //       } else {
 //           console.log("no collision!");
 //           $("#winner").hide();
 //       }
 //   });

    function collision(p, l) {
        if (p.position().left < l.position().left + l.width() &&
            p.position().left + p.width() > l.position().left &&
            p.position().top < l.position().top + l.height() &&
            p.position().top + p.height() > l.position().top)
        {
            return true;
        } else {
            return false;
        }
    }

});
