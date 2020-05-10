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
    });

    $(document).keydown(function (event) {
        console.log($rplayer)
        console.log($lplayer)

        if (hasRightLost($rplayer, 400) == true) {
            console.log("collision!");
            $("#lwinner").show();
            $("#rwinner").hide();
        } else {
            console.log("no collision!");
        }

        if (hasLeftLost($lplayer, 400) == true) {
            console.log("collision!");
            $("#rwinner").show();
            $("#lwinner").hide();
        } else {
            console.log("no collision!");
        }
    });

    function collision_sg(p, l) {
        console.log("p.left", p.position().left);
        console.log("p.right", p.width());
        console.log("line.left", l.position().left);

        if (p.position().left < l.position().left &&
            p.position().left + p.width() > l.position().left)
        {
            return true;
        } else {
            return false;
        }
    }

     function collision(p, l) {
        if (p.position().left < l.position().left + l.width() &&
            p.position().left + p.width() > l.position().left
            //&&
            //p.position().top < l.position().top + l.height() &&
            //p.position().top + p.height() > l.position().top
           )
        {
            return true;
        } else {
            return false;
        }
    }

    function hasRightLost(p, l) {
        console.log("checking if right has won")
        if (p.position().left < l)
        {
            return true;
        } else {
            return false;
        }
    }

    function hasLeftLost(p, l) {
        console.log("checking if left has won")
        console.log("player left: ", p.position().left, " line: ", l, "difference: ", p.position().left - l)
        if (p.position().left > l)
        {
            return true;
        } else {
            return false;
        }
    }


    var remaining = 40;
    var timer = setInterval(function () {
        if (remaining <= 0) {
        clearInterval(timer);
        document.getElementById("countdown").alert = "Finished";
        } else {
        document.getElementById("countdown").innerHTML = remaining + " seconds left";
        }
        remaining -= 1;
    }, 1000);

});
