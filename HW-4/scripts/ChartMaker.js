export class ChartMaker {
    constructor(data, canvas) {
        this.data = data;
        this.ctx = canvas.getContext("2d");
        this.maxCount = 3;
        this.width = canvas.width - 80;
        this.height = canvas.height - 80;
        this.stepY = Math.round(this.height / this.maxCount);
        this.stepX = Math.round(this.width / 10);
        this.y0 = this.x0 = 30;
        this.points = [];
        this.render();
    }


    makePlot() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.x0, this.y0);
        this.ctx.lineTo(this.x0, this.height + this.y0);

        this.ctx.lineTo(this.width + this.x0, this.height + this.y0);
        for (let i = this.x0, m = 0; m < this.data.length; i += this.stepX, m++) {
            this.ctx.moveTo(i, this.height + this.y0);
            this.ctx.lineTo(i, this.height + this.y0 + 15);
            this.ctx.fillText(this.data[m][0], i + 3, this.height + this.y0 + 15);
        }
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        this.ctx.closePath();
    }

    makeChart() {
        this.ctx.beginPath();
        for (let i = 0; i < this.data.length; i++) {
            let count = this.data[i][1];
            this.x0 = 82;
            let x = this.x0 + ((i - 1) * this.stepX);
            let y = this.y0 * 100 + (this.height - count * this.stepY * 9);
            this.ctx.lineTo(x, y);
            this.ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
            this.points.push([x, y]);
        }

        this.ctx.strokeStyle = "#E10";
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
    }

    makeTooltip(e) {
        if (document.getElementById('tooltip')) {
            document.getElementById('tooltip').remove();
        }
        this.points.forEach((el, i) => {
            if ((e.x > el[0] + 47 && e.x < el[0] + 53) && (e.y - 10 < el[1] && el[1] < e.y - 8)) {
                let tooltip = document.createElement('p');
                tooltip.innerText = `${this.data[i][1]}`;
                tooltip.id = 'tooltip';
                tooltip.style.cssText = `position: absolute; top:${e.y - 50}px; left:${el[0] + 40}px`;
                document.body.appendChild(tooltip);

            }
        })
    }

    render() {
        this.makePlot();
        this.makeChart();
        document.getElementById("chart").addEventListener('mousemove', (e) => {
            this.makeTooltip(e);
        });
    }
}