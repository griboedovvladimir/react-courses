const data = Object.entries({
    'Jan': 1.989,
    'Feb': 1.976,
    'Mar': 1.958,
    'Apr': 2.001,
    'May': 2.008,
    'Jun': 2.003,
    'Jul': 1.984,
    'Aug': 2.041,
    'Sep': 2.117,
    'Oct': 2.117
});
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

const maxCount = 3;
const width = canvas.width - 80;
const height = canvas.height - 80;
const stepY = Math.round(height / maxCount);
const stepX = Math.round(width / 10);
let y0, x0 = y0 = 30;

ctx.beginPath();
ctx.moveTo(x0, y0);
ctx.lineTo(x0, height + y0);

ctx.lineTo(width + x0, height + y0);
for (let i = x0, m = 0; m < data.length; i += stepX, m++) {
    ctx.moveTo(i, height + y0);
    ctx.lineTo(i, height + y0 + 15);
    ctx.fillText(data[m][0], i + 3, height + y0 + 15);
}
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

//рисуются кривые

let points =[];

ctx.beginPath();
for (let i = 0; i < data.length; i++) {
    let count = data[i][1];
    let x = x0 + ((i - 1) * stepX);
    let y = y0 * 100 + (height - count * stepY * 9);

    i === 1 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);

    ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
    // ctx.fillText(count, x - 5, y - 5);//текст над точками
    ctx.fillText(count, x0 - 30, y);
    points.push([x,y]);
}

ctx.strokeStyle = "#E10";
ctx.lineWidth = 2;
ctx.stroke();

document.getElementById("chart").addEventListener('mousemove',(e)=>{
    points.forEach(el=>{

    })
});
