
let defaulValues = {
    square: document.getElementById('square').getBoundingClientRect(),
    circle: document.getElementById('circle').getBoundingClientRect(),
    parent: document.getElementsByClassName('left')[0].getBoundingClientRect(),
    measures: document.getElementById("canvas").getBoundingClientRect()
};

const fakeSquare = document.createElement('div');
fakeSquare.classList = 'square';
fakeSquare.id = 'fakeSquare';
fakeSquare.style.cssText=
    `backgroundColor:#000;position:absolute;top:${defaulValues.square.top - 40}px;left:${defaulValues.square.left}px`;

const fakeCircle = document.createElement('div');
fakeCircle.classList = 'circle';
fakeCircle.id = 'fakeCircle';
fakeCircle.style.cssText=
    `backgroundColor:#000;position:absolute;top:${defaulValues.circle.top - 40}px;left:${defaulValues.circle.left}px`;

dragElement(document.getElementById('square'),defaulValues);
dragElement(document.getElementById('circle'),defaulValues);


window.addEventListener('resize', () => {
    defaulValues = {
        square: document.getElementById('square').getBoundingClientRect(),
        circle: document.getElementById('circle').getBoundingClientRect(),
        parent: document.getElementsByClassName('left')[0].getBoundingClientRect(),
        measures: document.getElementById("canvas").getBoundingClientRect()
    };
    fakeCircle.style.top = defaulValues.circle.top - 40 + "px";
    fakeCircle.style.left = defaulValues.circle.left + "px";
    fakeSquare.style.top = defaulValues.square.top - 40 + "px";
    fakeSquare.style.left = defaulValues.square.left + "px";
    dragElement(document.getElementById('square'),defaulValues);
    dragElement(document.getElementById('circle'),defaulValues);
});

function dragElement(elmnt,defaulValues ) {
    let cord = elmnt.getBoundingClientRect();
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id)) {
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        if (!document.getElementById('fakeSquare') && elmnt.id === 'square') {
            document.body.appendChild(fakeSquare);
        }
        if (!document.getElementById('fakeCircle') && elmnt.id === 'circle') {
            document.body.appendChild(fakeCircle);
        }
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - cord.left - 40;
        pos2 = pos4 - cord.top - 40;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = pos2 + "px";
        elmnt.style.left = pos1 + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        if (elmnt.id === 'square') {
            elmnt.style.top = defaulValues.square.top - defaulValues.parent.top - 180 + "px";
            elmnt.style.left = defaulValues.square.left - defaulValues.parent.left - 35 + "px";
        }
        if (elmnt.id === 'circle') {
            elmnt.style.top = defaulValues.square.top - defaulValues.parent.top - 180 + "px";
            elmnt.style.left = defaulValues.square.left - defaulValues.parent.left - 35 + "px";
        }
        if (document.getElementById('fakeSquare')) {
            document.getElementById('fakeSquare').remove();
        }
        if (document.getElementById('fakeCircle')) {
            document.getElementById('fakeCircle').remove();
        }
    }
}


let board = document.getElementById("canvas"),
    ctx = board.getContext('2d');
let figures = [];

function canvasInit(figuresArr) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    figuresArr.forEach(el => {
        if (el.type === 'square') {
            ctx.fillRect(el.parameters.x - defaulValues.measures.left - 40, el.parameters.y - defaulValues.measures.top - 40, 80, 80);
        }
        if (el.type === 'circle') {
            ctx.beginPath();
            ctx.arc(el.parameters.x - defaulValues.measures.left, el.parameters.y - defaulValues.measures.top, 40, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();
        }
    })
}

window.addEventListener("mouseup", (e) => {
    const checkInCanvas = (e.y < defaulValues.measures.bottom - 35 && e.y > defaulValues.measures.top + 35)
        && (e.x < defaulValues.measures.right - 35 && e.x > defaulValues.measures.left + 35);
    if (checkInCanvas && (e.target.id === 'square' || e.target.id === 'circle')) {
        figures.push({
            type: e.target.id,
            parameters: {x: e.x, y: e.y},
        });
        canvasInit(figures);
    }
    if (checkInCanvas && document.getElementById('shadowElement')) {
        figures.push({
            type: document.getElementById('shadowElement').className,
            parameters: {x: e.x, y: e.y},
        });
        canvasInit(figures);
        document.getElementById('shadowElement').remove();
    }else if(document.getElementById('shadowElement')){
        document.getElementById('shadowElement').remove();
    }
});

document.getElementById('canvas').addEventListener('mousedown', (e) => {
    function movingShadowElement(e) {
        if(document.getElementById('shadowElement')) {
            document.getElementById('shadowElement').style.top = e.y - 80 + 'px';
            document.getElementById('shadowElement').style.left = e.x - 40 + 'px';
        }
    }
    function removingListeners(e){
        document.getElementById('shadowElement').removeEventListener('mousemove', movingShadowElement);
        document.getElementById('shadowElement').removeEventListener('mouseup',removingListeners);
    }
    function removingCanvasListeners(e){
        document.getElementById('canvas').removeEventListener('mousemove', movingShadowElement);
        document.getElementById('canvas').removeEventListener('mouseup',removingCanvasListeners);
    }

    figures.forEach((el, i) => {
        if ((el.parameters.x + 40 > e.x && el.parameters.x - 40 < e.x) && (el.parameters.y + 40 > e.y && el.parameters.y - 40 < e.y)) {
            figures.splice(i, 1);
            let shadowElement = document.createElement('div');
            shadowElement.classList = el.type === 'square' ? 'square' : 'circle';
            shadowElement.id = 'shadowElement';
            shadowElement.style.cssText = `position:absolute;top:${e.y - 80}px;left:${e.x - 40 }px`;
            document.body.appendChild(shadowElement);
            shadowElement.addEventListener('mousemove', movingShadowElement);
            shadowElement.addEventListener('mouseup',removingListeners);
            document.getElementById('canvas').addEventListener('mousemove', movingShadowElement);
            document.getElementById('canvas').addEventListener('mouseup', removingCanvasListeners);
            canvasInit(figures);
        }
    })
});
