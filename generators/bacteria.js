// set context properties
ctx.strokeStyle = '#000000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

// draw
 function drawLine(length, color, composite){
     // define random start coords
    var startX = Math.floor(Math.random() * (window.innerWidth + 1));
    var startY = Math.floor(Math.random() * (window.innerHeight + 1));

    startX = Math.floor(startX / (length * 2)) * (length * 2);
    startY = Math.floor(startY / (length * 2)) * (length * 2);

    //define random variation from the start coords
    const randomX = Math.round(Math.random()) ? 0 - length : length;
    const randomY = Math.round(Math.random()) ? 0 - length : length;

    // end coords = start + variation
    const endX = startX + randomX;
    const endY = startY + randomY;

    //draw one line
    ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
    ctx.globalCompositeOperation = composite;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.bezierCurveTo(startX,startY - 1 ,startX - 1,endY,endX, endY);
    // ctx.lineTo(endX, endY);
    ctx.stroke();
}

// call drawLine n times
function go(){
    const times = 2000;
    const lineLength = 10;
    for (i = 1; i < times; i++){
        drawLine(lineLength, i, 'multiply');
    }
}

// always trigger drawing using this function (re-drawing depends on it)
go();