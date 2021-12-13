canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";

canvas.addEventListener( "mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value ;
radius=document.getElementById("radius").value ;
width=document.getElementById("width").value ;
mouseEvent="down";
}
canvas.addEventListener( "mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="up";
}
canvas.addEventListener( "mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="leave";
}
canvas.addEventListener( "mousemove",my_mousemove);
function my_mousemove(e){
    console.log(e);
    current_positionmouseX=e.clientX-canvas.offsetLeft;
    current_positionmouseY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="down"){
 ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.arc(current_positionmouseX,current_positionmouseY,radius,0,2*Math.PI);
ctx.stroke();

    }

}
function ca(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}




