class Summary {
    constructor(appData, brand) {
        this.brand = brand;
        this.appData = appData;
        this.render();
        this.addListeners();
    }

    addListeners() {
        document.getElementById('back').addEventListener('click', this);
    }

    removeListeners() {
        document.getElementById('back').removeEventListener('click', this);
    }

    handleEvent(e) {
        if (e.target.id === 'back') {
            this.removeListeners();
            document.getElementById('form').remove();
            new TransmitionChoice(this.appData, this.brand);
        }
    }

    render() {
        let options = this.appData.transmission.reduce((cnt, el) => {
            return `<option>${el}</option>` + cnt;
        }, '');
        document.getElementById('wrapper').innerHTML = `
        <div id="form">
        <h2>Your choice:</h2>
        <ul>
        <li>Brand:</li>
        <li>Model:</li>
        <li>Fuel</li>
</ul>
        <button type="button" id = 'back'>Back</button>
    </div>
        `;
    }
}

window.Summary = Summary;