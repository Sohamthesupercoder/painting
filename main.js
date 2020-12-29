var canvas= document.getElementById("MyCanvas");
var ctx=canvas.getContext("2d");
var mouseevent= "empty";
var color;
var line_width;
var last_x;
var last_y;
var ltouch_x;
var ltouch_y;
var ctouch_x;
var ctouch_y;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouseevent="mouseDown";

}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseevent="mouseUp";

}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseevent="mouseLeave";

}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
var current_x=e.clientX-canvas.offsetLeft;
var current_y=e.clientY-canvas.offsetTop;
if (mouseevent=="mouseDown") {
    color=document.getElementById("color").value;
    console.log("color")
    line_width=document.getElementById("WOL").value;
    console.log("width")
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=line_width;
console.log("CWA");
ctx.moveTo(last_x, last_y);
ctx.lineTo(current_x, current_y);
console.log("LT F");
ctx.stroke();
console.log("Stroke");
}

last_x=current_x;
last_y=current_y;
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
mouseevent="mouseDown";

}

canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){
var ctouch_x= e.touches[0].clientX - canvas.offsetLeft;
var ctouch_y= e.touches[0].clientY - canvas.offsetTop;
if (mouseevent=="mouseDown") {
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=line_width;
ctx.moveTo(ltouch_x , ltouch_y);
ctx.lineTo(ctouch_x , ctouch_y);
ctx.stroke();
}

ltouch_x=ctouch_x;
ltouch_y=ctouch_y;
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
