import React, {Component} from 'react';
import StoreService from "../../services/store.service";
import {IStepsProps} from '../../interfaces/interfaces';

class ModelChoice extends Component <IStepsProps, {}> {
    private storeService = new StoreService();
    private selectedModel = this.storeService.getStore() ? this.storeService.getStore().model : '';

    public componentDidMount(): void {
        if (this.selectedModel) {
            this.props.changeEnabled();
        }
    }

    private addToStore = (e: React.ChangeEvent<HTMLSelectElement> | React.FocusEvent<HTMLFormElement>): void => {
        this.storeService.addToStore({model: e.target.value});
    };

    private focusEventHandler = (e: React.FocusEvent<HTMLFormElement>): void => {
        this.addToStore(e);
        this.props.changeEnabled();
    };

    public render(): React.ReactNode {
        let options = this.props.renderData.map((model: string, i: number): React.ReactNode => <option
            key={i}>{model}</option>);
        return (
            <form id="form" onFocus={this.focusEventHandler}>
                <label htmlFor="model">Choice model</label>
                <select id="model" name="model" defaultValue={this.selectedModel} onChange={this.addToStore}>
                    ${options}
                </select>
            </form>
        )
    }
}

export default ModelChoice;