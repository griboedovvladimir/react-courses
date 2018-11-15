class BrandChoice {
    constructor(appData) {
        this.appData = appData;
        this.render();
        document.getElementById('next').addEventListener('click', this);
}

    handleEvent(e) {
        document.getElementById('next').removeEventListener('click', this);
        new ModelChoice(this.appData, document.getElementById('form').brand.value);
    }

    render() {
        let options = Object.keys(this.appData.brand).reduce((cnt,el)=>{
            return cnt + `<option>${el}</option>`;
        },'');
        document.getElementById('wrapper').innerHTML = `
        <form id="form">
        <label for="brand">Choice brand</label>
        <select name="brand" id="brand">
            ${options}
        </select>
        <button type="button" id = 'next'>Next</button>
    </form>
        `
    }
}

window.BrandChoice = BrandChoice;