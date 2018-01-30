// set context properties
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 2;

// draw
function draw(length, spacing){
    var x, y, x2, y2, color;

    for(x = spacing; x <= window.innerWidth - spacing; x = x + spacing){
        for(y = spacing; y <= window.innerHeight - spacing; y = y + spacing){
            x2 = x + Math.round(Math.random() * length * 2) - length;
            y2 = y + length;
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
    draw(10, 40);
}

// always trigger drawing using this function (re-drawing depends on it)
go();