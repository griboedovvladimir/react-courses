class ModelChoice {
    constructor(appData, brand) {
        this.brand = brand;
        this.appData = appData;
        this.store = new Store();
        this.selectedModel = this.store.getStore().model || '';
        this.render();
        this.addListeners();
    }

    addListeners() {
        document.getElementById('next').addEventListener('click', this);
        document.getElementById('back').addEventListener('click', this);
        document.getElementById('model').addEventListener('focus', this);
    }

    removeListeners() {
        document.getElementById('next').removeEventListener('click', this);
        document.getElementById('back').removeEventListener('click', this);
        document.getElementById('model').removeEventListener('focus', this);
    }

    handleEvent(e) {
        if (e.target.id === 'back') {
            this.removeListeners();
            document.getElementById('form').remove();
            new BrandChoice(this.appData)
        }
        if (e.target.id === 'next') {
            this.store.addToStore({...this.store.addToStore, model: document.getElementById('form').model.value});
            document.getElementById('form').remove();
            new FuelChoice(this.appData, this.brand)
        }
        if(e.target.id === 'model'){
            document.getElementById('next').disabled = false;
        }
    }

    render() {
        let options = this.appData.brand[this.brand].reduce((cnt, el) => {
            if(el=== this.selectedModel){
                return cnt + `<option selected>${el}</option>`;
            }else {
                return cnt + `<option>${el}</option>`;
            }
        },'');
        document.getElementById('wrapper').innerHTML = `
        <form id="form">
        <label for="model">Choice model</label>
        <select name="model" id="model">
           ${options}
        </select>
        <button type="button" id = 'back'>Back</button>
        <button type="button" id = 'next' disabled>Next</button>
    </form>
        `
    }
}

window.ModelChoice = ModelChoice;