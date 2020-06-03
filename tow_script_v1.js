//<html>
//விளையாட்டை வெல்ல, உங்கள் அம்பு விசையைப் பயன்படுத்தி மற்ற வீரரை கோடு முழுவதும் இழுக்கவும். வலது பிளேயர் வலது அம்பு விசையைப் பயன்படுத்துகிறார், இடது பிளேயர் இடது அம்பு விசையைப் பயன்படுத்துகிறார். டைமரை மனதில் கொள்ளுங்கள், உங்கள் நேரம் முடிந்துவிட விரும்பவில்லை! விளையாட்டைத் தொடங்க, கீழே உள்ள பொத்தானை அழுத்தவும். <br><br><br>
//            ጨዋታውን ለማሸነፍ ሌላውን ተጫዋች በመስመሩ ላይ ለመጎተት የቀስት ቁልፍዎን ይጠቀሙ። የቀኝ ማጫወቻ የቀኝ ቀስት ቁልፉን ይጠቀማል እና የግራ አጫዋቹ የግራ ቀስት ቁልፉን ይጠቀማል። ሰዓት ቆጣሪውን ልብ ይበሉ ፣ ጊዜዎ እንዲጠናቀቁ አይፈልጉም! ጨዋታውን ለመጀመር ከታች ያለውን ቁልፍ ይምቱ።
//</html>



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
