// setup canvas
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// redraw
function reDraw(e){
    e.preventDefault();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    go();
}

const btnClear = document.querySelector('.action.redraw');
btnClear.addEventListener('click', reDraw);

// save image
function saveImage(e){
    const image = canvas.toDataURL();
    const time = new Date();
    const filename = `electricsheep-${getFromURL('type')}-${time.getFullYear()}${time.getMonth()}${time.getDay()}${time.getHours()}${time.getMinutes()}${time.getSeconds()}`
    this.setAttribute('href', image);
    this.setAttribute('download', filename);
}

const btnSave = document.querySelector('.action.save');
btnSave.addEventListener('click', saveImage);

//parse querystring passed value (deals only with ?type=)
function getFromURL(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

//insert script based on querystring type value
var type = `generators/${getFromURL('type')}.js`;
var scriptEl = document.createElement('script');
scriptEl.setAttribute('src', type);
document.querySelector('body').appendChild(scriptEl);