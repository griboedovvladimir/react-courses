'use strict';
let frontCanvas=document.getElementById('frontCanvas');
frontCanvas.width=600;
frontCanvas.height=600;
let ctx=frontCanvas.getContext('2d'),
    {width,height}=frontCanvas;

ctx.fillStyle = "black";
ctx.globalAlpha = 0.6;
ctx.fillRect(0,0,600, 600);
ctx.globalAlpha = 1.0;

ctx.clearRect(100,100,width-200, height-200);

frontCanvas.addEventListener('mousedown',onMouseDown);

function onMouseDown(){
//     if (event.clientX)
 }




let backGroundCanvas=document.getElementById('file');

backGroundCanvas.addEventListener('change',()=> {
    if (backGroundCanvas.files[0]) {
        blobToImg(backGroundCanvas.files[0]).then(img=> {
            let canvas=document.createElement('canvas');
            canvas.width=600;
            canvas.height=600;
            let ctx=canvas.getContext('2d');
            ctx.drawImage(img,0,0, 600, 600);
            console.log(ctx);
            document.body.appendChild(canvas);
        })
    }
});

function blobToImg(blob){
    return new Promise(resolve=> {
        let img=new Image();
        img.onload=()=>resolve(img);
        img.src= URL.createObjectURL(blob);
        let btnCrop=document.createElement('button');
        btnCrop.type='button';
        btnCrop.id='btnCrop';
        btnCrop.value='CROP';
        backGroundCanvas.appendChild(btnCrop);
    })
}




