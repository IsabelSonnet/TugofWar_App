$(document).ready(() => {

    let $mtow = $("#movingtow");
    let $line = $("#line");
    let $rplayer = $("#rplayer");
    let $lplayer = $("#lplayer");

    let $ep1 = $("#ep1");
    let $ep2 = $("#ep2");
    let $ep3 = $("#ep3");
    let $ep8 = $("#ep8");
    let $ep9 = $("#ep9");
    let $ep0 = $("#ep0");

    let $half = ($(document).width())/2

    $(document).keydown(function (event) {
        switch (event.which) {
            case 37:
                $mtow.finish().animate({
                    left: "-=20"
                });
                break;
                    case 56: //8
                        $mtow.append($ep8);
                break;
                    case 57: //9
                        $mtow.append($ep9);
                break;
                    case 48: //0
                        $mtow.append($ep0);
                break;
            case 39:
                $mtow.finish().animate({
                    left: "+=20"
                });
                break;
                    case 49: //1
                        $mtow.prepend($ep1);
                break;
                    case 50: //2
                        $mtow.prepend($ep2);
                break;
                    case 51: //3
                        $mtow.prepend($ep3);
                break;
        }
    });

    $(document).keydown(function (event) {
        console.log($rplayer)
        console.log($lplayer)

        if (hasRightLost($mtow, $rplayer, $half) == true) {
            console.log("collision!");
            $("#lwinner").show();
            $("#rwinner").hide();
            hideGame();
        } else {
            console.log("no collision!");
            showGame();
        }

        if (hasLeftLost($mtow, $lplayer, $half) == true) {
            console.log("collision!");
            $("#rwinner").show();
            $("#lwinner").hide();
            hideGame();
        } else {
            console.log("no collision!");
            showGame();
        }
    });

    function hasRightLost(m, p, l) {
        console.log("checking if right has lost");
        console.log("tow right: ", m.position().left + m.width(), " player width: ", p.width(),  " line: ", l, " difference: ", ( m.position().left + m.width() -p.width()) - l);
        if (( m.position().left + m.width() -p.width()) < l)
        {
            return true;
        } else {
            return false;
        }
    }

    function hasLeftLost(m, p, l) {
        console.log("checking if left has lost");
        console.log("tow left: ", m.position().left, " player width: ", p.width(),  " line: ", l, "difference: ", (m.position().left + p.width()) - l);
        if (( m.position().left + p.width())  > l)
        {
            return true;
        } else {
            return false;
        }
    }

    $("#startGame").click(function () {
        $("#instructions").hide();
        showGame();
    });

    function hideGame() {
        $("#extrapr").hide();
        $("#extrapl").hide();
        $line.hide();
        $mtow.hide();
        $("#scoreboard").hide();
        $("#countdown").hide();
    }

    function showGame() {
        $("#extrapr").show();
        $("#extrapl").show();
        $line.show();
        $mtow.show();
        $("#scoreboard").show();
        $("#countdown").show();
    }

    var remaining = 40; //we need to find a way to wait to start the timer until the start game button is pressed and finish when the collision happens
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
