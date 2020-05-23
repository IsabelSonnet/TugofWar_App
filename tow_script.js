$(document).ready(() => {

    let $gamePlay = false;
    let $miniGamePlay = false;
    let $miniGame = false;

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
                    $("#lwinner").show();
                    $("#rwinner").hide();
                    clearInterval(timer);
                    $("#fire").show();
                    hideGame();
                    $("#nwinner").hide();
                    $("#showgreen").hide();
                    $lscore = $lscore + 1;
                    console.log($lscore);
                    console.log($rscore);
                    $(".score").html($lscore + " : " + $rscore);
                    $gamePlay = false;
                    $miniGame = false;
                    $miniGamePlay = false;
                    break;
                case 39: //right
                    $("#rwinner").show();
                    $("#lwinner").hide();
                    clearInterval(timer);
                    $("#fire").show();
                    hideGame();
                    $("#nwinner").hide();
                    $("#showgreen").hide();
                    $rscore = $rscore + 1;
                    console.log($lscore);
                    console.log($rscore);
                    $(".score").html($lscore + " : " + $rscore);
                    $gamePlay = false;
                    $miniGame = false;
                    $miniGamePlay = false;
                    break;
            }
        }
    });

    $(document).keydown(function (event) {
        if ($miniGame == false) {
            return;
        } else {
            switch (event.which) {
                case 37: //left
                    $("#rwinner").show();
                    $("#lwinner").hide();
                    clearInterval(timer);
                    $("#fire").show();
                    hideGame();
                    $("#nwinner").hide();
                    $("#showgreen").hide();
                    $rscore = $rscore + 1;
                    console.log($lscore);
                    console.log($rscore);
                    $(".score").html($lscore + " : " + $rscore);
                    $gamePlay = false;
                    $miniGame = false;
                    $miniGamePlay = false;
                    break;
                case 39: //right
                    $("#lwinner").show();
                    $("#rwinner").hide();
                    clearInterval(timer);
                    $("#fire").show();
                    hideGame();
                    $("#nwinner").hide();
                    $("#showgreen").hide();
                    $lscore = $lscore + 1;
                    console.log($lscore);
                    console.log($rscore);
                    $(".score").html($lscore + " : " + $rscore);
                    $gamePlay = false;
                    $miniGame = false;
                    $miniGamePlay = false;
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
                clearInterval(timer);
                $("#lwinner").show();
                $("#rwinner").hide();
                $("#fire").show();
                hideGame();
                $("#nwinner").hide();
                $("#showgreen").hide();
                $lscore = $lscore + 1;
                console.log($lscore);
                console.log($rscore);
                $(".score").html($lscore + " : " + $rscore);
                $gamePlay = false;
            } else {
                console.log("no collision!");
                showGame();
                $("#nwinner").hide();
                $("#showgreen").hide();
            }

            if (hasLeftLost($mtow, $lteam, $half) == true) {
                console.log("collision!");
                clearInterval(timer);
                $("#rwinner").show();
                $("#lwinner").hide();
                $("#fire").show();
                hideGame();
                $("#nwinner").hide();
                $("#showgreen").hide();
                $rscore = $rscore + 1;
                console.log($lscore);
                console.log($rscore);
                $(".score").html($lscore + " : " + $rscore);
                $gamePlay = false;
            } else {
                console.log("no collision!");
                showGame();
                $("#nwinner").hide();
                $("#showgreen").hide();
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
        clearInterval(timer);
        remaining = 25;
        timer = setInterval(function () {
            bigTimer();
        }, 1000);
        $("#instructions").hide();
        $("#fire").hide();
        showGame();
        $("#nwinner").hide();
        $("#showgreen").hide();
        $gamePlay = true;
    });

    $(".restart").click(function () {
        if ($rscore + $lscore == 13 || $rscore + $lscore == 33 || $rscore + $lscore == 56 || $rscore + $lscore == 99 || $rscore + $lscore == 1000) {
            Tizzy();
        } else {
            clearInterval(timer);
            remaining = 25;
            timer = setInterval(function () {
                bigTimer();
            }, 1000);
            showGame();
            $("#fire").hide();
            $("#nwinner").hide();
            $("#showgreen").hide();
            $("#rtizzy").hide();
            $("#ltizzy").hide();

            $("#lwinner").hide();
            $("#rwinner").hide();
            $("#rscore").html("Right:<br><b>" + $rscore + "</b>");
            $("#lscore").html("Left:<br><b>" + $lscore + "</b>");
            $mtow.css("left", "34%");
            $miniGamePlay = false;
            $miniGame = false;
            $gamePlay = true;
            $("#extrapl").append($ep1);
            $("#extrapl").append($ep2);
            $("#extrapl").append($ep3);
            $("#extrapr").append($ep8);
            $("#extrapr").append($ep9);
            $("#extrapr").append($ep0);

        }
    });

    var remaining = 25;
    var timer = setInterval(function () {
        doNothing();
    }, 1000);

    function doNothing() {
        return;
    }

    function bigTimer() {
        if (remaining <= 1) {
            console.log("hey the timer got here");
            clearInterval(timer);
            $("#fire").show();
            hideGame();
            $("#nwinner").show();
            $("#showgreen").hide();
            $gamePlay = false;
            $miniGame = false;
            $miniGamePlay = false;

            setTimeout(keyWorks, 5000);

            var randTime = (Math.random()) * 10000 + 15000;
            setTimeout(miniTimer, randTime);

        } else {
            document.getElementById("countdown").innerHTML = remaining + " seconds left";
        }
        remaining -= 1;
    }

    function miniTimer() {
        hideGame();
        $("#fire").hide();
        $("#nwinner").hide();
        $("#showgreen").show();
        $gamePlay = false;
        $miniGame = false;
        $miniGamePlay = true;
    }

    function keyWorks() {
        $minigame = true;
    }

    function hideGame() {
        $("#extrapr").hide();
        $("#extrapl").hide();
        $line.hide();
        $mtow.hide();
        $("#scoreboard").hide();
        $("#countdown").hide();
        $("#grass").hide();
        $("#cloud").hide();
    }

    function showGame() {
        $("#extrapr").show();
        $("#extrapl").show();
        $line.show();
        $mtow.show();
        $("#scoreboard").show();
        $("#countdown").show();
        $("#grass").show();
        $("#cloud").show();
    }

    function Tizzy() {
        clearInterval(timer);
        let ranNum = Math.random();
        if (ranNum > 0.5) {
            $("#ltizzy").show();
            $("#lwinner").hide();
            $("#rwinner").hide();
            hideGame();
            $lscore = $lscore + 1;
            console.log($lscore);
            console.log($rscore);
            $(".score").html($lscore + " : " + $rscore);
            $gamePlay = false;
        } else {
            $("#rtizzy").show();
            $("#lwinner").hide();
            $("#rwinner").hide();
            hideGame();
            $rscore = $rscore + 1;
            console.log($lscore);
            console.log($rscore);
            $(".score").html($lscore + " : " + $rscore);
            $gamePlay = false;
        }
    }

});
