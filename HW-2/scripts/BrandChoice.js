class BrandChoice {
    constructor(appData) {
        this.appData = appData;
        this.store = new Store();
        this.selectedBrand = this.store.getStore().brand || '';
        this.render();
        this.addListeners()
}

addListeners(){
    document.getElementById('next').addEventListener('click', this);
    document.getElementById('brand').addEventListener('focus', this);
}

removeListeners(){
    document.getElementById('next').removeEventListener('click', this);
    document.getElementById('brand').removeEventListener('focus', this);
}

    handleEvent(e) {
        if(e.target.id === 'next') {
            this.removeListeners();
            this.store.addToStore({...this.store.addToStore, brand: document.getElementById('form').brand.value});
            new ModelChoice(this.appData, document.getElementById('form').brand.value);
        }
        if(e.target.id === 'brand'){
            document.getElementById('next').disabled = false;
        }
    }

    render() {
        let options = Object.keys(this.appData.brand).reduce((cnt,el)=>{
            if(el=== this.selectedBrand){
                return cnt + `<option selected>${el}</option>`;
            }else {
                return cnt + `<option>${el}</option>`;
            }
        },'');
        document.getElementById('wrapper').innerHTML = `
        <form id="form">
        <label for="brand">Choice brand</label>
        <select name="brand" id="brand">
            ${options}
        </select>
        <button type="button" id = 'next' disabled>Next</button>
    </form>
        `
    }
}

window.BrandChoice = BrandChoice;