import React, {Component} from 'react';
import StoreService from '../../services/store.service';
import {IStepsProps} from '../../interfaces/interfaces';

class FuelChoice extends Component <IStepsProps, {}>{
    private storeService = new StoreService();
    private  selectedFuel = this.storeService.getStore() ? this.storeService.getStore().fuel : '';

    public componentDidMount() {
        if (this.selectedFuel) {
            this.props.changeEnabled();
        }
    }

    private addToStore = (e: React.ChangeEvent<HTMLSelectElement> | React.FocusEvent<HTMLFormElement>) => {
        this.storeService.addToStore({fuel: e.target.value});
    };

    private focusEventHandler = (e: React.FocusEvent<HTMLFormElement>) => {
        this.addToStore(e);
        this.props.changeEnabled();
    };

    public render(): React.ReactNode {
        let options = this.props.renderData.map((fuel: string, i: number) => <option key={i}>{fuel}</option>);
        return (
            <form id="form" onFocus={this.focusEventHandler}>
                <label htmlFor="fuel">Choice fuel</label>
                <select id="fuel" name="fuel" defaultValue={this.selectedFuel} onChange={this.addToStore}>
                    ${options}
                </select>
            </form>
        )
    }
}

export default FuelChoice;