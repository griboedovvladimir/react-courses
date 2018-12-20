import React, { Component } from 'react';
import StoreService from "../../services/store.service";

class ModelChoice extends Component{
    constructor(){
        super();
      this.selectedModel = StoreService.getStore() ? StoreService.getStore().model : null;
    }

    componentDidMount(){
        if(this.selectedModel){
            this.props.changeUndisabled();
        }
    }

    addToStore = (e) => {
        StoreService.addToStore({model: e.target.value});
    };

    focusEventHandler = (e) => {
        this.addToStore(e);
        this.props.changeUndisabled();
    };

    render(){
        let options = this.props.renderData.map((model, i) => <option key={i}>{model}</option>);
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