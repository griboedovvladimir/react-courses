class ModelChoice {
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
            new BrandChoice(this.appData)
        }
        if (e.target.id === 'next') {
            document.getElementById('form').remove();
            new FuelChoice(this.appData, this.brand)
        }
    }

    render() {
        let options = this.appData.brand[this.brand].reduce((cnt, el) => {
            return `<option>${el}</option>` + cnt;
        }, '');
        document.getElementById('wrapper').innerHTML = `
        <form id="form">
        <label for="model">Choice model</label>
        <select name="model" id="model">
           ${options}
        </select>
        <button type="button" id = 'back'>Back</button>
        <button type="button" id = 'next'>Next</button>
    </form>
        `
    }
}

window.ModelChoice = ModelChoice;