let ctxafics = {
    g1: {1: 1.9887, 2: 1.9757, 3: 1.9578, 4: 2.0003, 5: 2.0075, 6: 2.0028, 7: 1.9844, 8: 2.0398, 9: 2.1169, 10: 2.1169},
    // g2: {1: 11, 2: 10, 3: 8, 4: 6, 5: 13, 6: 12, 7: 22, 8: 18, 9: 16, 10: 15},
    // g3: {1: 5, 2: 4, 3: 2, 4: 1, 5: 7, 6: 6, 7: 16, 8: 12, 9: 10, 10: 9},
    // // g4: {1: 3, 2: 4, 3: 8, 4: 12, 5: 15, 6: 18, 7: 21, 8: 22, 9: 25, 10: 27}
};

//цвета линий
let colors = ['#f00', '#0f0', '#00f','#0ff'];

let canvas = document.getElementById("draws");
let ctx = canvas.getContext("2d");

let maxCount = 35 + 10;
let y0;
let x0 = y0 = 30;
let width = canvas.width - 80;
let height = canvas.height - 90;
let stepY = Math.round(height / maxCount);
let stepX = Math.round(width / 10);

ctx.beginPath();
//Вертикальная линия
ctx.moveTo(x0, y0);
ctx.lineTo(x0, height + y0);
//горизонтальная линия
ctx.lineTo(width + x0, height + y0);

let m = 0;
let x_max = 12;
//нижняя разметка и цифры
for (let i = x0; m < x_max; i += stepX) {
    m ++;
    ctx.moveTo(i, height + y0);
    ctx.lineTo(i, height + y0 + 15);
    ctx.fillText('янв', i + 3, height + y0 + 15);
}
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

//рисуются кривые
let nr_color = 0;
for (let g in ctxafics) {
    ctx.beginPath();

    for (let m in ctxafics[g]) {
        let count = ctxafics[g][m];
        let x = x0 + ((m - 1) * stepX);
        let y = y0 + (height - count * stepY);

        if (1 == m)
            ctx.moveTo(x, y);
        else
            ctx.lineTo(x, y);

        // ctx.arc(x, y, 4, 0, 4 * Math.PI, false);
        // ctx.closePath();
        // ctx.fill();
        ctx.fillText(count, x-5, y-5);//текст над точками
        ctx.fillText(count, x0 - 15, y);//текст у боковой линии

    }

    ctx.strokeStyle = colors[nr_color]; //цвет линии
    nr_color++;
    ctx.lineWidth = 2;//толщина линии
    ctx.stroke();
}