$(document).ready(() => {

    let $gamePlay = false;
    let $miniGamePlay = false;

    let $mtow = $("#movingtow");
    let $line = $("#line");
    let $rplayer = $("#rplayer");
    let $lplayer = $("#lplayer");

    let $rteam = $("#rteam");
    let $lteam = $("#lteam");

    let $ep1 = $("#ep1");
    let $ep2 = $("#ep2");
    let $ep3 = $("#ep3");
    let $ep8 = $("#ep8");
    let $ep9 = $("#ep9");
    let $ep0 = $("#ep0");

    let $half = ($(document).width()) / 2;

    $(document).keydown(function (event) {
        if ($gamePlay == false) {
            return;
        } else {
            switch (event.which) {
                case 37: //left
                    $mtow.finish().animate({
                        left: "-=20"
                    });
                    break;
                case 39: //right
                    $mtow.finish().animate({
                        left: "+=20"
                    });
                    break;

                case 49: //1
                    $lteam.append($ep1);
                    $mtow.finish().animate({
                        left: "-=100"
                    });
                    break;
                case 50: //2
                    $lteam.append($ep2);
                    $mtow.finish().animate({
                        left: "-=100"
                    });
                    break;
                case 51: //3
                    $lteam.append($ep3);
                    $mtow.finish().animate({
                        left: "-=100"
                    });
                    break;
                case 56: //8
                    $rteam.append($ep8);
                    $mtow.finish().animate({
                        left: "+=60"
                    });
                    break;
                case 57: //9
                    $rteam.append($ep9);
                    $mtow.finish().animate({
                        left: "+=60"
                    });
                    break;
                case 48: //0
                    $rteam.append($ep0);
                    $mtow.finish().animate({
                        left: "+=60"
                    });
                    break;
            }
        }
    });

    $(document).keydown(function (event) {
        if ($miniGamePlay == false) {
            return;
        } else {
            switch (event.which) {
                case 37: //left

                    break;
                case 39: //right

                    break;
            }
        }
    });

    let $lscore = 0;
    let $rscore = 0;
    $("#rscore").html("Right:<br><b>" + $rscore + "</b>");
    $("#lscore").html("Left:<br><b>" + $lscore + "</b>");

    $(document).keydown(function (event) {
        if ($gamePlay == false) {
            return;
        } else {
            console.log($rplayer);
            console.log($lplayer);

            if (hasRightLost($mtow, $rteam, $half) == true) {
                console.log("collision!");
                $("#lwinner").show();
                $("#rwinner").hide();
                hideGame();
                hideDraw();
                hideGreen();
                $lscore = $lscore + 1;
                console.log($lscore);
                console.log($rscore);
                $(".score").html($lscore + " : " + $rscore);
                $gamePlay = false;
            } else {
                console.log("no collision!");
                showGame();
                hideDraw();
                hideGreen();
            }

            if (hasLeftLost($mtow, $lteam, $half) == true) {
                console.log("collision!");
                $("#rwinner").show();
                $("#lwinner").hide();
                hideGame();
                hideDraw();
                hideGreen();
                $rscore = $rscore + 1;
                console.log($lscore);
                console.log($rscore);
                $(".score").html($lscore + " : " + $rscore);
                $gamePlay = false;
            } else {
                console.log("no collision!");
                showGame();
                hideDraw();
                hideGreen();
            }
        }
    });

    function hasRightLost(m, p, l) {
        console.log("checking if right has lost");
        console.log("tow right: ", m.position().left + m.width(), " player width: ", p.width(), " line: ", l, " difference: ", (m.position().left + m.width() - p.width()) - l);
        if ((m.position().left + m.width() - p.width()) < l) {
            return true;
        } else {
            return false;
        }
    }

    function hasLeftLost(m, p, l) {
        console.log("checking if left has lost");
        console.log("tow left: ", m.position().left, " player width: ", p.width(), " line: ", l, "difference: ", (m.position().left + p.width()) - l);
        if ((m.position().left + p.width()) > l) {
            return true;
        } else {
            return false;
        }
    }

    $("#startGame").click(function () {
        remaining = 40;
        $("#instructions").hide();
        showGame();
        hideDraw();
        hideGreen();
        $gamePlay = true;
    });

    $(".restart").click(function () {
//        if ($rscore + $lscore == 33) {
//            Tizzy();
//        } else {
            remaining = 40;
            showGame();
            hideDraw();
            hideGreen();
            $("#lwinner").hide();
            $("#rwinner").hide();
            $("#rscore").html("Right:<br><b>" + $rscore + "</b>");
            $("#lscore").html("Left:<br><b>" + $lscore + "</b>");
            $mtow.css("left", "34%");
            $miniGamePlay = false;
            $gamePlay = false;
            $("#extrapl").append($ep1);
            $("#extrapl").append($ep2);
            $("#extrapl").append($ep3);
            $("#extrapr").append($ep8);
            $("#extrapr").append($ep9);
            $("#extrapr").append($ep0);

//        }
    });

    var remaining = 40;
    var timeLeft = 10;

    var timer = setInterval(function onetime() {
        if (remaining <= 1) {
            clearInterval(timer);
            hideGame();
            $("#nwinner").show();
            $("#showgreen").hide();
            $gamePlay = false;
            $miniGamePlay = false;

            setTimeout(miniTimer, 1000);

        } else {
            document.getElementById("countdown").innerHTML = remaining + " seconds left";
        }
        remaining -= 1;
    }, 100);

    function miniTimer() {
        hideGame();
        $("#nwinner").hide();
        $("#showgreen").show();
        $gamePlay = false;
        $miniGamePlay = false;
    }

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

    function Tizzy() {
        let ranNum = Math.random();
        if (ranNum > 0.5) {
            $("#ltizzy").show();
            hideGame();
            $lscore = $lscore + 1;
            console.log($lscore);
            console.log($rscore);
            $(".score").html($lscore + " : " + $rscore);
            $gamePlay = false;
        } else {
            console.log("collision!");
            $("#rtizzy").show();
            hideGame();
            $rscore = $rscore + 1;
            console.log($lscore);
            console.log($rscore);
            $(".score").html($lscore + " : " + $rscore);
            $gamePlay = false;
        }
    }

});
