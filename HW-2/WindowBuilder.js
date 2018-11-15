// const data = {
//     brand: {
//         Opel: ["Astra", "Vectra", "Zafira"],
//         Citroen: ["Xsara", "Xantia", "C5", "Berlingo"]
//     },
//     fuel:["petrol", "diesel"],
//     transmission: ["automatic", "manual"]
// };


let summery=[];


class WindowBuilder{
    constructor(){
        this.render();
        document.getElementById('next').addEventListener('click',this);
    }

    handleEvent(e){
        summery.push( document.getElementById('form').brand.value);
        document.getElementById('form').remove();
        console.log(summery);
        new WindowBuilder();
    }

    render(){
        document.getElementById('wrapper').innerHTML = `
        <form id="form">
        <label for="brand">Choice brand</label>
        <select name="brand" id="brand">
            <option>Opel</option>
            <option>Citroen</option>
        </select>
        <button type="button" id = 'next'>Next</button>
    </form>
        `
    }
}

window.WindowBuilder = WindowBuilder;