class Summary {
    constructor(appData, brand) {
        this.brand = brand;
        this.appData = appData;
        this.store = new Store();
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
        let list = Object.keys(this.store.getStore()).reduce((cnt,el)=>{
                return cnt + `<li>${el} : ${this.store.getStore()[el]}</li>`;
        },'');
        document.getElementById('wrapper').innerHTML = `
        <div id="form">
        <h2>Your choice:</h2>
        <ul>
        ${list}
</ul>
        <button type="button" id = 'back'>Back</button>
    </div>
        `;
    }
}

window.Summary = Summary;