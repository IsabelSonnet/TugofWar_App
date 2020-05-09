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
                if (collision($rplayer, $line) == true) {
                    $("#lwinner").show();
                    console.log("collision!");
                    hideGame();
                } else {
                    console.log("no collision!");
                    $("#lwinner").hide();
                    showGame();
                }
                break;
            case 39:
                $(mtow).finish().animate({
                    left: "+=20"
                });
                if (collision($lplayer, $line) == true) {
                    $("#rwinner").show();
                    console.log("collision!");
                    hideGame();
                } else {
                    console.log("no collision!");
                    $("#rwinner").hide();
                    showGame();
                }
                break;
        }
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
