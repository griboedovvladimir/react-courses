class FuelChoice {
    constructor(appData, brand) {
        this.brand = brand;
        this.appData = appData;
        this.render();
        this.addListeners();
    }

    addListeners() {
        document.getElementById('next').addEventListener('click', this);
        document.getElementById('back').addEventListener('click', this);
    }

    removeListeners() {
        document.getElementById('next').removeEventListener('click', this);
        document.getElementById('back').removeEventListener('click', this);
    }

    handleEvent(e) {
        if (e.target.id === 'back') {
            this.removeListeners();
            document.getElementById('form').remove();
            new ModelChoice(this.appData,this.brand);
        }
        if (e.target.id === 'next') {
            this.removeListeners();
            document.getElementById('form').remove();
            new TransmitionChoice(this.appData,this.brand);
        }
    }

    render() {
        let options = this.appData.fuel.reduce((cnt, el) => {
            return `<option>${el}</option>` + cnt;
        }, '');
        document.getElementById('wrapper').innerHTML = `
        <form id="form">
        <label for="fuel">Choice model</label>
        <select name="fuel" id="fuel">
           ${options}
        </select>
        <button type="button" id = 'back'>Back</button>
        <button type="button" id = 'next'>Next</button>
    </form>
        `
    }
}

window.FuelChoice = FuelChoice;