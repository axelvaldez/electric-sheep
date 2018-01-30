// set context properties
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 2;

// draw
function draw(length, spacing){
    var x, y, x2, y2, color, stepX = 0, stepY = 0;

    for(x = spacing; x <= window.innerWidth - spacing; x = x + spacing){
        stepX++;
        stepY = 0;
        for(y = spacing; y <= window.innerHeight - spacing; y = y + spacing){
            stepY++;
            console.log(stepY);
            x2 = x + Math.round((stepX * length * 2) / (window.innerWidth / spacing)) - length;
            y2 = y + Math.round((stepY * length * 2) / (window.innerHeight / spacing)) - length;
            color = (170 * x) / window.innerWidth + 220;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
            ctx.stroke();
        }
    }
}

// call drawLine n times
function go(){
    draw(20, 40);
}

// always trigger drawing using this function (re-drawing depends on it)
go();