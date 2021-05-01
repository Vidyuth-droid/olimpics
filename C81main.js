canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle=color;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
color="black";
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle=color;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();
color="red";
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle=color;
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();
color="yellow";
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle=color;
ctx.arc(250,240,40,0,2*Math.PI);
ctx.stroke();
color="green";
ctx.beginPath();
ctx.lineWidth=2;
ctx.strokeStyle=color;
ctx.arc(350,240,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    color=document.getElementById("colour").value;
    console.log(color);
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("X = " +mouse_x+ ", Y = "+ mouse_y);
    circle(mouse_x,mouse_y);

}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.lineWidth=2;
    ctx.strokeStyle=color;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();  
}
function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height); 
}