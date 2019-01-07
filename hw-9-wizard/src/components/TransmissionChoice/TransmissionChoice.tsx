import React, {Component} from 'react';
import StoreService from "../../services/store.service";
import {IStepsProps} from '../../interfaces/interfaces';

class TransmissionChoice extends Component <IStepsProps, {}> {
    private storeService = new StoreService();
    private selectedTransmission = this.storeService.getStore() ? this.storeService.getStore().transmission : '';

    public componentDidMount(): void {
        if (this.selectedTransmission) {
            this.props.changeEnabled();
        }
    }

    private addToStore = (e: React.ChangeEvent<HTMLSelectElement> | React.FocusEvent<HTMLFormElement>) => {
        this.storeService.addToStore({transmission: e.target.value});
    };

    private focusEventHandler = (e: React.FocusEvent<HTMLFormElement>) => {
        this.addToStore(e);
        this.props.changeEnabled();
    };

    public render(): React.ReactNode {
        let options = this.props.renderData.map((model: string, i: number) => <option key={i}>{model}</option>);
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