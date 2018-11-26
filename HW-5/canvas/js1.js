'use strict';

let fileInput=document.getElementById('file');

fileInput.addEventListener('change',()=> {
    if (fileInput.files[0]) {
        blobToImg(fileInput.files[0]).then(img=> {
            let {width,height}=img,
                canvas=document.createElement('canvas');
            canvas.width=width;
            canvas.height=height;
            let ctx=canvas.getContext('2d');
            ctx.drawImage(img,width/4, height/4,width/2, height/2,0,0, width, height);
            document.body.appendChild(canvas);
        })
    }
});

function blobToImg(blob){
    return new Promise(resolve=> {
        let img=new Image();
        img.onload=()=>resolve(img);
        img.src= URL.createObjectURL(blob);
    })
}

