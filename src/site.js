var mousePos;
var offset = [0,0];
var div;
var mouseDown = false;

divCenter = document.createElement("div");
divCenter.style.position = "absolute";
divCenter.style.left = "50%";
divCenter.style.top = "0px";
divCenter.style.width = "350px";
divCenter.style.height = "500px";
divCenter.style.background = "gray";
divCenter.style.color = "blue";

document.body.appendChild(divCenter);

divCenter.addEventListener('mousedown', function(e) {
    //Make it only left click
    mouseDown = true;
    offset = [
        divCenter.offsetLeft - e.clientX,
        divCenter.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    mouseDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (mouseDown) {
        mousePos = {

            x : event.clientX,
            y : event.clientY

        };
        divCenter.style.left = (mousePos.x + offset[0]) + 'px';
        divCenter.style.top  = (mousePos.y + offset[1]) + 'px';
    }
}, true);