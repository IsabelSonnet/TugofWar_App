$(document).ready(() => {

    let $mtow = $("#movingtow");
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

        if (hasRightLost($mtow, $rplayer, 400) == true) {
            console.log("collision!");
            $("#lwinner").show();
            $("#rwinner").hide();
        } else {
            console.log("no collision!");
        }

        if (hasLeftLost($mtow, $lplayer, 400) == true) {
            console.log("collision!");
            $("#rwinner").show();
            $("#lwinner").hide();
        } else {
            console.log("no collision!");
        }
    });

    function hasRightLost(m, p, l) {
        console.log("checking if right has lost")
        console.log("tow right: ", m.position().left + m.width(), " player width: ", p.width(),  " line: ", l, " difference: ", ( m.position().left + m.width() -p.width()) - l)
        if (( m.position().left + m.width() -p.width()) < l)
        {
            return true;
        } else {
            return false;
        }
    }

    function hasLeftLost(m, p, l) {
        console.log("checking if left has lost")
        console.log("tow left: ", m.position().left, " player width: ", p.width(),  " line: ", l, "difference: ", (m.position().left + p.width()) - l)
        if (( m.position().left + p.width())  > l)
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
