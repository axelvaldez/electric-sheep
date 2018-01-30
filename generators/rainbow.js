// set context properties
ctx.strokeStyle = '#FFFFFF';
ctx.fillStyle = '#000000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 2;


// draw
 function draw(composite){
     // define random start coords
    const centerX = Math.floor(Math.random() * (window.innerWidth - 200)) + 100;
    const centerY = (window.innerHeight / 2) + (Math.random() * 200) - 100;
    const radius = Math.random() * 90;
    const color = (360 * centerX) / window.innerWidth;

    //draw one circle
    ctx.globalCompositeOperation = composite;
    ctx.beginPath();
    ctx.fillStyle = `hsl(${color}, 100%, 50%)`;
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();
}

// call drawLine n times
function go(){
    const times = 100;
    for (i = 1; i < times; i++){
        draw('multiply');
    }
}


// always trigger drawing using this function (re-drawing depends on it)
go();