window.onload = function() {
    var c = document.getElementById("Canvas");
    var ctx = c.getContext("2d");

    var imageObj = new Image();

    imageObj.onload = function() {
        ctx.drawImage(imageObj, 0, 0);
    };

    imageObj.src = 'res/statPage.png';

};