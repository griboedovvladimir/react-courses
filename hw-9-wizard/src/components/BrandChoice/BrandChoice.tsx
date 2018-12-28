import React, {Component} from 'react';
import './BrandChoice.css';
import StoreService from '../../services/store.service'


class BrandChoice extends Component <any, any> {
    public selectedBrand = this.storeService.getStore() ? this.storeService.getStore().brand : null;

    constructor(props:any, private storeService: StoreService) {
        super(props);
    }

    addToStore = (e: React.ChangeEvent<HTMLSelectElement> | React.FocusEvent<HTMLFormElement>): void => {
        this.storeService.addToStore({brand: e.target.value});
    };

    focusEventHandler = (e: React.FocusEvent<HTMLFormElement>) => {
        this.addToStore(e);
        this.props.changeUndisabled();
    };

    render(): React.ReactNode {
        let options = Object.keys(this.props.renderData).map((brand, i) => <option key={i}>{brand}</option>);
        return (
            <form id="form" onFocus={this.focusEventHandler}>
                <label htmlFor="brand">Choice brand</label>
                <select id="brand" name="brand" defaultValue={this.selectedBrand} onChange={this.addToStore}>
                    ${options}
                </select>
            </form>
        )
    }
}

export default BrandChoice;