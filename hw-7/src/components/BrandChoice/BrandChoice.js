import React, {Component} from 'react';
import './BrandChoice.css';
import StoreService from '../../services/store.service'


class BrandChoice extends Component {
    constructor() {
        super();
        this.selectedBrand = StoreService.getStore() ? StoreService.getStore().brand : null;
    }

    addToStore = (e) => {
        StoreService.addToStore({brand: e.target.value});
    };

    focusEvents = (e) => {
        this.addToStore(e);
        this.props.changeUndisabled();
    };

    render() {
        let options = Object.keys(this.props.renderData).map((brand, i) => <option key={i}>{brand}</option>);
        return (
            <form onFocus={this.focusEvents} id="form">
                <label htmlFor="brand">Choice brand</label>
                <select defaultValue={this.selectedBrand} onChange={this.addToStore} name="brand" id="brand">
                    ${options}
                </select>
            </form>
        )
    }
}

export default BrandChoice;