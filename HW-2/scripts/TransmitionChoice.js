class TransmitionChoice {
    constructor(appData, brand) {
        this.brand = brand;
        this.appData = appData;
        this.store = new Store();
        this.selectedTransmition = this.store.getStore().fuel || '';
        this.render();
        this.addListeners();
    }

    addListeners() {
        document.getElementById('next').addEventListener('click', this);
        document.getElementById('back').addEventListener('click', this);
        document.getElementById('transmission').addEventListener('focus', this);
    }

    removeListeners() {
        document.getElementById('next').removeEventListener('click', this);
        document.getElementById('back').removeEventListener('click', this);
        document.getElementById('transmission').removeEventListener('focus', this);
    }

    handleEvent(e) {
        if (e.target.id === 'back') {
            this.removeListeners();
            document.getElementById('form').remove();
            new FuelChoice(this.appData, this.brand);
        }
        if (e.target.id === 'next') {
            this.removeListeners();
            this.store.addToStore({
                ...this.store.addToStore,
                transmission: document.getElementById('form').transmission.value
            });
            document.getElementById('form').remove();
            new Summary(this.appData, this.brand);
        }
        if(e.target.id === 'transmission'){
            document.getElementById('next').disabled = false;
        }
    }

    render() {
        let options = this.appData.transmission.reduce((cnt, el) => {
            if(el=== this.selectedTransmition){
                return cnt + `<option selected>${el}</option>`;
            }else {
                return cnt + `<option>${el}</option>`;
            }
        }, '');
        document.getElementById('wrapper').innerHTML = `
        <form id="form">
        <label for="transmission">Choice transmission</label>
        <select name="transmission" id="transmission">
           ${options}
        </select>
        <button type="button" id = 'back'>Back</button>
        <button type="button" id = 'next' disabled>Next</button>
    </form>
        `;
    }
}

window.TransmitionChoice = TransmitionChoice;