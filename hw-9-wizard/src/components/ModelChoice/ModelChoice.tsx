import React, { Component } from 'react';
import StoreService from "../../services/store.service";

class ModelChoice extends Component <any, any>{
    public selectedModel = this.storeService.getStore() ? this.storeService.getStore().brand : null;

    constructor(props:any, private storeService: StoreService){
        super(props);
    }

    componentDidMount(){
        if(this.selectedModel){
            this.props.changeUndisabled();
        }
    }

    addToStore = (e: React.ChangeEvent<HTMLSelectElement> | React.FocusEvent<HTMLFormElement>): void => {
        this.storeService.addToStore({brand: e.target.value});
    };

    focusEventHandler = (e: React.FocusEvent<HTMLFormElement>) => {
        this.addToStore(e);
        this.props.changeUndisabled();
    };

    render(): React.ReactNode {
        let options = this.props.renderData.map((model: string, i:number): React.ReactNode => <option key={i}>{model}</option>);
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