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

    focusEvents = (e) => {
        this.addToStore(e);
        this.props.changeUndisabled();
    };

    render() {
        let options = this.props.renderData.map((model, i) => <option key={i}>{model}</option>);
        return (
            <form onFocus={this.focusEvents} id="transmission">
                <label htmlFor="transmission">Choice transmission</label>
                <select defaultValue={this.selectedTransmission} onChange={this.addToStore} name="transmission"
                        id="transmission">
                    ${options}
                </select>
            </form>
        )
    }
}

export default TransmissionChoice;