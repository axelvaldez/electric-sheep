// set context properties
ctx.strokeStyle = '#000000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 2;

// draw
 function draw(spacing){
    for (var x = 0; x <= window.innerWidth; x += spacing){
        for (y = 0; y <= window.innerHeight; y += spacing){
            ctx.beginPath();
            if(Math.random() < .5){
                ctx.moveTo(x, y);
                ctx.lineTo(x + spacing, y + spacing);
            }else{
                ctx.moveTo(x, y + spacing);
                ctx.lineTo(x + spacing, y);
            }
            ctx.stroke();
        }
    }
}

// call drawLine n times
function go(){
    draw(20);
}

// always trigger drawing using this function (re-drawing depends on it)
go();