var canvas;

var StatsEnum = {"ATK":1, "STR":2, "HRT":3, "AGI":4};

window.onload = function() {
    canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");

    var imageObj = new Image();

    imageObj.onload = function() {
        ctx.drawImage(imageObj, 0, 0);
    };

    imageObj.src = 'res/statPage.png';

    drawTextOnStat(StatsEnum.AGI);
};

function drawTextOnStat(stat, number){
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
}
