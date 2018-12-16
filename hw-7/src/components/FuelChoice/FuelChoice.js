import React, {Component} from 'react';
import StoreService from "../../services/store.service";

class FuelChoice extends Component {

    constructor() {
        super();
        this.selectedFuel = StoreService.getStore() ? StoreService.getStore().fuel : null;
    }

    componentDidMount() {
        if (this.selectedFuel) {
            this.props.changeUndisabled();
        }
    }

    addToStore = (e) => {
        StoreService.addToStore({fuel: e.target.value});
    };

    focusEvents = (e) => {
        this.addToStore(e);
        this.props.changeUndisabled();
    };

    render() {
        let options = this.props.renderData.map((fuel, i) => <option key={i}>{fuel}</option>);
        return (
            <form onFocus={this.focusEvents} id="form">
                <label htmlFor="fuel">Choice fuel</label>
                <select defaultValue={this.selectedFuel} onChange={this.addToStore} name="fuel" id="fuel">
                    ${options}
                </select>
            </form>
        )
    }
}

export default FuelChoice;