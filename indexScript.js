var Stats = {"ATK":1, "STR":2, "HRT":3, "AGI":4};

window.onload = function() {

    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");

    var imageObj = new Image();

    imageObj.onload = function() {
        ctx.drawImage(imageObj, 0, 0);
        drawTextOnStat(canvas, Stats.ATK, 1);
        drawTextOnStat(canvas, Stats.HRT, 1);
        drawTextOnStat(canvas, Stats.STR, 1);
        drawTextOnStat(canvas, Stats.AGI, 1);

    };

    imageObj.src = 'res/statPage.png';
};

function drawTextOnStat(canvas, stat, number){
    console.log("drawText called with ".concat(stat).concat(" and ".concat(number)));

    var ctx = canvas.getContext("2d");

    ctx.font = "19px rsFont";
    ctx.fillStyle = "yellow";
    // ctx.textShadow = "2px 2px 5px red";

    var x;
    var y;

    switch (stat){
        case Stats.ATK:
            x = canvas.width * (35/128);
            y = canvas.height * (21/128);
            break;

        case Stats.HRT:
            x = canvas.width * (68/128);
            y = canvas.height * (21/128);
            break;

        case Stats.STR:
            x = canvas.width * (35/128);
            y = canvas.height * (33/128);
            break;

        case Stats.AGI:
            x = canvas.width * (68/128);
            y = canvas.height * (33/128);
            break;
    }

    ctx.fillText(number, x, y);

}
