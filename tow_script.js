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
//                if (collision($rplayer, $line) == true) {
//                    $("#lwinner").show();
//                    console.log("collision!");
//                    hideGame();
//                } else {
//                    console.log("no collision!");
//                    $("#lwinner").hide();
//                    showGame();
//                }
                break;
            case 39:
                $(mtow).finish().animate({
                    left: "+=20"
                });
//                if (collision($lplayer, $line) == true) {
//                    $("#rwinner").show();
//                    console.log("collision!");
//                    hideGame();
//                } else {
//                    console.log("no collision!");
//                    $("#rwinner").hide();
//                    showGame();
//                }
                break;
        }
    });

    $(document).keydown(function (event) {
        console.log($rplayer)
        console.log($lplayer)

<<<<<<< HEAD
<<<<<<< HEAD
        if (hasRightLost($mtow, $rplayer, $line) == true) {
=======
        if (hasRightLost($mtow, $rplayer, 400) == true) {
>>>>>>> origin/master
=======
        if (hasRightLost($mtow, $rplayer, $line) == true) {
>>>>>>> origin/master
            console.log("collision!");
            $("#lwinner").show();
            $("#rwinner").hide();
        } else {
            console.log("no collision!");
        }

        if (hasLeftLost($mtow, $lplayer, $line) == true) {
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

    $("#startGame").click(function () {
        $("#instructions").hide();
        showGame();
    });

    function hideGame() {
        $("#extrapr").hide();
        $("#extrapl").hide();
        $line.hide();
        mtow.hide();
        $("#scoreboard").hide();
        $("#countdown").hide();
    }

    function showGame() {
        $("#extrapr").show();
        $("#extrapl").show();
        $line.show();
        mtow.show();
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
