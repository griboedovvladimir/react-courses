var grafics = {
    g1: {1: 10, 2: 4, 3: 15, 4: 22, 5: 16, 6: 20, 7: 18, 8: 13, 9: 16, 10: 35},
    g2: {1: 11, 2: 10, 3: 8, 4: 6, 5: 13, 6: 12, 7: 22, 8: 18, 9: 16, 10: 15},
    g3: {1: 5, 2: 4, 3: 2, 4: 1, 5: 7, 6: 6, 7: 16, 8: 12, 9: 10, 10: 9},
    // g4: {1: 3, 2: 4, 3: 8, 4: 12, 5: 15, 6: 18, 7: 21, 8: 22, 9: 25, 10: 27}
};

//цвета линий
var colors = ['#f00', '#0f0', '#00f','#0ff'];

var canvas = document.getElementById("draws");
var gr = canvas.getContext("2d");

var maxCount = 35 + 10;
var y0;
var x0 = y0 = 30;
var width = canvas.width - 80;
var height = canvas.height - 90;
var stepY = Math.round(height / maxCount);
var stepX = Math.round(width / 10);

gr.beginPath();
//Вертикальная линия
gr.moveTo(x0, y0);
gr.lineTo(x0, height + y0);
//горизонтальная линия
gr.lineTo(width + x0, height + y0);

var m = 0;
var x_max = 15;
//нижняя разметка и цифры
for (var i = x0; m < x_max; i += stepX) {
    m ++;
    gr.moveTo(i, height + y0);
    gr.lineTo(i, height + y0 + 15);
    gr.fillText(m, i + 3, height + y0 + 15);
}
gr.lineWidth = 2;
gr.stroke();
gr.closePath();

//рисуются кривые
var nr_color = 0;
for (var g in grafics) {
    gr.beginPath();

    for (var m in grafics[g]) {
        var count = grafics[g][m];
        var x = x0 + ((m - 1) * stepX);
        var y = y0 + (height - count * stepY);

        if (1 == m)
            gr.moveTo(x, y);
        else
            gr.lineTo(x, y);

        gr.arc(x, y, 4, 0, 4 * Math.PI, false);
        gr.fillText(count, x-5, y-5);//текст над точками
        gr.fillText(count, x0 - 15, y);//текст у боковой линии

    }

    gr.strokeStyle = colors[nr_color]; //цвет линии
    nr_color++;
    gr.lineWidth = 1;//толщина линии
    gr.stroke();
}