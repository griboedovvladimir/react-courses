import React, {Component} from 'react';
import StoreService from "../../services/store.service";

class TransmissionChoice extends Component {

    constructor() {
        super();
        this.selectedTransmission = StoreService.getStore() ? StoreService.getStore().transmission : null;
    }

    componentDidMount() {
        if (this.selectedTransmission) {
            this.props.changeUndisabled();
        }
    }

    addToStore = (e) => {
        StoreService.addToStore({transmission: e.target.value});
    };

    focusEventHandler = (e) => {
        this.addToStore(e);
        this.props.changeUndisabled();
    };

    render() {
        let options = this.props.renderData.map((model, i) => <option key={i}>{model}</option>);
        return (
            <form id="transmission" onFocus={this.focusEventHandler}>
                <label htmlFor="transmission">Choice transmission</label>
                <select name="transmission" id="transmission" defaultValue={this.selectedTransmission}
                        onChange={this.addToStore}>
                    ${options}
                </select>
            </form>
        )
    }
}

export default TransmissionChoice;