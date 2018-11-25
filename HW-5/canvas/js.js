'use strict';

let canvas=document.getElementById('testCanvas');

canvas.width=500;
canvas.height=500;
let ctx=canvas.getContext('2d'),
{width,height}=canvas;
ctx.fillStyle='red';
ctx.fillRect(0,0,width, height);
ctx.clearRect(50,50,width-100, height-100);

ctx.fillStyle='black';

ctx.beginPath();
ctx.moveTo(250,50);
ctx.lineTo(450, 450);
ctx.lineTo(50, 450);
ctx.closePath();
ctx.fill();

ctx.fillStyle='orange';
ctx.beginPath();
ctx.arc(250 , 250,200,0 ,2 * Math.PI);
ctx.closePath();
ctx.fill();

canvas.toBlob(blob=> {
    let url=URL.createObjectURL(blob);
    let a=document.createElement('a');
    a.href=url;
    a.download='image.png';
    a.dispatchEvent(new MouseEvent('click'));
});



//let url=canvas.toDataURL();
//let a=document.createElement('a');
//a.href=url;
//a.download='image.png';
//a.dispatchEvent(new MouseEvent('click'));

//console.log(ctx.getImageData(0,0,canvas.width, canvas.heigth ));

