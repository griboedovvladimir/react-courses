class FuelChoice {
    constructor(appData, brand) {
        this.brand = brand;
        this.appData = appData;
        this.store = new Store();
        this.selectedFuel = this.store.getStore().fuel || '';
        this.render();
        this.addListeners();
    }

    addListeners() {
        document.getElementById('next').addEventListener('click', this);
        document.getElementById('back').addEventListener('click', this);
        document.getElementById('fuel').addEventListener('focus', this);
    }

    removeListeners() {
        document.getElementById('next').removeEventListener('click', this);
        document.getElementById('back').removeEventListener('click', this);
        document.getElementById('fuel').removeEventListener('focus', this);
    }

    handleEvent(e) {
        if (e.target.id === 'back') {
            this.removeListeners();
            document.getElementById('form').remove();
            new ModelChoice(this.appData,this.brand);
        }
        if (e.target.id === 'next') {
            this.removeListeners();
            this.store.addToStore({...this.store.addToStore, fuel: document.getElementById('form').fuel.value});
            document.getElementById('form').remove();
            new TransmitionChoice(this.appData,this.brand);
        }
        if(e.target.id === 'fuel'){
            document.getElementById('next').disabled = false;
        }
    }

    render() {
        let options = this.appData.fuel.reduce((cnt, el) => {
            if(el=== this.selectedFuel){
                return cnt + `<option selected>${el}</option>`;
            }else {
                return cnt + `<option>${el}</option>`;
            }
        }, '');
        document.getElementById('wrapper').innerHTML = `
        <form id="form">
        <label for="fuel">Choice fuel</label>
        <select name="fuel" id="fuel">
           ${options}
        </select>
        <button type="button" id = 'back'>Back</button>
        <button type="button" id = 'next' disabled>Next</button>
    </form>
        `
    }
}

window.FuelChoice = FuelChoice;